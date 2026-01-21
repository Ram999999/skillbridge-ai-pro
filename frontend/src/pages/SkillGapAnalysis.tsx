import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { RoleSelector } from "@/components/skillgap/RoleSelector";
import { MissingSkillsCard } from "@/components/skillgap/MissingSkillsCard";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { analyzeSkillGap, type SkillGapResult } from "@/services/api";
import { Target, TrendingUp, AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function SkillGapAnalysis() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SkillGapResult | null>(null);

  const handleRoleSelect = async (role: string) => {
    setSelectedRole(role);
    setIsLoading(true);
    try {
      const analysisResult = await analyzeSkillGap(role);
      setResult(analysisResult);
    } catch (error) {
      console.error("Skill gap analysis failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-8 space-y-8">
      <PageHeader
        title="Skill Gap Analysis"
        description="Identify the skills you need to develop for your target role"
      />

      {/* Role Selector */}
      <div className="rounded-xl border border-border bg-card p-6">
        <RoleSelector selectedRole={selectedRole} onSelect={handleRoleSelect} />
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-20">
          <LoadingSpinner size="lg" text="Analyzing skill gaps..." />
        </div>
      )}

      {/* Results */}
      {result && !isLoading && (
        <div className="space-y-6 animate-fade-in">
          {/* Match Overview */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-center">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="45"
                      stroke="currentColor"
                      strokeWidth="10"
                      fill="none"
                      className="text-muted"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="45"
                      stroke="currentColor"
                      strokeWidth="10"
                      fill="none"
                      strokeLinecap="round"
                      className="text-primary transition-all duration-1000"
                      style={{
                        strokeDasharray: 2 * Math.PI * 45,
                        strokeDashoffset: 2 * Math.PI * 45 * (1 - result.matchPercentage / 100),
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold">{result.matchPercentage}%</span>
                    <span className="text-xs text-muted-foreground">match</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{result.role}</h3>
                  <p className="text-muted-foreground">
                    Based on your current skills, you're {result.matchPercentage}% ready for this role.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-success/5 border border-success/20">
                    <TrendingUp className="h-5 w-5 text-success" />
                    <div>
                      <p className="font-medium">{result.matchingSkills.length}</p>
                      <p className="text-xs text-muted-foreground">Matching Skills</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-warning/5 border border-warning/20">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    <div>
                      <p className="font-medium">{result.missingSkills.length}</p>
                      <p className="text-xs text-muted-foreground">Skills to Learn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            <MissingSkillsCard
              skills={result.matchingSkills}
              title="Your Matching Skills"
              type="matching"
            />
            <MissingSkillsCard
              skills={result.missingSkills}
              title="Skills to Develop"
              type="missing"
            />
          </div>

          {/* Priority Matrix */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <Target className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Learning Priority Matrix</h3>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-destructive">High Priority (Learn First)</h4>
                <div className="grid gap-3">
                  {result.missingSkills
                    .filter((s) => s.priority === "high")
                    .map((skill) => (
                      <div key={skill.name} className="flex items-center gap-4 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                        <span className="font-medium flex-1">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.timeToLearn}</span>
                        <Progress value={(skill.currentLevel / skill.requiredLevel) * 100} className="w-24 h-2" />
                      </div>
                    ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-warning">Medium Priority</h4>
                <div className="grid gap-3">
                  {result.missingSkills
                    .filter((s) => s.priority === "medium")
                    .map((skill) => (
                      <div key={skill.name} className="flex items-center gap-4 p-3 rounded-lg bg-warning/5 border border-warning/20">
                        <span className="font-medium flex-1">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.timeToLearn}</span>
                        <Progress value={(skill.currentLevel / skill.requiredLevel) * 100} className="w-24 h-2" />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!selectedRole && !isLoading && (
        <div className="rounded-xl border border-dashed border-border bg-muted/30 p-12 text-center">
          <Target className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="font-semibold text-lg mb-2">Select Your Target Role</h3>
          <p className="text-muted-foreground">
            Choose a role above to see which skills you need to develop
          </p>
        </div>
      )}
    </div>
  );
}
