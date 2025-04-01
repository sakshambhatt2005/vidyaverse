
import { Award, BookOpen, BrainCircuit, MessageCircle } from "lucide-react";

export function DashboardOverview() {
  const stats = [
    {
      title: "Enrolled Courses",
      value: "6",
      icon: <BookOpen className="h-5 w-5 text-blue-500" />,
      change: "+2 this month",
      positive: true,
    },
    {
      title: "Quizzes Completed",
      value: "24",
      icon: <BrainCircuit className="h-5 w-5 text-green-500" />,
      change: "+7 this week",
      positive: true,
    },
    {
      title: "Forum Activity",
      value: "12",
      icon: <MessageCircle className="h-5 w-5 text-purple-500" />,
      change: "+5 this week",
      positive: true,
    },
    {
      title: "Achievements",
      value: "8",
      icon: <Award className="h-5 w-5 text-amber-500" />,
      change: "+1 this month",
      positive: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.title} className="dashboard-card">
          <div className="flex items-center justify-between">
            <div className="rounded-full bg-muted p-2">{stat.icon}</div>
            <span
              className={`text-xs font-medium ${
                stat.positive ? "text-green-500" : "text-red-500"
              }`}
            >
              {stat.change}
            </span>
          </div>
          <div className="mt-3">
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-sm text-muted-foreground">{stat.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
