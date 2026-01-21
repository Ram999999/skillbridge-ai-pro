import { cn } from "@/lib/utils";

interface ResumeScoreProps {
  score: number;
  label?: string;
}

export const ResumeScore = ({ score, label = "ATS Score" }: ResumeScoreProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 40) return "Needs Improvement";
    return "Poor";
  };

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="10"
            fill="none"
            className="text-muted"
          />
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            className={cn("transition-all duration-1000 ease-out", getScoreColor(score))}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("text-3xl font-bold", getScoreColor(score))}>{score}</span>
          <span className="text-xs text-muted-foreground">/ 100</span>
        </div>
      </div>
      
      <div className="text-center">
        <p className="font-semibold">{label}</p>
        <p className={cn("text-sm", getScoreColor(score))}>{getScoreLabel(score)}</p>
      </div>
    </div>
  );
};
