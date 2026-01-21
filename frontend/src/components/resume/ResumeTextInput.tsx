import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FileText, Sparkles } from "lucide-react";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";

interface ResumeTextInputProps {
  value: string;
  onChange: (value: string) => void;
  onAnalyze: () => void;
  isLoading: boolean;
}

export const ResumeTextInput = ({
  value,
  onChange,
  onAnalyze,
  isLoading,
}: ResumeTextInputProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <FileText className="h-4 w-4" />
        <span>Paste your resume text below</span>
      </div>
      
      <Textarea
        placeholder="Paste your resume content here...

Example:
John Doe
Software Engineer

EXPERIENCE
Senior Developer at Tech Corp (2020-Present)
- Led development of microservices architecture
- Implemented CI/CD pipelines using GitHub Actions
- Mentored junior developers

EDUCATION
B.S. Computer Science, State University

SKILLS
JavaScript, TypeScript, React, Node.js, Python, AWS, Docker"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[300px] resize-none font-mono text-sm"
        disabled={isLoading}
      />

      <Button
        onClick={onAnalyze}
        disabled={!value.trim() || isLoading}
        className="w-full gradient-primary shadow-primary"
        size="lg"
      >
        {isLoading ? (
          <LoadingSpinner size="sm" />
        ) : (
          <>
            <Sparkles className="h-4 w-4 mr-2" />
            Analyze Resume with AI
          </>
        )}
      </Button>
    </div>
  );
};
