# ⚡ Quick Start Guide

## 🚀 Run Project in 3 Steps

### Step 1: Install Dependencies

**Open TWO terminals in VS Code:**

**Terminal 1:**
```bash
cd backend
npm install
```

**Terminal 2:**
```bash
cd frontend
npm install
```

### Step 2: Create .env File (Optional - Works Without It!)

Create `backend/.env`:
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:8080
```

**That's it!** No Azure needed - system uses smart fallbacks!

### Step 3: Run Both Servers

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

### ✅ Done! Open http://localhost:8080

---

## 🤖 Azure Integration (Optional)

### Should You Add Azure?

**For Imagine Cup Demo: YES** ✅
- Shows Microsoft Azure integration
- Real AI responses
- Professional implementation

**For Development: NO** ❌
- Works perfectly with fallbacks
- No setup needed
- No costs

### Quick Azure Setup (5 minutes)

1. **Get Azure Account**: https://azure.microsoft.com/free/ (Students get $100 free)

2. **Create OpenAI Resource**:
   - Portal → Create → "Azure OpenAI"
   - Copy Endpoint & Key from "Keys and Endpoint"
   - Create deployment: "gpt-4"

3. **Create Language Service**:
   - Portal → Create → "Language Service"
   - Copy Endpoint & Key

4. **Update `backend/.env`**:
```env
AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com/
AZURE_OPENAI_API_KEY=your-key
AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4

AZURE_LANGUAGE_ENDPOINT=https://your-resource.cognitiveservices.azure.com/
AZURE_LANGUAGE_API_KEY=your-key
```

5. **Restart backend** - Done!

---

## 🐛 Fixed Issues

✅ **Azure Language Service Error** - Fixed!
- Now handles missing credentials gracefully
- No more "TextAnalyticsClient is not a constructor" error
- Works with or without Azure

---

## 📋 Project Status

✅ **Backend**: Ready (port 5000)
✅ **Frontend**: Ready (port 8080)
✅ **Azure**: Optional (fallbacks work)
✅ **All Features**: Functional

**Status: READY FOR IMAGINE CUP! 🎉**

