
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchIcon } from "lucide-react";

const courseData = [
  {
    id: "cs101",
    title: "Introduction to Computer Science",
    description: "Learn the fundamentals of computer science including algorithms, data structures, and computational thinking.",
    category: "Computer Science",
    instructor: "Dr. Alan Turing",
    duration: "8 weeks",
    studentsCount: 3420,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "math201",
    title: "Advanced Calculus",
    description: "Explore complex calculus concepts, including multivariable calculus, vector calculus, and differential equations.",
    category: "Mathematics",
    instructor: "Dr. Katherine Johnson",
    duration: "10 weeks",
    studentsCount: 2150,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "phys101",
    title: "Physics Fundamentals",
    description: "Master the basic principles of physics, from mechanics to thermodynamics and electromagnetism.",
    category: "Physics",
    instructor: "Dr. Richard Feynman",
    duration: "12 weeks",
    studentsCount: 2840,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1374&auto=format&fit=crop",
  },
  {
    id: "web101",
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript to build modern, responsive websites from scratch.",
    category: "Web Development",
    instructor: "Sarah Chen",
    duration: "6 weeks",
    studentsCount: 5120,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1374&auto=format&fit=crop",
  },
  {
    id: "ai101",
    title: "Artificial Intelligence Basics",
    description: "Introduction to AI concepts, machine learning algorithms, and neural networks.",
    category: "Computer Science",
    instructor: "Dr. Geoffrey Hinton",
    duration: "8 weeks",
    studentsCount: 4250,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1365&auto=format&fit=crop",
  },
  {
    id: "stats101",
    title: "Statistics for Data Science",
    description: "Learn statistical methods and tools essential for data analysis and interpretation.",
    category: "Mathematics",
    instructor: "Dr. Florence Nightingale",
    duration: "7 weeks",
    studentsCount: 3180,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
  },
];

const categories = [
  "All Categories",
  "Computer Science",
  "Mathematics",
  "Physics",
  "Web Development",
];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const filteredCourses = courseData.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "All Categories" || course.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="hero-gradient py-12 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold mb-4">Discover Courses</h1>
              <p className="text-lg opacity-90 mb-8">
                Explore our comprehensive library of courses designed to enhance your knowledge and skills
              </p>
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for courses..."
                  className="bg-white/10 border-white/20 pl-10 text-white placeholder:text-white/60"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Course Listing */}
        <section className="container py-12">
          <Tabs defaultValue="All Categories" className="mb-8">
            <TabsList className="mb-4">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                {activeCategory === "All Categories" ? "All Courses" : activeCategory}
              </h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Popular
                </Button>
                <Button variant="outline" size="sm">
                  Recent
                </Button>
                <Button variant="outline" size="sm">
                  Free
                </Button>
              </div>
            </div>
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <CourseGrid
                  courses={
                    category === "All Categories"
                      ? filteredCourses
                      : filteredCourses.filter((course) => course.category === category)
                  }
                />
              </TabsContent>
            ))}
          </Tabs>
          
          {filteredCourses.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
              <p className="text-center text-muted-foreground mb-4">
                No courses found matching your search criteria.
              </p>
              <Button onClick={() => { setSearchQuery(""); setActiveCategory("All Categories"); }}>
                Clear filters
              </Button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
