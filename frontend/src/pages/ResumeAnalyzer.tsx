import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { ResumeTextInput } from "@/components/resume/ResumeTextInput";
import { ResumeScore } from "@/components/resume/ResumeScore";
import { SkillsList } from "@/components/resume/SkillsList";
import { ImprovementSuggestions } from "@/components/resume/ImprovementSuggestions";
import { analyzeResume, type ResumeAnalysisResult } from "@/services/api";
import { AlertTriangle, CheckCircle2, FileWarning, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { exportResumeAnalysis } from "@/utils/export";

export default function ResumeAnalyzer() {
  const [resumeText, setResumeText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ResumeAnalysisResult | null>(null);

  const handleAnalyze = async () => {
    setIsLoading(true);
    try {
      const analysisResult = await analyzeResume(resumeText);
      setResult(analysisResult);
    } catch (error) {
      console.error("Analysis failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-8 space-y-8">
      <PageHeader
        title="Resume Analyzer"
        description="Get AI-powered feedback to make your resume ATS-friendly and interview-ready"
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Input Section */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold mb-4">Paste Your Resume</h2>
            <ResumeTextInput
              value={resumeText}
              onChange={setResumeText}
              onAnalyze={handleAnalyze}
              isLoading={isLoading}
            />
          </div>

          {/* Tips Card */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-3">
            <h3 className="font-semibold text-primary">Tips for Best Results</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>Paste the full text from your resume PDF or document</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>Include all sections: Experience, Education, Skills</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>Use the original formatting for accurate analysis</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {!result && !isLoading && (
            <div className="rounded-xl border border-dashed border-border bg-muted/30 p-12 text-center">
              <FileWarning className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-semibold text-lg mb-2">No Analysis Yet</h3>
              <p className="text-muted-foreground">
                Paste your resume text and click "Analyze" to get AI-powered feedback
              </p>
            </div>
          )}

          {result && (
            <div className="space-y-6 animate-fade-in">
              {/* Score Card */}
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <ResumeScore score={result.score} />
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">ATS Compatibility</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-warning rounded-full transition-all duration-1000" 
                            style={{ width: `${result.atsAnalysis.passRate}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{result.atsAnalysis.passRate}%</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-warning flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        ATS Issues Found
                      </h4>
                      <ul className="space-y-1">
                        {result.atsAnalysis.issues.map((issue, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-warning">•</span>
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Analysis */}
              <div className="rounded-xl border border-border bg-card p-6">
                <SkillsList skills={result.skills} title="Skills Analysis" />
              </div>

              {/* Improvement Suggestions */}
              <div className="rounded-xl border border-border bg-card p-6">
                <ImprovementSuggestions suggestions={result.suggestions} />
              </div>

              {/* Next Steps */}
              <div className="rounded-xl border border-success/20 bg-success/5 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-success">Recommended Next Steps</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => exportResumeAnalysis(result)}
                    className="border-success/30 text-success hover:bg-success/10"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export Report
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-success/30 text-success">
                    Address ATS issues
                  </Badge>
                  <Badge variant="outline" className="border-success/30 text-success">
                    Add missing skills
                  </Badge>
                  <Badge variant="outline" className="border-success/30 text-success">
                    Practice mock interviews
                  </Badge>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
