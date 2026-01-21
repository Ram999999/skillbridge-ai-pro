import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ScoreCardProps {
  title: string;
  value: number | string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  variant?: "default" | "success" | "warning" | "primary";
}

const variantStyles = {
  default: "bg-card border-border",
  success: "bg-success/5 border-success/20",
  warning: "bg-warning/5 border-warning/20",
  primary: "bg-primary/5 border-primary/20",
};

const iconVariantStyles = {
  default: "bg-muted text-muted-foreground",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  primary: "bg-primary/10 text-primary",
};

export const ScoreCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  variant = "default",
}: ScoreCardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border p-6 transition-all hover:shadow-card-hover",
        variantStyles[variant]
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div className={cn("rounded-lg p-3", iconVariantStyles[variant])}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};
