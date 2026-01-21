// API Service - Backend integration

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1";

// Helper function for API calls
const apiCall = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Request failed" }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  
  if (!data.success) {
    throw new Error(data.message || "Request failed");
  }

  return data.data;
};

export interface ResumeAnalysisResult {
  score: number;
  skills: {
    name: string;
    found: boolean;
    importance: "high" | "medium" | "low";
  }[];
  suggestions: {
    type: "critical" | "warning" | "improvement" | "positive";
    title: string;
    description: string;
  }[];
  atsAnalysis: {
    passRate: number;
    issues: string[];
  };
}

export interface SkillGapResult {
  role: string;
  matchPercentage: number;
  matchingSkills: {
    name: string;
    priority: "high" | "medium" | "low";
    timeToLearn: string;
    currentLevel: number;
    requiredLevel: number;
  }[];
  missingSkills: {
    name: string;
    priority: "high" | "medium" | "low";
    timeToLearn: string;
    currentLevel: number;
    requiredLevel: number;
  }[];
}

export interface InterviewFeedback {
  score: number;
  strengths: string[];
  improvements: string[];
  overallFeedback: string;
}

// Resume Analysis API
export const analyzeResume = async (resumeText: string): Promise<ResumeAnalysisResult> => {
  return apiCall<ResumeAnalysisResult>("/resume/analyze", {
    method: "POST",
    body: JSON.stringify({ resumeText }),
  });
};

// Skill Gap Analysis API
export const analyzeSkillGap = async (role: string, resumeText?: string): Promise<SkillGapResult> => {
  return apiCall<SkillGapResult>("/skillgap/analyze", {
    method: "POST",
    body: JSON.stringify({ role, resumeText }),
  });
};

// Mock Interview API
export const submitInterviewAnswer = async (
  questionId: string,
  answer: string
): Promise<InterviewFeedback> => {
  return apiCall<InterviewFeedback>("/interview/evaluate", {
    method: "POST",
    body: JSON.stringify({ questionId, answer }),
  });
};

// Career Roadmap API
export const generateRoadmap = async (role: string, currentSkills?: string[]): Promise<{
  milestones: {
    id: string;
    title: string;
    description: string;
    duration: string;
    status: "completed" | "current" | "upcoming";
    tasks: string[];
  }[];
}> => {
  return apiCall<{
    milestones: {
      id: string;
      title: string;
      description: string;
      duration: string;
      status: "completed" | "current" | "upcoming";
      tasks: string[];
    }[];
  }>("/roadmap/generate", {
    method: "POST",
    body: JSON.stringify({ role, currentSkills: currentSkills || [] }),
  });
};
