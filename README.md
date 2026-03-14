# Discord Avatar Server

Сервер для отображения Discord аватарки на сайте в реальном времени.

## Как настроить

### 1. Загрузить на GitHub
Создайте **новый** репозиторий (например `discord-avatar-server`) и загрузите туда `server.js` и `package.json`.

### 2. Создать проект на Render.com
1. Зайдите на **render.com** и зарегистрируйтесь через GitHub
2. Нажмите **"New" → "Web Service"**
3. Подключите репозиторий `discord-avatar-server`
4. Настройки:
   - **Name**: `megu-avatar` (или любое другое)
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

### 3. Добавить переменные окружения (Environment Variables)
На странице проекта в Render → **Environment** → добавьте:

| Key | Value |
|-----|-------|
| `DISCORD_CLIENT_ID` | `1482290497660784702` |
| `DISCORD_CLIENT_SECRET` | Ваш секрет (из Discord Developer Portal → OAuth2) |
| `REDIRECT_URI` | `https://megu-avatar.onrender.com/callback` |
| `SITE_URL` | `https://seekiome.github.io` |

⚠️ Замените `megu-avatar` на реальное имя вашего проекта на Render!

### 4. Обновить Discord Application
1. Зайдите в Discord Developer Portal → ваше приложение → OAuth2
2. В **Redirects** добавьте: `https://megu-avatar.onrender.com/callback`

### 5. Авторизоваться
Зайдите в браузере на `https://megu-avatar.onrender.com/login` — это подключит ваш Discord аккаунт.

### 6. Готово!
Теперь на сайте аватарка будет подтягиваться автоматически из Discord.
Если поменяете аватарку в Discord — на сайте она тоже обновится.
