import { AlertTriangle, CheckCircle, Lightbulb, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Suggestion {
  type: "critical" | "warning" | "improvement" | "positive";
  title: string;
  description: string;
}

interface ImprovementSuggestionsProps {
  suggestions: Suggestion[];
}

const typeConfig = {
  critical: {
    icon: AlertTriangle,
    className: "border-destructive/20 bg-destructive/5",
    iconClassName: "text-destructive",
  },
  warning: {
    icon: AlertTriangle,
    className: "border-warning/20 bg-warning/5",
    iconClassName: "text-warning",
  },
  improvement: {
    icon: Lightbulb,
    className: "border-primary/20 bg-primary/5",
    iconClassName: "text-primary",
  },
  positive: {
    icon: CheckCircle,
    className: "border-success/20 bg-success/5",
    iconClassName: "text-success",
  },
};

export const ImprovementSuggestions = ({ suggestions }: ImprovementSuggestionsProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h3 className="font-semibold text-lg">AI Recommendations</h3>
      </div>
      
      <div className="space-y-3">
        {suggestions.map((suggestion, index) => {
          const config = typeConfig[suggestion.type];
          const Icon = config.icon;
          
          return (
            <div
              key={index}
              className={cn(
                "rounded-lg border p-4 transition-all hover:shadow-sm",
                config.className
              )}
            >
              <div className="flex gap-3">
                <Icon className={cn("h-5 w-5 mt-0.5 shrink-0", config.iconClassName)} />
                <div className="space-y-1">
                  <p className="font-medium">{suggestion.title}</p>
                  <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
