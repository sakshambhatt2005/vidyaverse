
import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Badge, 
  BookOpen, 
  Clock, 
  BrainCircuit,
  ChevronLeft,
  CheckCircle,
  Loader,
  Sparkles
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface DailyQuizItem {
  id: string;
  title: string;
  course: string;
  difficulty: string;
  questions: number;
  timeLimit: string;
  coverImage: string;
}

const dailyQuizzes: DailyQuizItem[] = [
  {
    id: "daily-1",
    title: "JavaScript Fundamentals: Daily Challenge",
    course: "Web Development Fundamentals",
    difficulty: "Medium",
    questions: 5,
    timeLimit: "10 min",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    id: "daily-2",
    title: "Data Structures Recap",
    course: "Introduction to Computer Science",
    difficulty: "Easy",
    questions: 3,
    timeLimit: "5 min",
    coverImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
  {
    id: "daily-3",
    title: "Calculus Quick Review",
    course: "Calculus for Engineers",
    difficulty: "Hard",
    questions: 7,
    timeLimit: "15 min",
    coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
  }
];

const DailyQuiz = () => {
  const [loading, setLoading] = useState(true);
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate loading daily quizzes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Medium":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
      case "Hard":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-800/60 dark:text-slate-400";
    }
  };

  const handleStartQuiz = (quizId: string) => {
    setSelectedQuiz(quizId);
    toast({
      title: "Quiz Started",
      description: "Good luck with your daily quiz!",
    });
    // In a real app, this would navigate to the actual quiz experience
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 py-12">
          <div className="container">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-indigo-100 dark:bg-indigo-900/40 p-3 rounded-full mb-2">
                <BrainCircuit className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200">
                Daily Learning Quizzes
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                Quick daily quizzes based on your courses to help reinforce your knowledge and track your progress.
              </p>
              <Link to="/">
                <Button variant="ghost" className="mt-2">
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quiz Content */}
        <section className="container py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
              Today's Recommended Quizzes
            </h2>
            <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 py-1 px-3 rounded-full text-sm font-medium flex items-center">
              <Sparkles className="h-4 w-4 mr-1" />
              Personalized for You
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader className="h-8 w-8 text-indigo-500 animate-spin mb-4" />
              <p className="text-slate-600 dark:text-slate-400">Loading your daily quizzes...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dailyQuizzes.map((quiz) => (
                <Card 
                  key={quiz.id}
                  className={`overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-slate-200/70 dark:border-slate-700/50 ${
                    selectedQuiz === quiz.id ? "ring-2 ring-indigo-500 dark:ring-indigo-400" : ""
                  }`}
                >
                  <div className="h-40 bg-slate-200 dark:bg-slate-700 relative">
                    <div 
                      className="absolute inset-0 bg-cover bg-center" 
                      style={{ 
                        backgroundImage: `url(${quiz.coverImage})`,
                        opacity: 0.7
                      }} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span 
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getDifficultyColor(quiz.difficulty)}`}
                      >
                        {quiz.difficulty}
                      </span>
                      <h3 className="text-lg font-semibold text-white mt-1">{quiz.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-3">
                      <BookOpen className="h-4 w-4 mr-1 text-indigo-500" />
                      {quiz.course}
                    </div>
                    
                    <div className="flex justify-between items-center mb-4 text-sm">
                      <div className="flex items-center text-slate-700 dark:text-slate-300">
                        <Clock className="mr-1 h-4 w-4 text-slate-500 dark:text-slate-400" />
                        <span>{quiz.timeLimit}</span>
                      </div>
                      <div className="text-slate-700 dark:text-slate-300">
                        {quiz.questions} questions
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleStartQuiz(quiz.id)}
                      className="w-full bg-indigo-500 hover:bg-indigo-600 text-white"
                      disabled={selectedQuiz === quiz.id}
                    >
                      {selectedQuiz === quiz.id ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Quiz Started
                        </>
                      ) : (
                        "Start Quiz"
                      )}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg mt-12 p-6 border border-slate-200/70 dark:border-slate-700/50">
            <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">
              Why Daily Quizzes Matter
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Regular quizzing has been proven to improve knowledge retention by up to 50%. 
              Our daily quizzes are designed to take just a few minutes but provide significant learning benefits.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="font-medium text-lg text-slate-800 dark:text-slate-200 mb-1">Retention</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Improves memory retention through active recall
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="font-medium text-lg text-slate-800 dark:text-slate-200 mb-1">Spacing</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Optimal spaced repetition based on your learning patterns
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="font-medium text-lg text-slate-800 dark:text-slate-200 mb-1">Personalized</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Tailored to your course progress and learning needs
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DailyQuiz;
