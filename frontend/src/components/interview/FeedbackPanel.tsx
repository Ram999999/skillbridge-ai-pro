import { CheckCircle2, AlertTriangle, TrendingUp, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface FeedbackPanelProps {
  score: number;
  strengths: string[];
  improvements: string[];
  overallFeedback: string;
}

export const FeedbackPanel = ({
  score,
  strengths,
  improvements,
  overallFeedback,
}: FeedbackPanelProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return "Excellent";
    if (score >= 80) return "Very Good";
    if (score >= 70) return "Good";
    if (score >= 60) return "Satisfactory";
    return "Needs Improvement";
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-6 animate-fade-in">
      <div className="flex items-center gap-2">
        <Award className="h-5 w-5 text-primary" />
        <h3 className="font-semibold text-lg">AI Feedback</h3>
      </div>

      {/* Score Section */}
      <div className="flex items-center gap-6 p-4 rounded-lg bg-muted/50">
        <div className="text-center">
          <div className={cn("text-4xl font-bold", getScoreColor(score))}>
            {score}
          </div>
          <div className="text-xs text-muted-foreground">out of 100</div>
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-medium">{getScoreLabel(score)}</span>
            <span className={cn("text-sm", getScoreColor(score))}>{score}%</span>
          </div>
          <Progress value={score} className="h-3" />
        </div>
      </div>

      {/* Overall Feedback */}
      <div className="p-4 rounded-lg border border-border bg-background">
        <p className="text-muted-foreground">{overallFeedback}</p>
      </div>

      {/* Strengths */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-success">
          <CheckCircle2 className="h-4 w-4" />
          <span className="font-medium">Strengths</span>
        </div>
        <ul className="space-y-2">
          {strengths.map((strength, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-success mt-2 shrink-0" />
              <span>{strength}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Areas for Improvement */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-warning">
          <AlertTriangle className="h-4 w-4" />
          <span className="font-medium">Areas for Improvement</span>
        </div>
        <ul className="space-y-2">
          {improvements.map((improvement, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-warning mt-2 shrink-0" />
              <span>{improvement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Next Steps */}
      <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20">
        <TrendingUp className="h-4 w-4 text-primary shrink-0" />
        <p className="text-sm text-primary">
          Practice more questions in this category to improve your score
        </p>
      </div>
    </div>
  );
};
