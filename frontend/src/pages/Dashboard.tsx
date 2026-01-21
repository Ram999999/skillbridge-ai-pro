import { Link } from "react-router-dom";
import { PageHeader } from "@/components/common/PageHeader";
import { ScoreCard } from "@/components/common/ScoreCard";
import { Button } from "@/components/ui/button";
import { FileText, Target, MessageSquare, TrendingUp, Clock, ArrowRight, Lightbulb } from "lucide-react";

const recentInsights = [
  {
    type: "resume",
    message: "Your resume is missing cloud platform skills. Add AWS or Azure experience to increase visibility.",
    time: "2 hours ago",
  },
  {
    type: "skill",
    message: "Frontend Developer roles are trending. Your React skills make you a strong candidate.",
    time: "1 day ago",
  },
  {
    type: "interview",
    message: "Practice more behavioral questions. Your technical answers score higher than soft skills.",
    time: "3 days ago",
  },
];

export default function Dashboard() {
  return (
    <div className="container py-8 space-y-8">
      <PageHeader
        title="Dashboard"
        description="Track your job readiness progress at a glance"
      >
        <Button asChild className="gradient-primary shadow-primary">
          <Link to="/resume-analyzer">
            <FileText className="h-4 w-4 mr-2" />
            Analyze Resume
          </Link>
        </Button>
      </PageHeader>

      {/* Score Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ScoreCard
          title="Resume Score"
          value="72/100"
          subtitle="Last analyzed 2 days ago"
          icon={FileText}
          variant="primary"
        />
        <ScoreCard
          title="Skill Readiness"
          value="68%"
          subtitle="Frontend Developer"
          icon={Target}
          variant="success"
        />
        <ScoreCard
          title="Interview Score"
          value="78/100"
          subtitle="Based on 5 mock interviews"
          icon={MessageSquare}
          variant="warning"
        />
        <ScoreCard
          title="Career Progress"
          value="Day 15"
          subtitle="of 90-day roadmap"
          icon={TrendingUp}
          variant="default"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Quick Actions */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              to="/resume-analyzer"
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-card-hover transition-all group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Resume Analyzer</p>
                <p className="text-sm text-muted-foreground">Get AI feedback</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>

            <Link
              to="/skill-gap"
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-card-hover transition-all group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 text-success">
                <Target className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Skill Gap Analysis</p>
                <p className="text-sm text-muted-foreground">Find missing skills</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>

            <Link
              to="/mock-interview"
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-card-hover transition-all group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10 text-warning">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Mock Interview</p>
                <p className="text-sm text-muted-foreground">Practice with AI</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>

        {/* Recent Insights */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold">Recent AI Insights</h2>
          <div className="rounded-xl border border-border bg-card divide-y divide-border">
            {recentInsights.map((insight, index) => (
              <div key={index} className="p-4 flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">{insight.message}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{insight.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Summary */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold mb-4">Your 90-Day Progress</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Foundation Phase</span>
                <span className="text-sm font-medium text-success">50% Complete</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-success rounded-full" />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span>You're on track! 15 days into your career roadmap.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
