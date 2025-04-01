
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { CourseProgress } from "@/components/dashboard/CourseProgress";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Recommendations } from "@/components/dashboard/Recommendations";
import { Button } from "@/components/ui/button";
import { BookOpen, MessageSquare, BrainCircuit, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AIAssistant } from "@/components/ai/AIAssistant";

const courses = [
  {
    id: "course-1",
    title: "Introduction to Computer Science",
    progress: 65,
    lastActivity: "2 days ago",
    totalModules: 12,
    completedModules: 8,
  },
  {
    id: "course-2",
    title: "Calculus for Engineers",
    progress: 40,
    lastActivity: "Yesterday",
    totalModules: 10,
    completedModules: 4,
  },
  {
    id: "course-3",
    title: "Web Development Fundamentals",
    progress: 90,
    lastActivity: "5 hours ago",
    totalModules: 8,
    completedModules: 7,
  },
];

const activities = [
  {
    id: "activity-1",
    type: "course" as const,
    title: "Completed Module 7",
    timestamp: "2 hours ago",
    description: "Web Development Fundamentals - Responsive Design Module",
  },
  {
    id: "activity-2",
    type: "quiz" as const,
    title: "Passed Quiz",
    timestamp: "Yesterday",
    description: "Introduction to Computer Science - Data Structures Quiz",
  },
  {
    id: "activity-3",
    type: "forum" as const,
    title: "Posted in Forum",
    timestamp: "2 days ago",
    description: "Replied to thread 'Understanding Calculus Derivatives'",
  },
  {
    id: "activity-4",
    type: "achievement" as const,
    title: "Earned Badge",
    timestamp: "3 days ago",
    description: "Earned 'Quick Learner' badge for completing 5 quizzes",
  },
];

const recommendations = [
  {
    id: "rec-1",
    type: "course" as const,
    title: "Advanced Data Structures",
    description: "Learn advanced data structures to level up your programming skills.",
    link: "/courses/advanced-data-structures",
  },
  {
    id: "rec-2",
    type: "article" as const,
    title: "The Fundamentals of Linear Algebra",
    description: "A comprehensive introduction to vectors, matrices, and transformations.",
    link: "/knowledge-hub/linear-algebra-fundamentals",
  },
  {
    id: "rec-3",
    type: "video" as const,
    title: "Understanding Quantum Computing",
    description: "An approachable introduction to quantum computing concepts.",
    link: "/videos/quantum-computing-intro",
  },
  {
    id: "rec-4",
    type: "quiz" as const,
    title: "Test Your Web Development Knowledge",
    description: "Challenge yourself with this intermediate level web development quiz.",
    link: "/quizzes/web-development-intermediate",
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);

  const handleTakeQuiz = () => {
    navigate("/daily-quiz");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Welcome Header */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 py-10">
          <div className="container">
            <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
              <div>
                <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">Welcome back, Alex!</h1>
                <p className="mt-1 text-slate-600 dark:text-slate-400">Continue your learning journey.</p>
              </div>
              <div className="flex space-x-3">
                <Button 
                  variant="secondary" 
                  className="group bg-white/70 dark:bg-white/10 hover:bg-white/90 dark:hover:bg-white/20 backdrop-blur-sm"
                  onClick={() => setIsAIAssistantOpen(true)}
                >
                  <MessageSquare className="mr-2 h-4 w-4 text-indigo-500" />
                  Ask AI Assistant
                </Button>
                <Button 
                  className="group bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-500 hover:to-purple-500 text-white"
                  onClick={handleTakeQuiz}
                >
                  <BrainCircuit className="mr-2 h-4 w-4" />
                  Take a Quiz
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="container py-8">
          <DashboardOverview />
          
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <CourseProgress courses={courses} />
            <RecentActivity activities={activities} />
          </div>

          <div className="mt-8">
            <Recommendations items={recommendations} />
          </div>

          {/* Learning Feed */}
          <div className="mt-8 dashboard-card bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/70 shadow-sm border-slate-200/70 dark:border-slate-700/50">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Daily Learning Feed</h2>
              <Button variant="outline" size="sm" className="text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
                View All
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="rounded-lg border border-slate-200/70 dark:border-slate-700/50 p-4 bg-white/80 dark:bg-slate-800/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-2 flex items-center space-x-2">
                    <div className="rounded-full bg-blue-100 dark:bg-blue-900/40 p-1.5">
                      <BookOpen className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                    </div>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">ARTICLE</span>
                  </div>
                  <h3 className="mb-1 font-medium text-slate-800 dark:text-slate-200">Machine Learning Algorithms Explained</h3>
                  <p className="mb-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    A comprehensive guide to understanding different ML algorithms and their applications.
                  </p>
                  <a href="#" className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* AI Assistant Dialog */}
      <Dialog open={isAIAssistantOpen} onOpenChange={setIsAIAssistantOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5 text-indigo-500" /> 
              AI Learning Assistant
            </DialogTitle>
            <DialogDescription>
              Ask me anything about your courses or for learning recommendations.
            </DialogDescription>
          </DialogHeader>
          <AIAssistant />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
