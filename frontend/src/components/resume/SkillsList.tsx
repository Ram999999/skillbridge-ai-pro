import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";

interface Skill {
  name: string;
  found: boolean;
  importance: "high" | "medium" | "low";
}

interface SkillsListProps {
  skills: Skill[];
  title: string;
}

export const SkillsList = ({ skills, title }: SkillsListProps) => {
  const foundSkills = skills.filter((s) => s.found);
  const missingSkills = skills.filter((s) => !s.found);

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">{title}</h3>
      
      <div className="space-y-4">
        {foundSkills.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-success">
              <CheckCircle2 className="h-4 w-4" />
              <span>Skills Detected ({foundSkills.length})</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {foundSkills.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="bg-success/10 text-success border-success/20"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {missingSkills.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-warning">
              <XCircle className="h-4 w-4" />
              <span>Recommended Skills ({missingSkills.length})</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {missingSkills.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="outline"
                  className="border-warning/30 text-warning"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
