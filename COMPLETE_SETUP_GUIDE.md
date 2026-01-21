# 🚀 Complete Setup Guide - SkillBridge AI Pro

## ✅ Quick Start (Without Azure - Works Immediately!)

The project **works perfectly without Azure credentials** using intelligent fallbacks!

### Step 1: Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### Step 2: Create Environment File (Optional)

Create `backend/.env` file (or skip this - it works without it):

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:8080
```

**That's it!** You can skip Azure configuration for now.

### Step 3: Run the Project

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

### Step 4: Open Browser

- Frontend: http://localhost:8080
- Backend Health: http://localhost:5000/health

**🎉 You're done! The app works with fallback AI responses.**

---

## 🔧 Detailed Setup for VS Code

### Method 1: Using Integrated Terminal (Recommended)

1. **Open VS Code** in the project root folder
2. **Open Terminal** (`Ctrl+` ` or View → Terminal`)
3. **Split Terminal** (Click split icon or `Ctrl+Shift+5`)

**Terminal 1:**
```bash
cd backend
npm install
npm run dev
```

**Terminal 2:**
```bash
cd frontend
npm install
npm run dev
```

### Method 2: Using VS Code Tasks

Create `.vscode/tasks.json`:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Backend",
      "type": "shell",
      "command": "npm run dev",
      "options": {
        "cwd": "${workspaceFolder}/backend"
      },
      "problemMatcher": []
    },
    {
      "label": "Start Frontend",
      "type": "shell",
      "command": "npm run dev",
      "options": {
        "cwd": "${workspaceFolder}/frontend"
      },
      "problemMatcher": []
    },
    {
      "label": "Start All",
      "dependsOn": ["Start Backend", "Start Frontend"],
      "problemMatcher": []
    }
  ]
}
```

Then press `Ctrl+Shift+P` → `Tasks: Run Task` → `Start All`

---

## 🤖 Azure Integration (Optional - For Full AI Features)

### Should You Integrate Azure?

**✅ YES, if:**
- You want **real AI responses** (not fallbacks)
- You're **demoing for Imagine Cup** (shows Azure integration)
- You have **Azure credits** or **student account**
- You want **best possible results**

**❌ NO, if:**
- You're just **testing/developing**
- You don't have **Azure account yet**
- You want to **save costs**
- Fallback responses are **sufficient**

### How to Get Azure Credentials

#### Step 1: Create Azure Account
1. Go to: https://azure.microsoft.com/free/
2. Sign up (students get $100 free credit)
3. Verify your account

#### Step 2: Create Azure OpenAI Resource
1. Go to: https://portal.azure.com
2. Click **"Create a resource"**
3. Search for **"Azure OpenAI"**
4. Click **"Create"**
5. Fill in:
   - **Subscription**: Your subscription
   - **Resource Group**: Create new or use existing
   - **Region**: Choose closest (e.g., East US)
   - **Name**: `skillbridge-openai` (or any name)
   - **Pricing Tier**: Standard S0
6. Click **"Review + Create"** → **"Create"**
7. Wait for deployment (2-3 minutes)

#### Step 3: Get OpenAI Credentials
1. Go to your **Azure OpenAI resource**
2. Click **"Keys and Endpoint"** in left menu
3. Copy:
   - **Endpoint**: `https://your-resource.openai.azure.com/`
   - **Key 1**: Your API key
4. Click **"Model deployments"** → **"Create"**
5. Select **"gpt-4"** or **"gpt-35-turbo"**
6. Name it: `gpt-4` (or any name)
7. Click **"Create"**

#### Step 4: Create Azure Language Service
1. Go to: https://portal.azure.com
2. Click **"Create a resource"**
3. Search for **"Language Service"**
4. Click **"Create"**
5. Fill in:
   - **Subscription**: Your subscription
   - **Resource Group**: Same as OpenAI
   - **Region**: Same as OpenAI
   - **Name**: `skillbridge-language`
   - **Pricing Tier**: Free (F0) or Standard (S)
6. Click **"Review + Create"** → **"Create"**
7. Wait for deployment

#### Step 5: Get Language Service Credentials
1. Go to your **Language Service resource**
2. Click **"Keys and Endpoint"**
3. Copy:
   - **Endpoint**: `https://your-resource.cognitiveservices.azure.com/`
   - **Key 1**: Your API key

#### Step 6: Update .env File

Create `backend/.env`:

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:8080

# Azure OpenAI (from Step 3)
AZURE_OPENAI_ENDPOINT=https://your-resource-name.openai.azure.com/
AZURE_OPENAI_API_KEY=your-key-from-step-3
AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4

# Azure Language Service (from Step 5)
AZURE_LANGUAGE_ENDPOINT=https://your-resource-name.cognitiveservices.azure.com/
AZURE_LANGUAGE_API_KEY=your-key-from-step-5

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

#### Step 7: Restart Backend

```bash
# Stop backend (Ctrl+C)
# Then restart:
cd backend
npm run dev
```

**✅ Done! Now you have full AI features!**

---

## 🐛 Troubleshooting

### Error: "TextAnalyticsClient is not a constructor"

**Fixed!** The code now handles missing Azure credentials gracefully.

### Error: "Port 5000 already in use"

**Solution:**
1. Change `PORT=5001` in `backend/.env`
2. Update `VITE_API_BASE_URL=http://localhost:5001/api/v1` in `frontend/.env` (if exists)

### Error: "Cannot find module"

**Solution:**
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors

**Solution:**
- Check `FRONTEND_URL=http://localhost:8080` in `backend/.env`
- Make sure frontend is running on port 8080

### Azure Authentication Failed

**Solution:**
- Verify endpoint URLs (no trailing slash)
- Check API keys are correct
- Ensure deployment name matches
- System will use fallbacks if Azure fails

---

## 📊 What Works With/Without Azure

### ✅ Works WITHOUT Azure (Fallbacks):
- ✅ Resume Analysis (basic scoring)
- ✅ Skill Gap Analysis (rule-based)
- ✅ Mock Interview (template responses)
- ✅ Career Roadmap (structured templates)
- ✅ All UI features
- ✅ Export functionality

### ⭐ Works BETTER WITH Azure (Real AI):
- ⭐ Resume Analysis (intelligent scoring)
- ⭐ Skill Extraction (AI-powered)
- ⭐ Interview Feedback (personalized)
- ⭐ Roadmap Generation (customized)
- ⭐ Better suggestions and insights

---

## 🎯 For Imagine Cup Demo

### Recommended Setup:

1. **For Development/Testing:**
   - Use **without Azure** (fallbacks work great)
   - Faster, no costs, no setup needed

2. **For Final Demo:**
   - **Integrate Azure** to show:
     - Microsoft Azure integration
     - Real AI capabilities
     - Professional implementation
   - This demonstrates technical depth

### Demo Script:

1. **Start without Azure** - Show it works
2. **Explain fallback system** - Shows robust architecture
3. **Add Azure credentials** - Show real AI
4. **Compare results** - Show improvement
5. **Highlight Azure integration** - Key for Imagine Cup

---

## 📝 Quick Reference

### Backend Commands
```bash
cd backend
npm install          # Install dependencies
npm run dev          # Start with auto-reload
npm start            # Production mode
```

### Frontend Commands
```bash
cd frontend
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
```

### URLs
- Frontend: http://localhost:8080
- Backend: http://localhost:5000
- Health: http://localhost:5000/health
- API: http://localhost:5000/api/v1

---

## ✅ Checklist

- [ ] Node.js 18+ installed
- [ ] Dependencies installed (backend & frontend)
- [ ] Backend running on port 5000
- [ ] Frontend running on port 8080
- [ ] Can access http://localhost:8080
- [ ] (Optional) Azure credentials configured
- [ ] (Optional) Real AI features working

**You're all set! 🎉**

