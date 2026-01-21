import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Clock, BookOpen } from "lucide-react";

interface Skill {
  name: string;
  priority: "high" | "medium" | "low";
  timeToLearn: string;
  currentLevel: number;
  requiredLevel: number;
}

interface MissingSkillsCardProps {
  skills: Skill[];
  title: string;
  type: "missing" | "matching";
}

const priorityConfig = {
  high: { className: "bg-destructive/10 text-destructive border-destructive/20", label: "High Priority" },
  medium: { className: "bg-warning/10 text-warning border-warning/20", label: "Medium Priority" },
  low: { className: "bg-muted text-muted-foreground border-border", label: "Low Priority" },
};

export const MissingSkillsCard = ({ skills, title, type }: MissingSkillsCardProps) => {
  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-6">
      <div className="flex items-center gap-2">
        {type === "missing" ? (
          <TrendingUp className="h-5 w-5 text-warning" />
        ) : (
          <TrendingUp className="h-5 w-5 text-success" />
        )}
        <h3 className="font-semibold text-lg">{title}</h3>
        <Badge variant="secondary" className="ml-auto">
          {skills.length} skills
        </Badge>
      </div>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium">{skill.name}</span>
                <Badge variant="outline" className={priorityConfig[skill.priority].className}>
                  {skill.priority}
                </Badge>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{skill.timeToLearn}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Progress 
                value={(skill.currentLevel / skill.requiredLevel) * 100} 
                className="h-2 flex-1"
              />
              <span className="text-xs text-muted-foreground w-20">
                {skill.currentLevel}/{skill.requiredLevel}
              </span>
            </div>
          </div>
        ))}
      </div>

      {type === "missing" && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border">
          <BookOpen className="h-4 w-4" />
          <span>Focus on high-priority skills first for maximum impact</span>
        </div>
      )}
    </div>
  );
};
