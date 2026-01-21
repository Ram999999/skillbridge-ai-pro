# 🚀 Complete Setup Guide for VS Code

## 📋 Prerequisites

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify: `node --version` (should show v18+)

2. **VS Code** with extensions:
   - ES6 String HTML (optional)
   - Prettier (optional)
   - ESLint (optional)

3. **Git** (for version control)

---

## 📁 Project Structure

```
skillbridge-ai-pro/
├── backend/          # Node.js + Express API
│   ├── src/
│   ├── package.json
│   └── .env          # Create this file (see below)
│
└── frontend/         # React + TypeScript
    ├── src/
    ├── package.json
    └── .env          # Optional (for custom API URL)
```

---

## 🔧 Step 1: Install Dependencies

### Backend Dependencies

Open **Terminal 1** in VS Code (Terminal → New Terminal):

```bash
cd backend
npm install
```

**Expected output:** `added 165 packages`

### Frontend Dependencies

Open **Terminal 2** in VS Code (Terminal → Split Terminal):

```bash
cd frontend
npm install
```

**Expected output:** `added 373 packages`

---

## 🔐 Step 2: Create Environment Files

### Backend `.env` File

Create `backend/.env` file:

**Option A: Without Azure (Works with Fallbacks)**
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:8080

# Azure OpenAI (Optional - leave empty to use fallbacks)
AZURE_OPENAI_ENDPOINT=
AZURE_OPENAI_API_KEY=
AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4

# Azure Language Service (Optional - leave empty to use fallbacks)
AZURE_LANGUAGE_ENDPOINT=
AZURE_LANGUAGE_API_KEY=

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

**Option B: With Azure (For Full AI Features)**
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:8080

# Azure OpenAI (Required for full AI features)
AZURE_OPENAI_ENDPOINT=https://your-resource-name.openai.azure.com/
AZURE_OPENAI_API_KEY=your-azure-openai-api-key-here
AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4

# Azure Language Service (Required for skill extraction)
AZURE_LANGUAGE_ENDPOINT=https://your-resource-name.cognitiveservices.azure.com/
AZURE_LANGUAGE_API_KEY=your-azure-language-api-key-here

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend `.env` File (Optional)

Create `frontend/.env` if you want to customize API URL:

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
```

**Note:** If you don't create this, it defaults to `http://localhost:5000/api/v1`

---

## 🎯 Step 3: Run the Project in VS Code

### Method 1: Using VS Code Integrated Terminal (Recommended)

1. **Open VS Code** in the project root folder
2. **Open Terminal** (View → Terminal or `` Ctrl+` ``)
3. **Split Terminal** (Click the split icon or `Ctrl+Shift+5`)

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

### Method 2: Using VS Code Tasks (Auto-configured)

See `VS_CODE_LAUNCH.json` section below for automatic launch configuration.

### Method 3: Using NPM Scripts in VS Code

1. Open **Command Palette** (`Ctrl+Shift+P`)
2. Type: `Tasks: Run Task`
3. Select: `Run Backend` or `Run Frontend`

---

## 🌐 Step 4: Access the Application

Once both servers are running:

- **Frontend:** http://localhost:8080
- **Backend API:** http://localhost:5000
- **Health Check:** http://localhost:5000/health

---

## ✅ Step 5: Verify Everything Works

### Test Backend

Open browser: http://localhost:5000/health

**Expected Response:**
```json
{
  "status": "OK",
  "service": "SkillBridge AI Pro API",
  "version": "1.0.0",
  "timestamp": "2025-01-XX...",
  "uptime": 123.456
}
```

### Test Frontend

Open browser: http://localhost:8080

You should see the **SkillBridge AI Pro** homepage.

---

## 🔍 Troubleshooting

### Port Already in Use

**Error:** `Port 5000 is already in use`

**Solution:**
1. Change `PORT=5000` to `PORT=5001` in `backend/.env`
2. Update `FRONTEND_URL=http://localhost:8080` (keep same)
3. Update `frontend/.env`: `VITE_API_BASE_URL=http://localhost:5001/api/v1`

### Module Not Found

**Error:** `Cannot find module 'express'`

**Solution:**
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors

**Error:** `Access to fetch blocked by CORS policy`

**Solution:**
- Check `FRONTEND_URL` in `backend/.env` matches your frontend URL
- Default should be: `http://localhost:8080`

### Azure API Errors

**Error:** `Azure OpenAI authentication failed`

**Solution:**
- Check your Azure credentials in `backend/.env`
- Verify endpoint URLs are correct (no trailing slash)
- System will use fallback responses if Azure is not configured

---

## 🎨 VS Code Recommended Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.exclude": {
    "**/node_modules": true,
    "**/.git": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/package-lock.json": true
  }
}
```

---

## 📝 Quick Commands Reference

### Backend Commands
```bash
cd backend
npm install          # Install dependencies
npm run dev          # Start development server (with auto-reload)
npm start            # Start production server
npm test             # Run tests (when available)
```

### Frontend Commands
```bash
cd frontend
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

---

## 🚀 Next Steps

1. ✅ Dependencies installed
2. ✅ Environment files created
3. ✅ Servers running
4. ✅ Application accessible

**You're ready to develop! 🎉**

