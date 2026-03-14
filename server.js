<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>welcome to my page! ♡</title>
  <link rel="icon" type="image/x-icon" href="favicon.ico"/>
  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --pink: #ffb3c6;
      --pink-light: #ffe0e9;
      --pink-mid: #ffc8d8;
      --red: #d63a5a;
      --cream: #fff5f7;
      --stripe: repeating-linear-gradient(
        45deg,
        #ffd6e0 0px, #ffd6e0 10px,
        #ffe8ef 10px, #ffe8ef 20px
      );
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background: linear-gradient(135deg, #e8d5f5 0%, #ffd6e6 50%, #c9e8ff 100%);
      font-family: 'Nunito', sans-serif;
      min-height: 100vh;
      cursor: default;
    }

    /* floating sparkles */
    .sparkles {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 0; overflow: hidden;
    }
    .sparkle {
      position: absolute;
      font-size: 1.2rem;
      animation: floatUp linear infinite;
      opacity: 0.5;
    }
    @keyframes floatUp {
      0%   { transform: translateY(100vh) rotate(0deg); opacity: 0; }
      10%  { opacity: 0.5; }
      90%  { opacity: 0.5; }
      100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
    }

    .wrapper {
      position: relative;
      z-index: 1;
      max-width: 720px;
      margin: 0 auto;
      padding: 20px 16px 60px;
    }

    /* ── HEADER ── */
    .header-box {
      background: var(--pink-light);
      border: 2.5px solid var(--red);
      border-radius: 18px;
      overflow: hidden;
      margin-bottom: 12px;
    }

    .banner {
      height: 200px;
      position: relative;
      overflow: hidden;
    }
    .banner img.banner-gif {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      pointer-events: none;
    }

    .profile-row {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding: 16px 20px;
      text-align: center;
    }

    .avatar-wrap {
      position: relative;
      flex-shrink: 0;
      width: 110px;
      height: 110px;
    }
    .avatar {
      width: 80px; height: 80px;
      border-radius: 50%;
      border: 3px solid var(--red);
      background: var(--pink-mid);
      display: flex; align-items: center; justify-content: center;
      font-size: 2.5rem;
      overflow: hidden;
    }
    .avatar-full-gif {
      width: 110px;
      height: 110px;
      object-fit: contain;
    }
    .avatar-badge {
      position: absolute;
      bottom: 2px;
      right: 2px;
      background: var(--red);
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.6rem;
      line-height: 1;
      border: 2px solid white;
      box-sizing: border-box;
      padding: 0;
      text-align: center;
    }

    .profile-info h1 {
      font-family: 'Fredoka One', cursive;
      font-size: 2rem;
      color: var(--red);
    }
    .pronouns {
      display: inline-block;
      background: white;
      border: 1.5px solid var(--red);
      border-radius: 20px;
      padding: 1px 10px;
      font-size: 0.75rem;
      color: var(--red);
      font-weight: 700;
      margin-left: 6px;
      vertical-align: middle;
    }
    .profile-info .kaomoji {
      font-size: 1.1rem;
      color: #c0507a;
      margin-top: 2px;
    }

    /* ── MARQUEE ── */
    .marquee-wrap {
      background: var(--pink);
      border-top: 2px solid var(--red);
      border-bottom: 2px solid var(--red);
      overflow: hidden;
      padding: 6px 0;
      margin-bottom: 16px;
    }
    .marquee-inner {
      display: flex;
      gap: 0;
      white-space: nowrap;
      animation: marquee 30s linear infinite;
      font-family: 'Fredoka One', cursive;
      color: var(--red);
      font-size: 0.9rem;
      width: max-content;
    }
    .marquee-set {
      display: flex;
      gap: 40px;
      padding-right: 40px;
    }
    @keyframes marquee {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    /* ── GRID ── */
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }
    .card {
      background: var(--cream);
      border: 2.5px solid var(--red);
      border-radius: 16px;
      overflow: hidden;
    }
    .card.full { grid-column: 1 / -1; }

    .card-title {
      background: var(--pink);
      border-bottom: 2px solid var(--red);
      padding: 8px 14px;
      font-family: 'Fredoka One', cursive;
      font-size: 1.2rem;
      color: var(--red);
      text-align: center;
    }
    .card-body {
      padding: 14px;
      font-size: 0.9rem;
      color: #7a3050;
      line-height: 1.7;
      text-align: center;
    }

    /* ── ABOUT ── */
    .about-text p { margin-bottom: 8px; }
    .about-text strong { color: var(--red); }

    /* ── SPOTIFY ── */
    .spotify-placeholder {
      background: #1a1a2e;
      border-radius: 12px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      color: #1db954;
    }
    .spotify-placeholder .sp-icon { font-size: 2.5rem; }
    .spotify-placeholder .sp-label {
      font-family: 'Fredoka One', cursive;
      font-size: 1rem;
      color: #1db954;
    }
    .spotify-placeholder .sp-hint {
      font-size: 0.72rem;
      color: #aaa;
      text-align: center;
      background: #ffffff15;
      border-radius: 8px;
      padding: 4px 10px;
    }
    /* real embed goes here — uncomment and replace SRC */
    /*
    .spotify-embed iframe {
      border-radius: 12px;
      width: 100%;
    }
    */

    /* ── ANIME LIST ── */
    .anime-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    .anime-item {
      background: var(--pink-light);
      border: 1.5px solid var(--pink);
      border-radius: 10px;
      padding: 8px 10px;
      font-size: 0.82rem;
      color: var(--red);
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: transform 0.15s, box-shadow 0.15s;
    }
    .anime-item:hover {
      transform: translateY(-2px);
      box-shadow: 2px 4px 0 var(--red);
    }
    .anime-item .num {
      background: var(--red);
      color: white;
      border-radius: 50%;
      width: 20px; height: 20px;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.7rem;
      flex-shrink: 0;
    }

    /* ── ANIME TRACK ── */
    .anime-track-wrap {
      overflow: hidden;
      padding: 8px 0;
      mask-image: linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent);
    }

    .anime-track {
      display: flex;
      gap: 10px;
      width: max-content;
    }

    .anime-card {
      border: 2.5px solid var(--red);
      border-radius: 14px;
      width: 110px;
      height: 160px;
      flex-shrink: 0;
      overflow: hidden;
      transition: transform 0.15s;
      cursor: default;
    }
    .anime-card:hover { transform: scale(1.05); }

    .anime-card img {
      width: 100%; height: 100%;
      object-fit: cover;
      display: block;
    }
    .anime-card-placeholder {
      width: 100%; height: 100%;
      background: var(--stripe);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Fredoka One', cursive;
      font-size: 2rem;
      color: var(--red);
    }

    /* ── MUSIC PLAYER ── */
    .player-wrap {
      background: var(--pink-light);
      border-radius: 14px;
      padding: 14px 16px;
      display: flex;
      gap: 14px;
      align-items: flex-start;
    }
    .player-left {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }
    .player-cover {
      width: 80px;
      height: 80px;
      border-radius: 10px;
      border: 2px solid var(--red);
      object-fit: cover;
      flex-shrink: 0;
    }
    .player-controls {
      display: flex;
      gap: 4px;
      align-items: center;
    }
    .player-center {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 0;
      padding-top: 4px;
    }
    .player-info { }
    .player-title {
      font-family: 'Fredoka One', cursive;
      color: var(--red);
      font-size: 0.95rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .player-artist {
      font-size: 0.72rem;
      color: #c0507a;
    }
    .player-timeline {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .player-time {
      font-size: 0.72rem;
      color: var(--red);
      font-family: monospace;
      flex-shrink: 0;
    }
    .player-bar {
      flex: 1;
      height: 6px;
      background: var(--pink-mid);
      border-radius: 3px;
      position: relative;
      cursor: pointer;
      user-select: none;
    }
    .player-progress {
      height: 100%;
      background: var(--red);
      border-radius: 3px;
      width: 0%;
      pointer-events: none;
    }
    .player-thumb {
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(-50%, -50%);
      width: 13px; height: 13px;
      background: var(--red);
      border-radius: 50%;
      pointer-events: none;
      transition: transform 0.1s;
    }
    .player-bar:active .player-thumb {
      transform: translate(-50%, -50%) scale(1.3);
    }
    .player-bottom {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .player-btn {
      background: none;
      border: none;
      color: var(--red);
      cursor: pointer;
      padding: 4px;
      line-height: 1;
      transition: opacity 0.15s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .player-btn:hover { opacity: 0.6; }
    .player-btn svg {
      width: 18px; height: 18px;
      fill: var(--red);
    }
    .player-play svg {
      width: 22px; height: 22px;
    }
    /* volume */
    .vol-wrap {
      display: flex;
      align-items: center;
      gap: 0;
    }
    .vol-btn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      display: flex;
      align-items: center;
    }
    .vol-btn svg {
      width: 18px; height: 18px;
      fill: var(--red);
      transition: opacity 0.15s;
    }
    .vol-btn:hover svg { opacity: 0.6; }
    .vol-slide-wrap {
      overflow: hidden;
      width: 0;
      transition: width 0.3s ease;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .vol-slide-wrap.open {
      width: 110px;
    }
    .vol-slider {
      width: 80px;
      -webkit-appearance: none;
      appearance: none;
      height: 3px;
      border-radius: 2px;
      outline: none;
      cursor: pointer;
      flex-shrink: 0;
    }
    .vol-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 12px; height: 12px;
      border-radius: 50%;
      background: var(--red);
      cursor: pointer;
    }
    .vol-slider::-moz-range-thumb {
      width: 12px; height: 12px;
      border-radius: 50%;
      background: var(--red);
      border: none;
      cursor: pointer;
    }
    .vol-num {
      font-size: 0.68rem;
      color: var(--red);
      font-family: monospace;
      min-width: 20px;
      flex-shrink: 0;
    }

    /* ── MISC ── */
    .misc-text {
      font-size: 0.85rem;
      color: #c0507a;
      font-weight: 700;
      text-align: center;
      line-height: 1.8;
    }

    /* ── CONTACTS ── */
    .socials-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      justify-content: center;
      padding: 6px 0;
    }
    .social-btn {
      background: var(--pink);
      border: 2px solid var(--red);
      border-radius: 12px;
      padding: 8px 16px;
      font-family: 'Fredoka One', cursive;
      color: var(--red);
      font-size: 0.95rem;
      text-decoration: none;
      box-shadow: 3px 3px 0 var(--red);
      transition: transform 0.1s, box-shadow 0.1s;
      display: flex; align-items: center; gap: 6px;
    }
    .social-btn:hover {
      transform: translate(-2px, -2px);
      box-shadow: 5px 5px 0 var(--red);
    }

    .social-tg {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--red);
      transition: transform 0.15s, opacity 0.15s;
    }
    .social-tg:hover { transform: scale(1.15); opacity: 0.7; }
    .social-tg svg { width: 42px; height: 42px; }

    /* ── FOOTER ── */
    .footer {
      text-align: center;
      margin-top: 24px;
      font-size: 0.8rem;
      color: #c0507a;
      font-weight: 700;
    }

    @media (max-width: 500px) {
      .grid { grid-template-columns: 1fr; }
      .card.full { grid-column: 1; }
      .anime-grid { grid-template-columns: 1fr; }
    }
  </style>
  <style>
    #splash {
      position: fixed;
      inset: 0;
      z-index: 9998;
      background: rgba(0, 0, 0, 0.82);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: opacity 0.6s ease;
    }
    #splash.hide {
      opacity: 0;
      pointer-events: none;
    }
    .splash-text {
      font-family: 'Fredoka One', cursive;
      font-size: 2.4rem;
      color: #fff;
      letter-spacing: 4px;
      animation: splashPulse 1.6s ease-in-out infinite;
    }
    .splash-sub {
      font-family: 'Nunito', sans-serif;
      font-size: 0.85rem;
      color: rgba(255,255,255,0.45);
      margin-top: 10px;
      letter-spacing: 2px;
    }
    @keyframes splashPulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50%       { opacity: 0.5; transform: scale(0.97); }
    }
  </style>
</head>
<body>

<div id="splash">
  <div class="splash-text">Click..</div>
  <div class="splash-sub">to enter</div>
</div>

<!-- floating sparkles -->
<div class="sparkles" id="sparkles"></div>

<div class="wrapper">

  <!-- HEADER -->
  <div class="header-box">
    <div class="banner">
      <img src="85baca0dfa3e44a3bd01dcf7134064ad.gif" class="banner-gif" alt="banner"/>
    </div>
    <div class="profile-row">
      <div class="avatar-wrap">
        <img src="decoration.gif" class="avatar-full-gif" alt="Megu"/>
        <div class="avatar-badge">✦</div>

      </div>
      <div class="profile-info">
        <h1>Megu <span class="pronouns">Ru | Eng</span></h1>
        <div class="kaomoji">:3 ♡</div>
      </div>
    </div>
  </div>

  <!-- MARQUEE -->
  <div class="marquee-wrap">
    <div class="marquee-inner">
      <div class="marquee-set">
        <span>✦ more about me!</span><span>✦ more about me!</span>
        <span>✦ more about me!</span><span>✦ more about me!</span>
        <span>✦ more about me!</span><span>✦ more about me!</span>
        <span>✦ more about me!</span><span>✦ more about me!</span>
        <span>✦ more about me!</span><span>✦ more about me!</span>
      </div>
      <div class="marquee-set">
        <span>✦ more about me!</span><span>✦ more about me!</span>
        <span>✦ more about me!</span><span>✦ more about me!</span>
        <span>✦ more about me!</span><span>✦ more about me!</span>
        <span>✦ more about me!</span><span>✦ more about me!</span>
        <span>✦ more about me!</span><span>✦ more about me!</span>
      </div>
    </div>
  </div>

  <div class="grid">

    <!-- ABOUT ME -->
    <div class="card">
      <div class="card-title">About Me</div>
      <div class="card-body about-text">
        <p>hey! i'm <strong>Megu</strong>, nice to meet u :3</p>
        <p>i'm <strong>15 years old</strong></p>
        <p>i like <strong>cool stuff</strong> and doing <strong>cool things</strong> ig</p>
      </div>
    </div>

    <!-- MISC -->
    <div class="card">
      <div class="card-title">Miscellaneous</div>
      <div class="card-body">
        <p class="misc-text">
          i love coding &amp; making stuff,<br>
          playing roblox,<br>
          listening to music all day<br>
          and watching tons of anime~ ♡
        </p>
      </div>
    </div>

    <!-- ANIME -->
    <div class="card full">
      <div class="card-title">Fave Anime</div>
      <div class="card-body" style="padding: 10px 0;">
        <div class="anime-track-wrap">
          <div class="anime-track" id="animeTrack"></div>
        </div>
      </div>
    </div>

    <!-- SPOTIFY -->
    <div class="card full">
      <div class="card-title">My Playlist</div>
      <div class="card-body">
        <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7iHVlqd9DcdSke1Ux3Zhbl?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>

    <!-- MUSIC PLAYER -->
    <div class="card full" id="playerCard">
      <div class="card-title">Now Playing</div>
      <div class="card-body" style="padding: 12px 16px;">
        <div class="player-wrap">
          <div class="player-left">
            <img src="cover.jpg" alt="cover" class="player-cover"/>
            <div class="player-controls">
              <button class="player-btn" id="prevBtn" title="−10s">
                <svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
              </button>
              <button class="player-btn player-play" id="playBtn" title="Play/Pause">
                <svg id="playIcon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </button>
              <button class="player-btn" id="nextBtn" title="+10s">
                <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zm2.5-6 5.5 4V8z"/><rect x="16" y="6" width="2" height="12"/></svg>
              </button>
            </div>
          </div>
          <div class="player-center">
            <div class="player-info">
              <div class="player-title">I Wanna Be a Jack-O-Lantern</div>
              <div class="player-artist">Deer in Headlights</div>
            </div>
            <div class="player-timeline">
              <span class="player-time" id="curTime">0:00</span>
              <div class="player-bar" id="playerBar">
                <div class="player-progress" id="playerProgress"></div>
                <div class="player-thumb" id="playerThumb"></div>
              </div>
              <span class="player-time" id="durTime">0:00</span>
            </div>
            <div class="player-bottom">
              <div class="vol-wrap">
                <div class="vol-slide-wrap" id="volSlideWrap">
                  <input type="range" id="volSlider" min="0" max="100" value="15" class="vol-slider"/>
                  <span id="volNum" class="vol-num">15</span>
                </div>
                <button class="vol-btn" id="volBtn" title="Volume">
                  <svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <audio id="audioEl" src="music.wav" preload="auto"></audio>
      </div>
    </div>

    <!-- CONTACTS -->
    <div class="card full">
      <div class="card-title">Socials</div>
      <div class="card-body">
        <a href="https://t.me/seekiome" class="social-tg" title="Telegram" target="_blank">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 6.617-1.715 8.09c-.128.576-.467.716-.946.446l-2.612-1.925-1.26 1.213c-.14.14-.257.257-.527.257l.187-2.663 4.84-4.373c.21-.187-.046-.29-.326-.104L8.116 13.86l-2.56-.8c-.557-.175-.568-.557.116-.824l9.993-3.852c.464-.168.87.113.265.233z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </div>

  </div>

  <div class="footer">Developed by Seekio</div>
</div>

<script>
  // ── Music Player ──
  const audio = document.getElementById('audioEl');
  const playBtn = document.getElementById('playBtn');
  const curTime = document.getElementById('curTime');
  const durTime = document.getElementById('durTime');
  const progress = document.getElementById('playerProgress');
  const thumb = document.getElementById('playerThumb');
  const bar = document.getElementById('playerBar');
  const volSlider = document.getElementById('volSlider');
  const volNum = document.getElementById('volNum');
  const volBtn = document.getElementById('volBtn');
  const volSlideWrap = document.getElementById('volSlideWrap');

  // громкость по умолчанию 15%
  audio.volume = 0.15;

  function updateVolFill() {
    const pct = volSlider.value;
    volSlider.style.background = `linear-gradient(to right, var(--red) ${pct}%, var(--pink-mid) ${pct}%)`;
    volNum.textContent = pct;
  }
  updateVolFill();

  // toggle слайдера по кнопке
  volBtn.addEventListener('click', () => {
    volSlideWrap.classList.toggle('open');
  });

  volSlider.addEventListener('input', () => {
    audio.volume = volSlider.value / 100;
    updateVolFill();
  });

  const fmt = (s) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2,'0')}`;
  };

  audio.addEventListener('loadedmetadata', () => {
    durTime.textContent = fmt(audio.duration);
  });

  // drag scrubbing
  let isScrubbing = false;
  let wasPlaying = false;

  function scrubTo(clientX) {
    const rect = bar.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const newTime = pct * audio.duration;
    progress.style.width = (pct * 100) + '%';
    thumb.style.left = (pct * 100) + '%';
    curTime.textContent = fmt(newTime);
    return newTime;
  }

  bar.addEventListener('mousedown', (e) => {
    isScrubbing = true;
    wasPlaying = !audio.paused;
    audio.pause();
    scrubTo(e.clientX);
  });
  window.addEventListener('mousemove', (e) => {
    if (isScrubbing) scrubTo(e.clientX);
  });
  window.addEventListener('mouseup', (e) => {
    if (!isScrubbing) return;
    isScrubbing = false;
    audio.currentTime = scrubTo(e.clientX);
    if (wasPlaying) audio.play();
  });

  // touch scrubbing
  bar.addEventListener('touchstart', (e) => {
    isScrubbing = true;
    wasPlaying = !audio.paused;
    audio.pause();
    scrubTo(e.touches[0].clientX);
  }, { passive: true });
  window.addEventListener('touchmove', (e) => {
    if (isScrubbing) scrubTo(e.touches[0].clientX);
  }, { passive: true });
  window.addEventListener('touchend', (e) => {
    if (!isScrubbing) return;
    isScrubbing = false;
    audio.currentTime = scrubTo(e.changedTouches[0].clientX);
    if (wasPlaying) audio.play();
  });

  audio.addEventListener('timeupdate', () => {
    if (isScrubbing) return;
    const pct = (audio.currentTime / audio.duration) * 100 || 0;
    progress.style.width = pct + '%';
    thumb.style.left = pct + '%';
    curTime.textContent = fmt(audio.currentTime);
  });

  // ── Splash + автоплей ──
  const splash = document.getElementById('splash');

  // блокируем скролл пока заставка активна
  document.body.style.overflow = 'hidden';

  splash.addEventListener('click', () => {
    splash.classList.add('hide');
    setTimeout(() => splash.remove(), 650);
    // разрешаем скролл
    document.body.style.overflow = '';
    audio.play().then(() => {
      document.getElementById('playIcon').innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    }).catch(() => {});
  });

  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      document.getElementById('playIcon').innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    } else {
      audio.pause();
      document.getElementById('playIcon').innerHTML = '<path d="M8 5v14l11-7z"/>';
    }
  });

  audio.addEventListener('ended', () => {
    document.getElementById('playIcon').innerHTML = '<path d="M8 5v14l11-7z"/>';
    audio.currentTime = 0;
    audio.play();
    document.getElementById('playIcon').innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
  });
  document.getElementById('nextBtn').addEventListener('click', () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
  });


  const emojis = ['✦','✧','♡','⋆','·','★','✿','◇'];
  const container = document.getElementById('sparkles');
  for (let i = 0; i < 22; i++) {
    const s = document.createElement('span');
    s.className = 'sparkle';
    s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    s.style.left = Math.random() * 100 + 'vw';
    s.style.animationDuration = (6 + Math.random() * 12) + 's';
    s.style.animationDelay = (Math.random() * 10) + 's';
    s.style.fontSize = (0.8 + Math.random() * 1) + 'rem';
    container.appendChild(s);
  }

  // ── Anime track ──
  const animeList = [
    { title: 'I Want to Eat Your Pancreas', image: 'a1.jpg' },
    { title: 'Haikyuu', image: 'a2.jpg' },
    { title: 'Weathering With You', image: 'a3.jpg' },
    { title: 'Suzume', image: 'a4.jpg' },
    { title: 'Death Note', image: 'a5.jpg' },
    { title: 'Tunnel to Summer', image: 'a6.jpg' },
    { title: 'Parasyte', image: 'a7.jpg' },
    { title: 'Hunter x Hunter', image: 'a8.jpg' },
    { title: 'My Dress-Up Darling', image: 'a9.jpg' },
    { title: 'Chainsaw Man', image: 'a10.jpg' },
    { title: 'Attack on Titan', image: 'a11.jpg' },
    { title: 'Naruto', image: 'a12.jpg' },
    { title: 'Oshi no Ko', image: 'a13.jpg' },
    { title: 'Demon Slayer', image: 'a14.jpg' },
    { title: 'JoJo', image: 'a15.jpg' },
    { title: 'Kaoru Hana', image: 'a16.jpg' },
    { title: 'Future Diary', image: 'a17.jpg' },
    { title: 'Jujutsu Kaisen', image: 'a18.jpg' },
    { title: 'Rascal Dream', image: 'a19.jpg' },
    { title: 'Josee', image: 'a20.jpg' },
    { title: 'Your Name', image: 'a21.jpg' },
    { title: 'A Silent Voice', image: 'a22.jpg' },
  ];

  const track = document.getElementById('animeTrack');
  const wrap = track.parentElement;
  const CARD_W = 120; // 110px + 10px gap

  function makeCard(a) {
    const card = document.createElement('div');
    card.className = 'anime-card';
    card.innerHTML = a.image
      ? `<img src="${a.image}" alt="${a.title}" loading="lazy"/>`
      : `<div class="anime-card-placeholder">?</div>`;
    return card;
  }

  // ровно 2 копии — когда смещение достигает ширины одной копии, сбрасываем на 0
  animeList.forEach(a => track.appendChild(makeCard(a)));
  animeList.forEach(a => track.appendChild(makeCard(a)));

  // считаем реальную ширину одной копии после рендера
  let totalLoop = 0;
  requestAnimationFrame(() => {
    // ширина всего трека / 2 = ширина одной копии
    totalLoop = track.scrollWidth / 2;
    requestAnimationFrame(autoTick);
  });

  let offset = 0;
  let isDragging = false;
  let dragLastX = 0;
  let dragVelocity = 0;
  let isAuto = true;
  let pauseTimer = null;

  function applyOffset() {
    // нормализуем: offset всегда от 0 до totalLoop
    offset = ((offset % totalLoop) + totalLoop) % totalLoop;
    track.style.transform = `translateX(${-offset}px)`;
  }

  // ── drag ──
  wrap.style.cursor = 'grab';

  wrap.addEventListener('mousedown', (e) => {
    isDragging = true;
    isAuto = false;
    clearTimeout(pauseTimer);
    dragLastX = e.clientX;
    dragVelocity = 0;
    wrap.style.cursor = 'grabbing';
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragLastX;
    dragVelocity = dx;
    offset -= dx;
    applyOffset();
    dragLastX = e.clientX;
  });

  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    wrap.style.cursor = 'grab';
    let vel = dragVelocity;
    const glide = () => {
      if (Math.abs(vel) < 0.3) {
        pauseTimer = setTimeout(() => { isAuto = true; requestAnimationFrame(autoTick); }, 1000);
        return;
      }
      vel *= 0.92;
      offset -= vel;
      applyOffset();
      requestAnimationFrame(glide);
    };
    requestAnimationFrame(glide);
  });

  // touch support
  wrap.addEventListener('touchstart', (e) => {
    isDragging = true;
    isAuto = false;
    clearTimeout(pauseTimer);
    dragLastX = e.touches[0].clientX;
    dragVelocity = 0;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - dragLastX;
    dragVelocity = dx;
    offset -= dx;
    applyOffset();
    dragLastX = e.touches[0].clientX;
  }, { passive: true });

  window.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    let vel = dragVelocity;
    const glide = () => {
      if (Math.abs(vel) < 0.3) {
        pauseTimer = setTimeout(() => { isAuto = true; requestAnimationFrame(autoTick); }, 1000);
        return;
      }
      vel *= 0.92;
      offset -= vel;
      applyOffset();
      requestAnimationFrame(glide);
    };
    requestAnimationFrame(glide);
  });

  // ── auto scroll ──
  function autoTick() {
    if (!isAuto) return;
    offset += 0.45;
    applyOffset();
    requestAnimationFrame(autoTick);
  }


</script>
</body>
</html>
