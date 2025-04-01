
import { BookOpen, Clock, Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
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

export function CourseCard({
  id,
  title,
  description,
  category,
  instructor,
  duration,
  studentsCount,
  rating,
  image,
}: CourseCardProps) {
  return (
    <div className="card-hover group relative overflow-hidden rounded-xl border bg-card">
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute left-3 top-3" variant="secondary">
          {category}
        </Badge>
      </div>
      <div className="p-5">
        <h3 className="mb-1 text-xl font-semibold">{title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
        <div className="mb-3 flex items-center text-sm text-muted-foreground">
          <BookOpen className="mr-1 h-4 w-4" />
          <span className="mr-3">{instructor}</span>
          <Clock className="mr-1 h-4 w-4" />
          <span>{duration}</span>
        </div>
        <div className="flex justify-between border-t pt-3">
          <div className="flex items-center text-sm">
            <Users className="mr-1 h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{studentsCount} students</span>
          </div>
          <div className="flex items-center text-sm">
            <Star className="mr-1 h-4 w-4 text-amber-500" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
