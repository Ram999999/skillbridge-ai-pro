import { Badge } from "@/components/ui/badge";
import { MessageSquare, Clock, BarChart3 } from "lucide-react";

interface QuestionCardProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  timeEstimate: string;
}

const difficultyConfig = {
  easy: { className: "bg-success/10 text-success border-success/20", label: "Easy" },
  medium: { className: "bg-warning/10 text-warning border-warning/20", label: "Medium" },
  hard: { className: "bg-destructive/10 text-destructive border-destructive/20", label: "Hard" },
};

export const QuestionCard = ({
  questionNumber,
  totalQuestions,
  question,
  category,
  difficulty,
  timeEstimate,
}: QuestionCardProps) => {
  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full gradient-primary text-primary-foreground text-sm font-semibold">
            {questionNumber}
          </div>
          <span className="text-sm text-muted-foreground">
            of {totalQuestions} questions
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge variant="outline">{category}</Badge>
          <Badge variant="outline" className={difficultyConfig[difficulty].className}>
            {difficultyConfig[difficulty].label}
          </Badge>
        </div>
      </div>

      <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
        <MessageSquare className="h-5 w-5 text-primary mt-0.5 shrink-0" />
        <p className="text-lg font-medium leading-relaxed">{question}</p>
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>Recommended: {timeEstimate}</span>
        </div>
        <div className="flex items-center gap-1">
          <BarChart3 className="h-4 w-4" />
          <span>Answer thoroughly for best results</span>
        </div>
      </div>
    </div>
  );
};
