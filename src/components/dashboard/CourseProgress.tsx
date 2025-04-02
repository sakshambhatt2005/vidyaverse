
import { BookOpen, CheckCircle, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface CourseProgressProps {
  courses: {
    id: string;
    title: string;
    progress: number;
    lastActivity: string;
    totalModules: number;
    completedModules: number;
  }[];
  onCourseClick?: (courseId: string) => void;
}

export function CourseProgress({ courses, onCourseClick }: CourseProgressProps) {
  return (
    <div className="rounded-xl bg-white dark:bg-slate-800/60 shadow-md border border-slate-200/70 dark:border-slate-700/50 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Course Progress</h2>
        <a href="/courses" className="text-sm text-primary hover:underline">
          View all courses
        </a>
      </div>
      <div className="space-y-4">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="rounded-lg border border-slate-200/70 dark:border-slate-700/30 p-4 hover:shadow-md transition-all duration-300 hover:border-primary/30 cursor-pointer bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
            onClick={() => onCourseClick && onCourseClick(course.id)}
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-medium text-slate-800 dark:text-slate-200">{course.title}</h3>
              <span className="text-sm font-medium text-primary">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2 mb-3" />
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center">
                <CheckCircle className="mr-1 h-3.5 w-3.5 text-green-500" />
                <span>
                  {course.completedModules}/{course.totalModules} modules
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-3.5 w-3.5 text-slate-400" />
                <span>Last activity: {course.lastActivity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
