import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Target, MessageSquare, ArrowRight, CheckCircle, Sparkles, Users, Award } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Analyze Your Resume",
    description: "Upload your resume and get instant AI-powered feedback on ATS compatibility and skill gaps.",
  },
  {
    icon: Target,
    title: "Identify Skill Gaps",
    description: "Discover exactly which skills you need to develop for your target role.",
  },
  {
    icon: MessageSquare,
    title: "Practice Interviews",
    description: "Get real-time feedback on your interview responses with AI-powered coaching.",
  },
];

const stats = [
  { value: "85%", label: "ATS Pass Rate Improvement" },
  { value: "3x", label: "More Interview Callbacks" },
  { value: "10k+", label: "Students Helped" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="container py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Powered by Microsoft AI
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              SkillBridge AI Pro
              <span className="block text-gradient mt-2">
                Bridging the Skill Gap
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered career readiness platform designed for Tier-2 and Tier-3 college 
              students who lack access to quality mentorship and career guidance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gradient-primary shadow-primary text-lg px-8">
                <Link to="/resume-analyzer">
                  Analyze Your Resume
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/dashboard">
                  View Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">The Problem We're Solving</h2>
            <p className="text-lg text-muted-foreground">
              Over 80% of students in Tier-2 and Tier-3 colleges lack access to quality career 
              mentorship. They struggle with resume optimization, interview preparation, and 
              understanding the skills needed for their dream jobs. SkillBridge AI Pro levels 
              the playing field with intelligent, personalized guidance.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to accelerate your job readiness journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  <div className="rounded-2xl border border-border bg-card p-8 h-full transition-all hover:shadow-card-hover hover:border-primary/20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl gradient-primary text-primary-foreground mb-6">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose SkillBridge AI?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "ATS-Optimized Analysis", description: "Get your resume past automated screening systems" },
              { icon: Target, title: "Role-Specific Gaps", description: "Understand exactly what skills employers want" },
              { icon: MessageSquare, title: "AI Interview Coach", description: "Practice with realistic interview questions" },
              { icon: Users, title: "Industry Insights", description: "Learn from real hiring patterns and trends" },
              { icon: CheckCircle, title: "Personalized Roadmap", description: "Get a clear 90-day action plan" },
              { icon: Sparkles, title: "Microsoft AI Powered", description: "Built with cutting-edge Azure AI technology" },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-6 rounded-xl border border-border hover:border-primary/20 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Bridge Your Skill Gap?</h2>
            <p className="text-muted-foreground">
              Start your journey to becoming job-ready today. No sign-up required.
            </p>
            <Button asChild size="lg" className="gradient-primary shadow-primary text-lg px-8">
              <Link to="/resume-analyzer">
                Analyze Your Resume Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm">Built for Microsoft Imagine Cup 2025</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 SkillBridge AI Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
