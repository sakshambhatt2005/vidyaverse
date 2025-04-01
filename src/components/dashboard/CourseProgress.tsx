
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
}

export function CourseProgress({ courses }: CourseProgressProps) {
  return (
    <div className="dashboard-card">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Course Progress</h2>
        <a href="/courses" className="text-sm text-primary hover:underline">
          View all courses
        </a>
      </div>
      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="rounded-lg border p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-medium">{course.title}</h3>
              <span className="text-sm text-muted-foreground">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2 mb-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="mr-1 h-3.5 w-3.5" />
                <span>
                  {course.completedModules}/{course.totalModules} modules
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-3.5 w-3.5" />
                <span>Last activity: {course.lastActivity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
