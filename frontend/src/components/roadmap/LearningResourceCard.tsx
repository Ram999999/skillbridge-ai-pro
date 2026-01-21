import { ExternalLink, BookOpen, Video, FileText, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface LearningResource {
  id: string;
  title: string;
  type: "course" | "video" | "article" | "project";
  provider: string;
  duration: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  url: string;
}

interface LearningResourceCardProps {
  resources: LearningResource[];
}

const typeIcons = {
  course: BookOpen,
  video: Video,
  article: FileText,
  project: Code,
};

const difficultyColors = {
  beginner: "bg-success/10 text-success border-success/20",
  intermediate: "bg-warning/10 text-warning border-warning/20",
  advanced: "bg-destructive/10 text-destructive border-destructive/20",
};

export const LearningResourceCard = ({ resources }: LearningResourceCardProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-primary" />
        Recommended Resources
      </h3>

      <div className="grid gap-3">
        {resources.map((resource) => {
          const Icon = typeIcons[resource.type];
          
          return (
            <div
              key={resource.id}
              className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:shadow-card-hover transition-all group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <Icon className="h-5 w-5" />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-medium truncate">{resource.title}</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{resource.provider}</span>
                  <span>•</span>
                  <span>{resource.duration}</span>
                </div>
              </div>

              <Badge variant="outline" className={difficultyColors[resource.difficulty]}>
                {resource.difficulty}
              </Badge>

              <Button size="icon" variant="ghost" className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
