
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Search,
  Plus,
  ThumbsUp,
  MessageCircle,
  Eye,
  Clock,
  BookOpen,
  User,
  ArrowUpRight,
} from "lucide-react";

interface ForumThread {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  replies: number;
  views: number;
  likes: number;
  lastActivity: string;
  featured?: boolean;
  solved?: boolean;
}

const threads: ForumThread[] = [
  {
    id: "thread1",
    title: "How to understand the time complexity of recursive algorithms?",
    author: {
      name: "AlexC",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    category: "Computer Science",
    tags: ["Algorithms", "Recursion", "Time Complexity"],
    replies: 8,
    views: 245,
    likes: 32,
    lastActivity: "2 hours ago",
    featured: true,
    solved: true,
  },
  {
    id: "thread2",
    title: "Solving differential equations with boundary conditions",
    author: {
      name: "MathProf",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    category: "Mathematics",
    tags: ["Calculus", "Differential Equations"],
    replies: 5,
    views: 127,
    likes: 18,
    lastActivity: "5 hours ago",
  },
  {
    id: "thread3",
    title: "Best practices for React component architecture",
    author: {
      name: "DevGuru",
      avatar: "https://i.pravatar.cc/150?img=13",
    },
    category: "Web Development",
    tags: ["React", "Frontend", "Architecture"],
    replies: 12,
    views: 310,
    likes: 45,
    lastActivity: "1 day ago",
    solved: true,
  },
  {
    id: "thread4",
    title: "Understanding quantum entanglement in simple terms",
    author: {
      name: "QuantumSeeker",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
    category: "Physics",
    tags: ["Quantum Physics", "Entanglement"],
    replies: 7,
    views: 198,
    likes: 26,
    lastActivity: "2 days ago",
    featured: true,
  },
  {
    id: "thread5",
    title: "How to implement K-means clustering from scratch?",
    author: {
      name: "DataScientist",
      avatar: "https://i.pravatar.cc/150?img=15",
    },
    category: "Artificial Intelligence",
    tags: ["Machine Learning", "Clustering", "Algorithms"],
    replies: 9,
    views: 215,
    likes: 33,
    lastActivity: "3 days ago",
  },
  {
    id: "thread6",
    title: "Strategies for effective exam preparation",
    author: {
      name: "StudyMaster",
      avatar: "https://i.pravatar.cc/150?img=16",
    },
    category: "Study Tips",
    tags: ["Exams", "Productivity", "Memory"],
    replies: 15,
    views: 420,
    likes: 67,
    lastActivity: "1 week ago",
    solved: true,
  },
];

const categories = [
  "All Categories",
  "Computer Science",
  "Mathematics",
  "Physics",
  "Web Development",
  "Artificial Intelligence",
  "Study Tips",
];

const Forum = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [activeTab, setActiveTab] = useState("all");

  const filteredThreads = threads.filter((thread) => {
    // Match search query
    const matchesSearch =
      thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thread.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    // Match category
    const matchesCategory =
      activeCategory === "All Categories" || thread.category === activeCategory;

    // Match tab
    if (activeTab === "featured" && !thread.featured) return false;
    if (activeTab === "solved" && !thread.solved) return false;

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
              <h1 className="text-4xl font-bold mb-4">Student Forum</h1>
              <p className="text-lg opacity-90 mb-6">
                Join the conversation, ask questions, and share your knowledge
                with peers
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <div className="relative w-full sm:w-96">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search discussions..."
                    className="bg-white/10 border-white/20 pl-10 text-white placeholder:text-white/60 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                  <Plus className="mr-2 h-4 w-4" />
                  New Discussion
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Forum Content */}
        <section className="container py-8">
          <Tabs
            defaultValue="all"
            className="mb-8"
            onValueChange={(value) => setActiveTab(value)}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
              <TabsList>
                <TabsTrigger value="all">All Discussions</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="solved">Solved</TabsTrigger>
              </TabsList>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={
                      activeCategory === category ? "default" : "outline"
                    }
                    className="cursor-pointer"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="space-y-4">
                {filteredThreads.length > 0 ? (
                  filteredThreads.map((thread) => (
                    <div
                      key={thread.id}
                      className="card-hover rounded-xl border bg-card p-6"
                    >
                      <div className="flex items-start">
                        <div className="mr-4 hidden sm:block">
                          <div className="h-10 w-10 overflow-hidden rounded-full">
                            <img
                              src={thread.author.avatar}
                              alt={thread.author.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Badge variant="outline">{thread.category}</Badge>
                            {thread.featured && (
                              <Badge variant="secondary">Featured</Badge>
                            )}
                            {thread.solved && (
                              <Badge className="bg-green-500">Solved</Badge>
                            )}
                          </div>
                          <a
                            href={`/forum/${thread.id}`}
                            className="group flex items-start"
                          >
                            <h3 className="text-xl font-semibold group-hover:text-primary group-hover:underline">
                              {thread.title}
                            </h3>
                            <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                          </a>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {thread.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <User className="mr-1 h-4 w-4" />
                              <span>{thread.author.name}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>{thread.lastActivity}</span>
                            </div>
                            <div className="flex items-center">
                              <MessageCircle className="mr-1 h-4 w-4" />
                              <span>{thread.replies} replies</span>
                            </div>
                            <div className="flex items-center">
                              <Eye className="mr-1 h-4 w-4" />
                              <span>{thread.views} views</span>
                            </div>
                            <div className="flex items-center">
                              <ThumbsUp className="mr-1 h-4 w-4" />
                              <span>{thread.likes} likes</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-medium mb-2">
                      No discussions found
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search or category filters.
                    </p>
                    <Button
                      onClick={() => {
                        setActiveCategory("All Categories");
                        setSearchQuery("");
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="featured" className="mt-0">
              <div className="space-y-4">
                {filteredThreads.length > 0 ? (
                  filteredThreads.map((thread) => (
                    <div
                      key={thread.id}
                      className="card-hover rounded-xl border bg-card p-6"
                    >
                      <div className="flex items-start">
                        <div className="mr-4 hidden sm:block">
                          <div className="h-10 w-10 overflow-hidden rounded-full">
                            <img
                              src={thread.author.avatar}
                              alt={thread.author.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Badge variant="outline">{thread.category}</Badge>
                            {thread.featured && (
                              <Badge variant="secondary">Featured</Badge>
                            )}
                            {thread.solved && (
                              <Badge className="bg-green-500">Solved</Badge>
                            )}
                          </div>
                          <a
                            href={`/forum/${thread.id}`}
                            className="group flex items-start"
                          >
                            <h3 className="text-xl font-semibold group-hover:text-primary group-hover:underline">
                              {thread.title}
                            </h3>
                            <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                          </a>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {thread.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <User className="mr-1 h-4 w-4" />
                              <span>{thread.author.name}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>{thread.lastActivity}</span>
                            </div>
                            <div className="flex items-center">
                              <MessageCircle className="mr-1 h-4 w-4" />
                              <span>{thread.replies} replies</span>
                            </div>
                            <div className="flex items-center">
                              <Eye className="mr-1 h-4 w-4" />
                              <span>{thread.views} views</span>
                            </div>
                            <div className="flex items-center">
                              <ThumbsUp className="mr-1 h-4 w-4" />
                              <span>{thread.likes} likes</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-medium mb-2">
                      No featured discussions found
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search or category filters.
                    </p>
                    <Button
                      onClick={() => {
                        setActiveCategory("All Categories");
                        setSearchQuery("");
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="solved" className="mt-0">
              <div className="space-y-4">
                {filteredThreads.length > 0 ? (
                  filteredThreads.map((thread) => (
                    <div
                      key={thread.id}
                      className="card-hover rounded-xl border bg-card p-6"
                    >
                      <div className="flex items-start">
                        <div className="mr-4 hidden sm:block">
                          <div className="h-10 w-10 overflow-hidden rounded-full">
                            <img
                              src={thread.author.avatar}
                              alt={thread.author.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Badge variant="outline">{thread.category}</Badge>
                            {thread.featured && (
                              <Badge variant="secondary">Featured</Badge>
                            )}
                            {thread.solved && (
                              <Badge className="bg-green-500">Solved</Badge>
                            )}
                          </div>
                          <a
                            href={`/forum/${thread.id}`}
                            className="group flex items-start"
                          >
                            <h3 className="text-xl font-semibold group-hover:text-primary group-hover:underline">
                              {thread.title}
                            </h3>
                            <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                          </a>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {thread.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <User className="mr-1 h-4 w-4" />
                              <span>{thread.author.name}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>{thread.lastActivity}</span>
                            </div>
                            <div className="flex items-center">
                              <MessageCircle className="mr-1 h-4 w-4" />
                              <span>{thread.replies} replies</span>
                            </div>
                            <div className="flex items-center">
                              <Eye className="mr-1 h-4 w-4" />
                              <span>{thread.views} views</span>
                            </div>
                            <div className="flex items-center">
                              <ThumbsUp className="mr-1 h-4 w-4" />
                              <span>{thread.likes} likes</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-medium mb-2">
                      No solved discussions found
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search or category filters.
                    </p>
                    <Button
                      onClick={() => {
                        setActiveCategory("All Categories");
                        setSearchQuery("");
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Forum;
