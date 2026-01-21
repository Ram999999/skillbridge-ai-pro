# 🚀 Start Project - Simple Instructions

## ✅ All Issues Fixed!

The code now works **with or without** Azure SDK installed.

---

## 📋 Step-by-Step Instructions

### Step 1: Kill Existing Processes

**In PowerShell, run:**
```powershell
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force
```

This frees up port 5000.

---

### Step 2: Start Backend

**Open Terminal 1 in VS Code:**
```bash
cd backend
npm run dev
```

**✅ Expected Output:**
```
info: Azure Language Service not configured - using fallback extraction
info: 🚀 SkillBridge AI Pro server running on port 5000
info: 📊 Environment: development
info: 🔗 Frontend URL: http://localhost:8080
```

**✅ No errors!** The server starts successfully.

---

### Step 3: Start Frontend

**Open Terminal 2 in VS Code (New Terminal):**
```bash
cd frontend
npm run dev
```

**✅ Expected Output:**
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:8080/
```

---

### Step 4: Open Browser

- **Frontend**: http://localhost:8080
- **Backend Health**: http://localhost:5000/health

---

## ✅ Verification

### Test Backend Health:
Open: http://localhost:5000/health

Should see:
```json
{
  "status": "OK",
  "service": "SkillBridge AI Pro API",
  "version": "1.0.0"
}
```

### Test Frontend:
Open: http://localhost:8080

Should see the **SkillBridge AI Pro** homepage!

---

## 🎯 What's Working Now

✅ **Backend starts** without crashes
✅ **Azure SDK** handled gracefully (works with or without)
✅ **Fallback mode** active (all features work)
✅ **Port 5000** available (after killing processes)
✅ **All features** functional

---

## 📝 Notes

- **Azure warnings are OK** - System uses fallbacks
- **All features work** - Resume analysis, skill gap, interview, roadmap
- **No Azure needed** - For development/testing
- **Add Azure later** - For Imagine Cup demo (see `AZURE_INTEGRATION_GUIDE.md`)

---

## 🐛 If You Still See Errors

### Error: "Port 5000 in use"
```powershell
# Kill all Node processes
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force

# Or change port in backend/.env
PORT=5001
```

### Error: "Module not found"
```bash
cd backend
npm install
```

### Error: "Cannot find module"
The code now handles this gracefully - it should still work!

---

## ✅ You're All Set!

**The project is ready to run!** 🎉

Follow the 4 steps above and you'll have:
- ✅ Backend running on port 5000
- ✅ Frontend running on port 8080
- ✅ All features working
- ✅ No crashes

**Happy coding! 🚀**

