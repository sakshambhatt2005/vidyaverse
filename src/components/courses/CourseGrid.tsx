
import { CourseCard } from "./CourseCard";

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  instructor: string;
  duration: string;
  studentsCount: number;
  rating: number;
  image: string;
}

interface CourseGridProps {
  courses: Course[];
}

export function CourseGrid({ courses }: CourseGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
}
