const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// ═══ ENV VARIABLES (set these on Render.com) ═══
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI; // https://your-app.onrender.com/callback
const SITE_URL = process.env.SITE_URL || 'https://seekiome.github.io';

// Store user data in memory (resets on server restart, but fine for personal use)
let userData = null;
let accessToken = null;
let refreshToken = null;

app.use(cors({
  origin: 'https://seekiome.github.io',
  methods: ['GET'],
}));

// Block direct browser access to API - only allow requests from your site
app.use('/api', (req, res, next) => {
  const origin = req.get('origin') || req.get('referer') || '';
  if (!origin.includes('seekiome.github.io')) {
    return res.status(403).json({ error: 'Access denied' });
  }
  next();
});

// ═══ STEP 1: Redirect user to Discord OAuth2 ═══
app.get('/login', (req, res) => {
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: 'identify',
  });
  res.redirect(`https://discord.com/api/oauth2/authorize?${params}`);
});

// ═══ STEP 2: Discord redirects here with a code ═══
app.get('/callback', async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).send('No code provided');

  try {
    // Exchange code for token
    const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
      }),
    });

    const tokenData = await tokenRes.json();
    if (tokenData.error) {
      return res.status(400).send(`Discord error: ${tokenData.error_description}`);
    }

    accessToken = tokenData.access_token;
    refreshToken = tokenData.refresh_token;

    // Fetch user data immediately
    await fetchUserData();

    // Redirect back to your site
    res.redirect(SITE_URL);
  } catch (err) {
    console.error('Callback error:', err);
    res.status(500).send('Server error');
  }
});

// ═══ Fetch user data from Discord ═══
async function fetchUserData() {
  if (!accessToken) return null;

  try {
    const userRes = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (userRes.status === 401) {
      // Token expired, try refresh
      await refreshAccessToken();
      const retryRes = await fetch('https://discord.com/api/users/@me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      userData = await retryRes.json();
    } else {
      userData = await userRes.json();
    }

    return userData;
  } catch (err) {
    console.error('Fetch user error:', err);
    return null;
  }
}

// ═══ Refresh token ═══
async function refreshAccessToken() {
  if (!refreshToken) return;

  try {
    const res = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
    });

    const data = await res.json();
    if (data.access_token) {
      accessToken = data.access_token;
      refreshToken = data.refresh_token;
    }
  } catch (err) {
    console.error('Refresh error:', err);
  }
}

// ═══ STEP 3: API endpoint — your site fetches this ═══
app.get('/api/decoration', async (req, res) => {
  // Refresh user data on each request
  await fetchUserData();

  if (!userData || !userData.id) {
    return res.json({
      success: false,
      message: 'Not authorized yet. Visit /login to connect Discord.',
    });
  }

  const userId = userData.id;
  const username = userData.global_name || userData.username;

  // Avatar Decoration
  let decorationUrl = null;
  if (userData.avatar_decoration_data) {
    const asset = userData.avatar_decoration_data.asset;
    decorationUrl = `https://cdn.discordapp.com/avatar-decoration-presets/${asset}.png?size=256&passthrough=true`;
  }

  // Avatar
  let avatarUrl = null;
  const avatarHash = userData.avatar;
  if (avatarHash) {
    const ext = avatarHash.startsWith('a_') ? 'gif' : 'png';
    avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.${ext}?size=256`;
  } else {
    const defaultIndex = (BigInt(userId) >> 22n) % 6n;
    avatarUrl = `https://cdn.discordapp.com/embed/avatars/${defaultIndex}.png`;
  }

  res.json({
    success: true,
    username,
    avatar_url: avatarUrl,
    decoration_url: decorationUrl,
  });
});

// ═══ Health check ═══
app.get('/', (req, res) => {
  res.json({ status: 'ok', authorized: !!userData });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // ═══ Self-ping every 14 min to prevent sleep ═══
  const RENDER_URL = process.env.REDIRECT_URI?.replace('/callback', '') || `http://localhost:${PORT}`;
  setInterval(() => {
    fetch(RENDER_URL)
      .then(() => console.log('Self-ping OK'))
      .catch(() => console.log('Self-ping failed'));
  }, 14 * 60 * 1000);
});
