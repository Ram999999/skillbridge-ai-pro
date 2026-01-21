
# SkillBridge AI Pro 🚀

**SkillBridge AI Pro** is an AI-powered career coaching platform that helps students and freshers improve their resumes, identify missing skills for target roles, generate personalized learning roadmaps, and prepare for interviews using AI-powered agents.

> Built as a major project submission for **Microsoft Imagine Cup 2025**.

---

## ✨ Key Features

### ✅ Resume Analysis
- ATS compatibility score (0–100)
- Skill extraction + keyword analysis
- Improvement suggestions (Critical / Warning / Improvement / Positive)
- Export resume analysis report

### ✅ Skill Gap Analysis
- Role-based comparison (selected job role)
- Match percentage + missing skills list
- Priority ranking (High / Medium / Low)
- Learning time estimation
- Export skill gap report

### ✅ Mock Interview
- STAR method evaluation (Situation, Task, Action, Result)
- Score (0–100) with detailed breakdown
- Strengths + improvements + final feedback
- Practice multiple interview questions

### ✅ Career Roadmap Generator
- Personalized **90-day learning roadmap**
- 3 phases: Foundation → Building → Mastery
- Actionable tasks with structured plan
- Export roadmap

### ✅ Dashboard
- Tracks progress across modules
- Insights and overview of completion

---

## 🧠 AI Architecture (LLM + Agentic Workflow)

SkillBridge AI Pro follows an agentic pipeline with modular AI components:

- **Resume Analyzer Agent**
- **Skill Gap Agent**
- **Mock Interview Agent**
- **Roadmap Planner Agent**

The platform supports Azure AI services and also runs using fallback responses when Azure is not configured.

---

## ☁️ Azure Integration (Optional)

### Services Used
- **Azure OpenAI (GPT-4)** – intelligent analysis & generation
- **Azure AI Language Service** – skill extraction & key phrase detection

✅ Works even without Azure credentials (fallback system enabled)

---

## ⚡ Quick Start

### Prerequisites
- Node.js 18+

### Install Dependencies

**Terminal 1 (Backend):**
```bash
cd backend
npm install
````

**Terminal 2 (Frontend):**

```bash
cd frontend
npm install
```

### Run Project

**Terminal 1 (Backend):**

```bash
cd backend
npm run dev
# Runs on http://localhost:5000
```

**Terminal 2 (Frontend):**

```bash
cd frontend
npm run dev
# Runs on http://localhost:8080
```

✅ Open: [http://localhost:8080](http://localhost:8080)

---

## 🔧 Environment Setup (Optional)

Create `backend/.env`:

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:8080

AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com/
AZURE_OPENAI_API_KEY=your-api-key
AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4

AZURE_LANGUAGE_ENDPOINT=https://your-resource.cognitiveservices.azure.com/
AZURE_LANGUAGE_API_KEY=your-api-key
```

---

## 📁 Project Structure

```
skillbridge-ai-pro/
├── backend/
│   ├── src/
│   │   ├── config/          # Azure configuration
│   │   ├── routes/          # API endpoints
│   │   ├── controllers/     # Request handlers
│   │   ├── services/        # Core logic
│   │   ├── prompts/         # AI prompts
│   │   └── data/            # Job roles and mappings
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/           # Main pages
│   │   ├── components/      # UI components
│   │   ├── services/        # API integration
│   │   └── utils/           # Export utilities
│   └── package.json
│
└── docs/                    # setup and deployment docs
```

---

## 🛠️ Tech Stack

### Backend

* Node.js + Express
* Azure OpenAI SDK
* Azure AI Language SDK
* Joi (validation)
* Winston (logging)

### Frontend

* React 18 + TypeScript
* Vite
* Tailwind CSS
* shadcn/ui

---

## 👨‍💻 Author

**Raghuram Gowrishetty**
📧 [raghuramgourishetti999@gmail.com](mailto:raghuramgourishetti999@gmail.com)
🔗 LinkedIn: [https://www.linkedin.com/in/raghuram-gowrishetty-70719830b](https://www.linkedin.com/in/raghuram-gowrishetty-70719830b)
💻 GitHub: [https://github.com/Ram999999](https://github.com/Ram999999)

```

---


