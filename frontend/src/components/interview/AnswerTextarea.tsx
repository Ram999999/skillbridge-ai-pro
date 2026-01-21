import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, RotateCcw } from "lucide-react";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";

interface AnswerTextareaProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onReset: () => void;
  isLoading: boolean;
  isDisabled: boolean;
}

export const AnswerTextarea = ({
  value,
  onChange,
  onSubmit,
  onReset,
  isLoading,
  isDisabled,
}: AnswerTextareaProps) => {
  const wordCount = value.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="space-y-4">
      <div className="relative">
        <Textarea
          placeholder="Type your answer here... 

Be specific and provide examples from your experience. Structure your response clearly with:
• Context: What was the situation?
• Action: What did you do?
• Result: What was the outcome?"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="min-h-[200px] resize-none pr-20"
          disabled={isLoading || isDisabled}
        />
        <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
          {wordCount} words
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          onClick={onSubmit}
          disabled={!value.trim() || isLoading || isDisabled}
          className="flex-1 gradient-primary shadow-primary"
          size="lg"
        >
          {isLoading ? (
            <LoadingSpinner size="sm" />
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Submit Answer
            </>
          )}
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          onClick={onReset}
          disabled={isLoading}
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
