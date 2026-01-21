import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { RoleSelector } from "@/components/skillgap/RoleSelector";
import { QuestionCard } from "@/components/interview/QuestionCard";
import { AnswerTextarea } from "@/components/interview/AnswerTextarea";
import { FeedbackPanel } from "@/components/interview/FeedbackPanel";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { submitInterviewAnswer, type InterviewFeedback } from "@/services/api";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight, RotateCcw } from "lucide-react";

const interviewQuestions = [
  {
    id: "1",
    question: "Tell me about a challenging project you worked on. What was your role and how did you overcome the obstacles?",
    category: "Behavioral",
    difficulty: "medium" as const,
    timeEstimate: "3-5 minutes",
  },
  {
    id: "2",
    question: "Describe a situation where you had to learn a new technology quickly. How did you approach it?",
    category: "Technical",
    difficulty: "medium" as const,
    timeEstimate: "3-4 minutes",
  },
  {
    id: "3",
    question: "How do you handle disagreements with team members about technical decisions?",
    category: "Behavioral",
    difficulty: "easy" as const,
    timeEstimate: "2-3 minutes",
  },
  {
    id: "4",
    question: "Explain how you would design a scalable system for a real-time chat application.",
    category: "System Design",
    difficulty: "hard" as const,
    timeEstimate: "5-7 minutes",
  },
];

export default function MockInterview() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<InterviewFeedback | null>(null);

  const currentQuestion = interviewQuestions[currentQuestionIndex];

  const handleStartInterview = () => {
    if (selectedRole) {
      setInterviewStarted(true);
    }
  };

  const handleSubmitAnswer = async () => {
    setIsLoading(true);
    try {
      const result = await submitInterviewAnswer(currentQuestion.id, answer);
      setFeedback(result);
    } catch (error) {
      console.error("Failed to submit answer:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < interviewQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setAnswer("");
      setFeedback(null);
    }
  };

  const handleResetInterview = () => {
    setInterviewStarted(false);
    setCurrentQuestionIndex(0);
    setAnswer("");
    setFeedback(null);
    setSelectedRole(null);
  };

  return (
    <div className="container py-8 space-y-8">
      <PageHeader
        title="Mock Interview"
        description="Practice interview questions and get AI-powered feedback on your responses"
      >
        {interviewStarted && (
          <Button variant="outline" onClick={handleResetInterview}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Start Over
          </Button>
        )}
      </PageHeader>

      {/* Setup Phase */}
      {!interviewStarted && (
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <RoleSelector selectedRole={selectedRole} onSelect={setSelectedRole} />
          </div>

          {selectedRole && (
            <div className="rounded-xl border border-border bg-card p-6 animate-fade-in">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Ready to Start?</h3>
                  <p className="text-muted-foreground">
                    You'll be asked {interviewQuestions.length} questions. Take your time to 
                    provide thoughtful responses. Our AI will analyze your answers and provide 
                    detailed feedback.
                  </p>
                </div>
                <Button 
                  size="lg" 
                  className="gradient-primary shadow-primary shrink-0"
                  onClick={handleStartInterview}
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Start Interview
                </Button>
              </div>
            </div>
          )}

          {!selectedRole && (
            <div className="rounded-xl border border-dashed border-border bg-muted/30 p-12 text-center">
              <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-semibold text-lg mb-2">Select Your Target Role</h3>
              <p className="text-muted-foreground">
                Choose a role to get relevant interview questions
              </p>
            </div>
          )}
        </div>
      )}

      {/* Interview Phase */}
      {interviewStarted && (
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Question & Answer Section */}
          <div className="space-y-6">
            <QuestionCard
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={interviewQuestions.length}
              question={currentQuestion.question}
              category={currentQuestion.category}
              difficulty={currentQuestion.difficulty}
              timeEstimate={currentQuestion.timeEstimate}
            />

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-4">Your Answer</h3>
              <AnswerTextarea
                value={answer}
                onChange={setAnswer}
                onSubmit={handleSubmitAnswer}
                onReset={() => setAnswer("")}
                isLoading={isLoading}
                isDisabled={!!feedback}
              />
            </div>

            {/* Navigation */}
            {feedback && currentQuestionIndex < interviewQuestions.length - 1 && (
              <Button 
                className="w-full gradient-primary shadow-primary"
                size="lg"
                onClick={handleNextQuestion}
              >
                Next Question
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}

            {feedback && currentQuestionIndex === interviewQuestions.length - 1 && (
              <div className="rounded-xl border border-success/20 bg-success/5 p-6 text-center">
                <h3 className="font-semibold text-success mb-2">Interview Complete!</h3>
                <p className="text-muted-foreground mb-4">
                  Great job completing all questions. Review your feedback and practice more.
                </p>
                <Button variant="outline" onClick={handleResetInterview}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Practice Again
                </Button>
              </div>
            )}
          </div>

          {/* Feedback Section */}
          <div>
            {isLoading && (
              <div className="rounded-xl border border-border bg-card p-12 flex items-center justify-center">
                <LoadingSpinner size="lg" text="Analyzing your response..." />
              </div>
            )}

            {feedback && !isLoading && (
              <FeedbackPanel
                score={feedback.score}
                strengths={feedback.strengths}
                improvements={feedback.improvements}
                overallFeedback={feedback.overallFeedback}
              />
            )}

            {!feedback && !isLoading && (
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-12 text-center">
                <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-semibold text-lg mb-2">AI Feedback</h3>
                <p className="text-muted-foreground">
                  Submit your answer to receive personalized feedback
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
