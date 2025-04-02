
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, CheckCircle, ChevronLeft, Clock, Star, Users, Video } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const courseData = {
  "course-1": {
    id: "course-1",
    title: "Introduction to Computer Science",
    description: "A comprehensive introduction to the fundamental concepts of computer science, including algorithms, data structures, and computational thinking.",
    instructor: "Dr. Sarah Johnson",
    rating: 4.8,
    students: 2453,
    duration: "10 weeks",
    level: "Beginner",
    image: "https://plus.unsplash.com/premium_photo-1682141778831-41a7899366a7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    topics: ["Algorithms", "Data Structures", "Programming Fundamentals", "Computational Thinking"],
    modules: [
      { id: 1, title: "Introduction to Computing", status: "completed" },
      { id: 2, title: "Algorithms and Problem Solving", status: "completed" },
      { id: 3, title: "Data Types and Variables", status: "completed" },
      { id: 4, title: "Control Structures", status: "completed" },
      { id: 5, title: "Functions and Procedures", status: "completed" },
      { id: 6, title: "Arrays and Lists", status: "completed" },
      { id: 7, title: "Object-Oriented Programming", status: "completed" },
      { id: 8, title: "Recursion", status: "completed" },
      { id: 9, title: "Searching and Sorting Algorithms", status: "in-progress" },
      { id: 10, title: "Basic Data Structures", status: "locked" },
      { id: 11, title: "File Processing", status: "locked" },
      { id: 12, title: "Introduction to Databases", status: "locked" },
    ]
  },
  "course-2": {
    id: "course-2",
    title: "Calculus for Engineers",
    description: "Learn essential calculus concepts that are crucial for engineering applications, including differentiation, integration, and differential equations.",
    instructor: "Prof. Michael Chen",
    rating: 4.6,
    students: 1872,
    duration: "12 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1580894908361-967195033215?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbGN1bHVzfGVufDB8fDB8fHww",
    topics: ["Limits and Continuity", "Derivatives", "Integrals", "Differential Equations"],
    modules: [
      { id: 1, title: "Introduction to Calculus", status: "completed" },
      { id: 2, title: "Limits and Continuity", status: "completed" },
      { id: 3, title: "Derivatives and Differentiation", status: "completed" },
      { id: 4, title: "Applications of Derivatives", status: "completed" },
      { id: 5, title: "Integration Techniques", status: "in-progress" },
      { id: 6, title: "Applications of Integration", status: "locked" },
      { id: 7, title: "Sequences and Series", status: "locked" },
      { id: 8, title: "Multivariable Calculus", status: "locked" },
      { id: 9, title: "Vector Calculus", status: "locked" },
      { id: 10, title: "Differential Equations", status: "locked" },
    ]
  },
  "course-3": {
    id: "course-3",
    title: "Web Development Fundamentals",
    description: "Master the essential technologies of modern web development including HTML, CSS, JavaScript, and responsive design principles.",
    instructor: "Emma Rodriguez",
    rating: 4.9,
    students: 3241,
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    topics: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Accessibility"],
    modules: [
      { id: 1, title: "Introduction to Web Development", status: "completed" },
      { id: 2, title: "HTML Fundamentals", status: "completed" },
      { id: 3, title: "CSS Basics", status: "completed" },
      { id: 4, title: "CSS Layout Techniques", status: "completed" },
      { id: 5, title: "Introduction to JavaScript", status: "completed" },
      { id: 6, title: "DOM Manipulation", status: "completed" },
      { id: 7, title: "Responsive Web Design", status: "completed" },
      { id: 8, title: "Web Accessibility", status: "in-progress" },
    ]
  }
};

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [enrollmentStatus, setEnrollmentStatus] = useState<"not-enrolled" | "enrolled" | "in-progress">(
    // If we already have the course in our progress, set as in-progress
    courseId && ["course-1", "course-2", "course-3"].includes(courseId) ? "in-progress" : "not-enrolled"
  );
  
  // Fallback if course is not found
  const course = courseId && courseData[courseId as keyof typeof courseData] 
    ? courseData[courseId as keyof typeof courseData]
    : courseData["course-1"];
    
  const handleEnroll = () => {
    toast({
      title: "Successfully enrolled!",
      description: `You are now enrolled in ${course.title}`,
    });
    setEnrollmentStatus("enrolled");
  };
  
  const handleContinue = () => {
    // Find the first module that's in progress
    const inProgressModule = course.modules.find(m => m.status === "in-progress");
    if (inProgressModule) {
      toast({
        title: "Continuing your progress",
        description: `Loading module: ${inProgressModule.title}`,
      });
    } else {
      toast({
        title: "Starting your journey",
        description: "Loading the first module",
      });
    }
  };
  
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/40 dark:to-slate-900">
        {/* Course Header */}
        <div 
          className="relative h-64 md:h-80 w-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${course.image})` }}
        >
          <div className="absolute inset-0 bg-black/60">
            <div className="container max-w-6xl mx-auto px-4 h-full flex flex-col justify-end pb-8">
              <Button 
                variant="ghost" 
                className="absolute top-4 left-4 text-white hover:bg-white/10 w-auto p-2"
                onClick={handleGoBack}
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back
              </Button>
              <div className="text-white">
                <h1 className="text-3xl font-bold">{course.title}</h1>
                <div className="flex items-center mt-2 space-x-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-blue-400 mr-1" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-green-400 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <p className="mt-3 max-w-3xl text-slate-200">{course.description}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Content */}
        <div className="container max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Tabs defaultValue="modules">
                <TabsList className="mb-4">
                  <TabsTrigger value="modules">Modules</TabsTrigger>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="discussions">Discussions</TabsTrigger>
                </TabsList>
                
                <TabsContent value="modules" className="space-y-4">
                  <div className="rounded-xl bg-white dark:bg-slate-800/60 shadow-md border border-slate-200/70 dark:border-slate-700/50 p-6">
                    <h2 className="text-xl font-semibold mb-4">Course Modules</h2>
                    <div className="space-y-3">
                      {course.modules.map((module) => (
                        <div 
                          key={module.id}
                          className={`rounded-lg border p-4 flex items-center justify-between ${
                            module.status === "locked" 
                              ? "opacity-60 bg-slate-100 dark:bg-slate-800/30" 
                              : "bg-white dark:bg-slate-800/50 hover:shadow-sm cursor-pointer"
                          }`}
                        >
                          <div className="flex items-center">
                            {module.status === "completed" ? (
                              <div className="rounded-full bg-green-100 dark:bg-green-900/20 p-1 mr-3">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              </div>
                            ) : module.status === "in-progress" ? (
                              <div className="rounded-full bg-blue-100 dark:bg-blue-900/20 p-1 mr-3">
                                <BookOpen className="h-5 w-5 text-blue-500" />
                              </div>
                            ) : (
                              <div className="rounded-full bg-slate-100 dark:bg-slate-700 p-1 mr-3">
                                <Video className="h-5 w-5 text-slate-400" />
                              </div>
                            )}
                            <span className="font-medium">
                              Module {module.id}: {module.title}
                            </span>
                          </div>
                          {module.status === "in-progress" && (
                            <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                              In Progress
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="overview">
                  <div className="rounded-xl bg-white dark:bg-slate-800/60 shadow-md border border-slate-200/70 dark:border-slate-700/50 p-6">
                    <h2 className="text-xl font-semibold mb-4">Course Overview</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium mb-2">About this Course</h3>
                        <p className="text-slate-600 dark:text-slate-300">{course.description}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">What you'll learn</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {course.topics.map((topic, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-slate-600 dark:text-slate-300">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Instructor</h3>
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mr-3">
                            <span className="text-xl font-bold">{course.instructor[0]}</span>
                          </div>
                          <div>
                            <p className="font-medium">{course.instructor}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Course Instructor</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="discussions">
                  <div className="rounded-xl bg-white dark:bg-slate-800/60 shadow-md border border-slate-200/70 dark:border-slate-700/50 p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Course Discussions</h2>
                      <Button onClick={() => navigate('/forum')}>
                        New Discussion
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                      <div className="rounded-full bg-slate-100 dark:bg-slate-700 p-3 mb-4">
                        <MessageCircle className="h-8 w-8 text-slate-400" />
                      </div>
                      <h3 className="text-lg font-medium mb-1">Join the conversation</h3>
                      <p className="text-slate-500 dark:text-slate-400 mb-4 max-w-md">
                        Engage with your instructor and peers to enhance your learning experience.
                      </p>
                      <Button variant="outline" onClick={() => navigate('/forum')}>
                        Browse Discussions
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Enrollment Card */}
            <div className="md:col-span-1">
              <div className="rounded-xl bg-white dark:bg-slate-800/60 shadow-md border border-slate-200/70 dark:border-slate-700/50 p-6 sticky top-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{course.level} • {course.duration}</p>
                </div>
                
                {enrollmentStatus === "not-enrolled" ? (
                  <Button 
                    className="w-full mb-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                    onClick={handleEnroll}
                  >
                    Enroll Now
                  </Button>
                ) : (
                  <Button 
                    className="w-full mb-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                    onClick={handleContinue}
                  >
                    Continue Learning
                  </Button>
                )}
                
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
                  <h4 className="text-sm font-medium mb-2">This course includes:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <Video className="h-4 w-4 mr-2 text-slate-400" />
                      {course.modules.length} video lessons
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <BookOpen className="h-4 w-4 mr-2 text-slate-400" />
                      Supplementary resources
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <MessageCircle className="h-4 w-4 mr-2 text-slate-400" />
                      Community discussions
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="h-4 w-4 mr-2 text-slate-400" />
                      Certificate upon completion
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
