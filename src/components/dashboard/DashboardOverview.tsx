
import { Award, BookOpen, BrainCircuit, MessageCircle } from "lucide-react";

export function DashboardOverview() {
  const stats = [
    {
      title: "Enrolled Courses",
      value: "6",
      icon: <BookOpen className="h-5 w-5 text-blue-500" />,
      change: "+2 this month",
      positive: true,
      bgClass: "from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10",
    },
    {
      title: "Quizzes Completed",
      value: "24",
      icon: <BrainCircuit className="h-5 w-5 text-green-500" />,
      change: "+7 this week",
      positive: true,
      bgClass: "from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10",
    },
    {
      title: "Forum Activity",
      value: "12",
      icon: <MessageCircle className="h-5 w-5 text-purple-500" />,
      change: "+5 this week",
      positive: true,
      bgClass: "from-purple-50 to-fuchsia-50 dark:from-purple-900/10 dark:to-fuchsia-900/10",
    },
    {
      title: "Achievements",
      value: "8",
      icon: <Award className="h-5 w-5 text-amber-500" />,
      change: "+1 this month",
      positive: true,
      bgClass: "from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10",
    },
  ];

  return (
    <>
      {stats.map((stat) => (
        <div 
          key={stat.title} 
          className={`rounded-xl bg-gradient-to-br ${stat.bgClass} shadow-md border border-slate-200/70 dark:border-slate-700/30 p-6`}
        >
          <div className="flex items-center justify-between">
            <div className="rounded-full bg-white dark:bg-slate-800 p-2 shadow-sm">{stat.icon}</div>
            <span
              className={`text-xs font-medium ${
                stat.positive ? "text-green-500" : "text-red-500"
              }`}
            >
              {stat.change}
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{stat.value}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{stat.title}</p>
          </div>
        </div>
      ))}
    </>
  );
}
