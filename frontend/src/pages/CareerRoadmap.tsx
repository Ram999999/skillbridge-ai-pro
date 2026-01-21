import { useState, useEffect } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { RoadmapTimeline } from "@/components/roadmap/RoadmapTimeline";
import { LearningResourceCard } from "@/components/roadmap/LearningResourceCard";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { generateRoadmap } from "@/services/api";
import { Map, Calendar, BookOpen, Target, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { exportRoadmap } from "@/utils/export";

const learningResources = [
  {
    id: "1",
    title: "The Complete Web Developer Bootcamp",
    type: "course" as const,
    provider: "Udemy",
    duration: "40 hours",
    difficulty: "beginner" as const,
    url: "#",
  },
  {
    id: "2",
    title: "React - The Complete Guide",
    type: "course" as const,
    provider: "Coursera",
    duration: "25 hours",
    difficulty: "intermediate" as const,
    url: "#",
  },
  {
    id: "3",
    title: "System Design Interview Prep",
    type: "video" as const,
    provider: "YouTube",
    duration: "5 hours",
    difficulty: "advanced" as const,
    url: "#",
  },
  {
    id: "4",
    title: "Building a Portfolio Project",
    type: "project" as const,
    provider: "GitHub",
    duration: "20 hours",
    difficulty: "intermediate" as const,
    url: "#",
  },
  {
    id: "5",
    title: "Technical Interview Handbook",
    type: "article" as const,
    provider: "Tech Interview Handbook",
    duration: "3 hours",
    difficulty: "intermediate" as const,
    url: "#",
  },
];

export default function CareerRoadmap() {
  const [isLoading, setIsLoading] = useState(true);
  const [milestones, setMilestones] = useState<any[]>([]);

  useEffect(() => {
    const loadRoadmap = async () => {
      try {
        const result = await generateRoadmap("frontend");
        setMilestones(result.milestones);
      } catch (error) {
        console.error("Failed to load roadmap:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadRoadmap();
  }, []);

  return (
    <div className="container py-8 space-y-8">
      <PageHeader
        title="Career Roadmap"
        description="Your personalized 90-day plan to become job-ready"
      >
        <Button 
          variant="outline"
          onClick={() => exportRoadmap({ milestones })}
          disabled={milestones.length === 0}
        >
          <Download className="h-4 w-4 mr-2" />
          Download Plan
        </Button>
      </PageHeader>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Map className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold">90 Days</p>
              <p className="text-sm text-muted-foreground">Total Duration</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 text-success">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold">3 Phases</p>
              <p className="text-sm text-muted-foreground">Foundation → Skills → Interview</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10 text-warning">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm text-muted-foreground">Recommended Resources</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <Map className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Your 90-Day Journey</h2>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <LoadingSpinner size="lg" text="Loading your roadmap..." />
              </div>
            ) : (
              <RoadmapTimeline milestones={milestones} />
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Weekly Focus */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              This Week's Focus
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                  1
                </div>
                <div>
                  <p className="font-medium text-sm">Complete TypeScript basics</p>
                  <p className="text-xs text-muted-foreground">4 hours remaining</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                <div className="h-6 w-6 rounded-full bg-muted-foreground/20 text-muted-foreground flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </div>
                <div>
                  <p className="font-medium text-sm">Build portfolio project</p>
                  <p className="text-xs text-muted-foreground">Start this week</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                <div className="h-6 w-6 rounded-full bg-muted-foreground/20 text-muted-foreground flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </div>
                <div>
                  <p className="font-medium text-sm">Practice 5 interview questions</p>
                  <p className="text-xs text-muted-foreground">Start this week</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Learning Resources */}
          <LearningResourceCard resources={learningResources} />
        </div>
      </div>
    </div>
  );
}
