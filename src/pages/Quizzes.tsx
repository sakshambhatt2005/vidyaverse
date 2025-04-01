
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Badge, 
  BrainCircuit, 
  BookOpen, 
  Clock, 
  BarChart3, 
  Trophy, 
  Zap,
  ThumbsUp,
  AlertCircle
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Quiz {
  id: string;
  title: string;
  course: string;
  difficulty: "Easy" | "Medium" | "Hard";
  questions: number;
  timeLimit: string;
  completed: boolean;
  score?: number;
  bestScore?: number;
}

const quizzes: Quiz[] = [
  {
    id: "q1",
    title: "Data Structures Basics",
    course: "Introduction to Computer Science",
    difficulty: "Easy",
    questions: 10,
    timeLimit: "15 min",
    completed: false,
  },
  {
    id: "q2",
    title: "Calculus Fundamentals",
    course: "Advanced Calculus",
    difficulty: "Medium",
    questions: 15,
    timeLimit: "25 min",
    completed: true,
    score: 80,
    bestScore: 85,
  },
  {
    id: "q3",
    title: "Newton's Laws of Motion",
    course: "Physics Fundamentals",
    difficulty: "Medium",
    questions: 12,
    timeLimit: "20 min",
    completed: true,
    score: 75,
    bestScore: 92,
  },
  {
    id: "q4",
    title: "HTML & CSS Mastery",
    course: "Web Development Fundamentals",
    difficulty: "Easy",
    questions: 20,
    timeLimit: "30 min",
    completed: false,
  },
  {
    id: "q5",
    title: "Neural Networks & Deep Learning",
    course: "Artificial Intelligence Basics",
    difficulty: "Hard",
    questions: 15,
    timeLimit: "30 min",
    completed: false,
  },
  {
    id: "q6",
    title: "Statistical Hypothesis Testing",
    course: "Statistics for Data Science",
    difficulty: "Hard",
    questions: 10,
    timeLimit: "25 min",
    completed: true,
    score: 90,
    bestScore: 90,
  },
];

const Quizzes = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredQuizzes = quizzes.filter((quiz) => {
    if (activeTab === "all") return true;
    if (activeTab === "completed") return quiz.completed;
    if (activeTab === "pending") return !quiz.completed;
    return true;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Medium":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
      case "Hard":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800/60 dark:text-gray-400";
    }
  };

  const stats = [
    {
      label: "Total Quizzes",
      value: quizzes.length,
      icon: <BrainCircuit className="h-5 w-5 text-blue-500" />,
    },
    {
      label: "Completed",
      value: quizzes.filter((q) => q.completed).length,
      icon: <ThumbsUp className="h-5 w-5 text-green-500" />,
    },
    {
      label: "Average Score",
      value: `${Math.round(
        quizzes
          .filter((q) => q.completed && q.score)
          .reduce((acc, q) => acc + (q.score || 0), 0) /
          quizzes.filter((q) => q.completed && q.score).length
      )}%`,
      icon: <BarChart3 className="h-5 w-5 text-purple-500" />,
    },
    {
      label: "Best Score",
      value: `${Math.max(
        ...quizzes
          .filter((q) => q.bestScore)
          .map((q) => q.bestScore || 0)
      )}%`,
      icon: <Trophy className="h-5 w-5 text-amber-500" />,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="hero-gradient py-12 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold mb-4">
                Test Your Knowledge
              </h1>
              <p className="text-lg opacity-90 mb-6">
                Challenge yourself with our AI-powered quizzes on various topics
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Zap className="mr-2 h-5 w-5" />
                Start a Random Quiz
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container py-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="dashboard-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="rounded-full bg-muted p-2">{stat.icon}</div>
                  </div>
                  <div className="mt-3">
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quiz Listing */}
        <section className="container py-8">
          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <div className="flex items-center justify-between mb-6">
              <TabsList>
                <TabsTrigger value="all">All Quizzes</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Sort by Course
                </Button>
                <Button variant="outline" size="sm">
                  Sort by Difficulty
                </Button>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredQuizzes.map((quiz) => (
                  <div
                    key={quiz.id}
                    className="card-hover rounded-xl border bg-card"
                  >
                    <div className="p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <BrainCircuit className="h-5 w-5 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">
                              {quiz.course}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold">{quiz.title}</h3>
                        </div>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getDifficultyColor(
                            quiz.difficulty
                          )}`}
                        >
                          {quiz.difficulty}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-4 text-sm">
                        <div className="flex items-center">
                          <AlertCircle className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span>{quiz.questions} questions</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span>{quiz.timeLimit}</span>
                        </div>
                      </div>

                      {quiz.completed ? (
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">
                              Your score: {quiz.score}%
                            </span>
                            <span className="text-xs text-muted-foreground">
                              Best: {quiz.bestScore}%
                            </span>
                          </div>
                          <Progress value={quiz.score} className="h-2" />
                        </div>
                      ) : null}

                      <div className="flex items-center justify-between">
                        <Button
                          variant={quiz.completed ? "outline" : "default"}
                          className="w-full"
                        >
                          {quiz.completed ? "Retake Quiz" : "Start Quiz"}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pending" className="mt-0">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredQuizzes.map((quiz) => (
                  <div
                    key={quiz.id}
                    className="card-hover rounded-xl border bg-card"
                  >
                    <div className="p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <BrainCircuit className="h-5 w-5 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">
                              {quiz.course}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold">{quiz.title}</h3>
                        </div>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getDifficultyColor(
                            quiz.difficulty
                          )}`}
                        >
                          {quiz.difficulty}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-4 text-sm">
                        <div className="flex items-center">
                          <AlertCircle className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span>{quiz.questions} questions</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span>{quiz.timeLimit}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Button className="w-full">Start Quiz</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="mt-0">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredQuizzes.map((quiz) => (
                  <div
                    key={quiz.id}
                    className="card-hover rounded-xl border bg-card"
                  >
                    <div className="p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <BrainCircuit className="h-5 w-5 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">
                              {quiz.course}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold">{quiz.title}</h3>
                        </div>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getDifficultyColor(
                            quiz.difficulty
                          )}`}
                        >
                          {quiz.difficulty}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-4 text-sm">
                        <div className="flex items-center">
                          <AlertCircle className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span>{quiz.questions} questions</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                          <span>{quiz.timeLimit}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">
                            Your score: {quiz.score}%
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Best: {quiz.bestScore}%
                          </span>
                        </div>
                        <Progress value={quiz.score} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between">
                        <Button variant="outline" className="w-full">
                          Retake Quiz
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quizzes;
