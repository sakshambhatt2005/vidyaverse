
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { CourseProgress } from "@/components/dashboard/CourseProgress";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Recommendations } from "@/components/dashboard/Recommendations";
import { Button } from "@/components/ui/button";
import { BookOpen, MessageSquare, BrainCircuit, ChevronRight } from "lucide-react";

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
    type: "course",
    title: "Completed Module 7",
    timestamp: "2 hours ago",
    description: "Web Development Fundamentals - Responsive Design Module",
  },
  {
    id: "activity-2",
    type: "quiz",
    title: "Passed Quiz",
    timestamp: "Yesterday",
    description: "Introduction to Computer Science - Data Structures Quiz",
  },
  {
    id: "activity-3",
    type: "forum",
    title: "Posted in Forum",
    timestamp: "2 days ago",
    description: "Replied to thread 'Understanding Calculus Derivatives'",
  },
  {
    id: "activity-4",
    type: "achievement",
    title: "Earned Badge",
    timestamp: "3 days ago",
    description: "Earned 'Quick Learner' badge for completing 5 quizzes",
  },
];

const recommendations = [
  {
    id: "rec-1",
    type: "course",
    title: "Advanced Data Structures",
    description: "Learn advanced data structures to level up your programming skills.",
    link: "/courses/advanced-data-structures",
  },
  {
    id: "rec-2",
    type: "article",
    title: "The Fundamentals of Linear Algebra",
    description: "A comprehensive introduction to vectors, matrices, and transformations.",
    link: "/knowledge-hub/linear-algebra-fundamentals",
  },
  {
    id: "rec-3",
    type: "video",
    title: "Understanding Quantum Computing",
    description: "An approachable introduction to quantum computing concepts.",
    link: "/videos/quantum-computing-intro",
  },
  {
    id: "rec-4",
    type: "quiz",
    title: "Test Your Web Development Knowledge",
    description: "Challenge yourself with this intermediate level web development quiz.",
    link: "/quizzes/web-development-intermediate",
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Welcome Header */}
        <section className="hero-gradient py-10 text-white">
          <div className="container">
            <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
              <div>
                <h1 className="text-3xl font-bold">Welcome back, Alex!</h1>
                <p className="mt-1 opacity-90">Continue your learning journey.</p>
              </div>
              <div className="flex space-x-3">
                <Button variant="secondary" className="group">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Ask AI Assistant
                </Button>
                <Button className="group bg-white/10 hover:bg-white/20">
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
          <div className="mt-8 dashboard-card">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Daily Learning Feed</h2>
              <Button variant="outline" size="sm" className="text-sm">
                View All
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center space-x-2">
                    <div className="rounded-full bg-muted p-1.5">
                      <BookOpen className="h-4 w-4 text-blue-500" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">ARTICLE</span>
                  </div>
                  <h3 className="mb-1 font-medium">Machine Learning Algorithms Explained</h3>
                  <p className="mb-2 text-sm text-muted-foreground line-clamp-2">
                    A comprehensive guide to understanding different ML algorithms and their applications.
                  </p>
                  <a href="#" className="text-xs font-medium text-primary hover:underline">
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
