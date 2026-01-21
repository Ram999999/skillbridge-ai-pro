# SkillBridge AI Pro - Backend

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
# Edit .env with your Azure credentials
```

### 3. Azure Setup Required
- Azure OpenAI Service endpoint and API key
- Azure AI Language Service endpoint and API key
- Deployment name for GPT-4

### 4. Run Development Server
```bash
npm run dev
```

### 5. Run Production Server
```bash
npm start
```

## API Endpoints

### Resume Analysis
- POST /api/v1/resume/analyze
- POST /api/v1/resume/score
- POST /api/v1/resume/extract-skills

### Skill Gap Analysis
- POST /api/v1/skillgap/analyze
- GET /api/v1/skillgap/roles

### Mock Interview
- POST /api/v1/interview/generate
- POST /api/v1/interview/evaluate

### Career Roadmap
- POST /api/v1/roadmap/generate

## Testing
Test the API:
```bash
curl http://localhost:5000/health
```

## Deployment
- Deploy to Azure App Service
- Set environment variables
- Configure CORS for production frontend URL
*/

// ==========================================
// ALL DONE! 🎉
// ==========================================

console.log('✅ SkillBridge AI Pro Backend - Complete Implementation Ready!');