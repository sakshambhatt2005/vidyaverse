
import { useNavigate } from "react-router-dom";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturedCourses() {
  const navigate = useNavigate();
  
  const courses = [
    {
      id: "course-1",
      title: "Introduction to Computer Science",
      description: "Learn the fundamentals of computer science, algorithms, and programming concepts.",
      image: "/placeholder.svg",
      category: "Computer Science",
      level: "Beginner",
      duration: "8 weeks",
      students: 2453
    },
    {
      id: "course-2",
      title: "Web Development Fundamentals",
      description: "Master HTML, CSS, and JavaScript to build modern, responsive websites from scratch.",
      image: "/placeholder.svg",
      category: "Web Development",
      level: "Beginner",
      duration: "10 weeks",
      students: 3128
    },
    {
      id: "course-3",
      title: "Data Science Essentials",
      description: "Discover how to analyze data, create visualizations, and derive meaningful insights.",
      image: "/placeholder.svg",
      category: "Data Science",
      level: "Intermediate",
      duration: "12 weeks",
      students: 1846
    }
  ];

  const handleCourseClick = (courseId: string) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-slate-900 dark:text-white">
              Featured Courses
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 md:text-xl max-w-[600px]">
              Explore our most popular courses designed to help you achieve your learning goals.
            </p>
          </div>
          <Button 
            onClick={() => navigate('/courses')}
            variant="outline" 
            className="shrink-0 group"
          >
            View All Courses
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200 dark:border-slate-800"
              onClick={() => handleCourseClick(course.id)}
            >
              <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                  <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                    {course.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                    {course.level}
                  </span>
                </div>
                <CardTitle className="mt-2 text-xl">{course.title}</CardTitle>
                <CardDescription className="mt-1 line-clamp-2">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-end">
                <div className="text-indigo-600 dark:text-indigo-400 text-sm font-medium group-hover:underline flex items-center">
                  View Course
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
