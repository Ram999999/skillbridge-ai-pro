import { CheckCircle2, Circle, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Milestone {
  id: string;
  title: string;
  description: string;
  duration: string;
  status: "completed" | "current" | "upcoming";
  tasks: string[];
}

interface RoadmapTimelineProps {
  milestones: Milestone[];
}

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    lineClass: "bg-success",
    dotClass: "bg-success text-success-foreground",
    textClass: "text-foreground",
  },
  current: {
    icon: Clock,
    lineClass: "bg-primary",
    dotClass: "bg-primary text-primary-foreground animate-pulse-subtle",
    textClass: "text-foreground font-semibold",
  },
  upcoming: {
    icon: Circle,
    lineClass: "bg-muted",
    dotClass: "bg-muted text-muted-foreground",
    textClass: "text-muted-foreground",
  },
};

export const RoadmapTimeline = ({ milestones }: RoadmapTimelineProps) => {
  return (
    <div className="space-y-4">
      {milestones.map((milestone, index) => {
        const config = statusConfig[milestone.status];
        const Icon = config.icon;
        const isLast = index === milestones.length - 1;

        return (
          <div key={milestone.id} className="relative flex gap-4">
            {/* Timeline Line */}
            <div className="flex flex-col items-center">
              <div className={cn("flex h-10 w-10 items-center justify-center rounded-full", config.dotClass)}>
                <Icon className="h-5 w-5" />
              </div>
              {!isLast && (
                <div className={cn("w-0.5 flex-1 min-h-[60px]", config.lineClass)} />
              )}
            </div>

            {/* Content */}
            <div className={cn("flex-1 pb-8", isLast && "pb-0")}>
              <div className="rounded-xl border border-border bg-card p-5 hover:shadow-card-hover transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 className={cn("text-lg", config.textClass)}>{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded shrink-0">
                    {milestone.duration}
                  </span>
                </div>

                <ul className="space-y-2">
                  {milestone.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="h-3 w-3 text-primary shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
