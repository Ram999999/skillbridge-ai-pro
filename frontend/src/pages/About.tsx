import { PageHeader } from "@/components/common/PageHeader";
import { Award, Target, Sparkles, Users, Code, Cloud, Brain, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="container py-8 space-y-12">
      <PageHeader
        title="About SkillBridge AI Pro"
        description="Empowering students with AI-powered career readiness"
      />

      {/* Mission Statement */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              SkillBridge AI Pro is designed to bridge the career guidance gap for students in Tier-2 and Tier-3 colleges 
              who lack access to quality mentorship. We leverage Microsoft Azure AI to provide personalized, actionable 
              career readiness guidance.
            </p>
            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="font-semibold mb-2">Problem</h4>
                <p className="text-sm text-muted-foreground">
                  80% of Tier-2/3 students lack career mentorship, leading to poor resume quality and interview performance.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                <h4 className="font-semibold mb-2">Solution</h4>
                <p className="text-sm text-muted-foreground">
                  AI-powered platform providing resume analysis, skill gap identification, interview coaching, and personalized roadmaps.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-warning/5 border border-warning/20">
                <h4 className="font-semibold mb-2">Impact</h4>
                <p className="text-sm text-muted-foreground">
                  Empowering students to become job-ready with data-driven insights and personalized learning paths.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Technology Stack */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          Technology Stack
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-5 w-5 text-primary" />
                Microsoft Azure Services
              </CardTitle>
              <CardDescription>Core AI and cloud infrastructure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Azure OpenAI</Badge>
                <Badge variant="outline">Azure AI Language</Badge>
                <Badge variant="outline">Azure App Service</Badge>
                <Badge variant="outline">Azure Cognitive Services</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Leveraging GPT-4 for intelligent resume analysis, interview evaluation, and personalized career roadmaps. 
                Azure Language Service extracts skills and key phrases from resumes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Frontend & Backend
              </CardTitle>
              <CardDescription>Modern web technologies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React + TypeScript</Badge>
                <Badge variant="outline">Node.js + Express</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">Vite</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Built with modern, scalable technologies. Responsive UI with shadcn/ui components. 
                RESTful API architecture with proper error handling and rate limiting.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "AI Resume Analysis",
              description: "ATS compatibility scoring, skill extraction, and improvement suggestions powered by Azure OpenAI",
              icon: Award,
            },
            {
              title: "Skill Gap Analysis",
              description: "Role-specific skill comparison with learning time estimates and priority ranking",
              icon: Target,
            },
            {
              title: "Mock Interview Coach",
              description: "STAR method evaluation with detailed feedback on strengths and areas for improvement",
              icon: Users,
            },
            {
              title: "Career Roadmap",
              description: "90-day personalized learning plan with milestones, tasks, and resource recommendations",
              icon: Sparkles,
            },
            {
              title: "Progress Tracking",
              description: "Dashboard with visual analytics showing resume score trends and skill development progress",
              icon: Brain,
            },
            {
              title: "Export & Share",
              description: "Export analysis reports and roadmaps as PDF for offline reference and sharing",
              icon: Code,
            },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Imagine Cup Alignment */}
      <section className="space-y-6">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Microsoft Imagine Cup 2025
            </CardTitle>
            <CardDescription>Project alignment with competition criteria</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  First-of-its-kind AI-powered career readiness platform specifically designed for underserved student populations.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Impact</h4>
                <p className="text-sm text-muted-foreground">
                  Addresses the critical problem of career guidance gap affecting millions of students in Tier-2/3 colleges.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Technology</h4>
                <p className="text-sm text-muted-foreground">
                  Deep integration with Microsoft Azure AI services (OpenAI, Language Service) demonstrating cloud-native architecture.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Scalability</h4>
                <p className="text-sm text-muted-foreground">
                  Built on Azure infrastructure, ready to scale to serve thousands of students simultaneously.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Team & Credits */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Project Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Competition</h4>
              <p className="text-sm text-muted-foreground">Microsoft Imagine Cup 2025</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Category</h4>
              <p className="text-sm text-muted-foreground">AI & Machine Learning / Social Impact</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Built With</h4>
              <p className="text-sm text-muted-foreground">
                Microsoft Azure OpenAI, Azure AI Language Service, React, Node.js, TypeScript
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

