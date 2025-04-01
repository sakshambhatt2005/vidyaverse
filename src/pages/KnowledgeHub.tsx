
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  FileText, 
  Filter, 
  Link2, 
  Search, 
  BookmarkPlus, 
  Share2,
  ExternalLink 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const resources = [
  {
    id: "res1",
    title: "The Art of Computer Programming",
    type: "Book",
    author: "Donald E. Knuth",
    description: "A comprehensive monograph written by Donald Knuth that covers many kinds of programming algorithms and their analysis.",
    topics: ["Algorithms", "Computer Science", "Programming"],
    link: "#",
  },
  {
    id: "res2",
    title: "Introduction to Linear Algebra",
    type: "Book",
    author: "Gilbert Strang",
    description: "A classic textbook on linear algebra that provides a solid foundation for understanding matrices, vectors, and linear transformations.",
    topics: ["Mathematics", "Linear Algebra", "Vector Spaces"],
    link: "#",
  },
  {
    id: "res3",
    title: "Understanding Deep Learning Architectures",
    type: "Article",
    author: "Andrew Ng",
    description: "A comprehensive overview of modern deep learning architectures, including CNNs, RNNs, and Transformers.",
    topics: ["Artificial Intelligence", "Deep Learning", "Neural Networks"],
    link: "#",
  },
  {
    id: "res4",
    title: "The Feynman Lectures on Physics",
    type: "External Resource",
    author: "Richard Feynman",
    description: "A physics textbook based on lectures by Richard Feynman for undergraduate students at Caltech.",
    topics: ["Physics", "Quantum Mechanics", "Electromagnetism"],
    link: "#",
  },
  {
    id: "res5",
    title: "Modern JavaScript for the Impatient",
    type: "Book",
    author: "Cay S. Horstmann",
    description: "A concise introduction to JavaScript for experienced programmers, covering ES6 and beyond.",
    topics: ["Web Development", "JavaScript", "Programming"],
    link: "#",
  },
  {
    id: "res6",
    title: "Quantum Computing for Beginners",
    type: "Article",
    author: "Michelle Simmons",
    description: "An approachable introduction to quantum computing concepts for those with a basic understanding of computer science.",
    topics: ["Quantum Computing", "Computer Science", "Physics"],
    link: "#",
  },
];

const allTopics = Array.from(
  new Set(resources.flatMap((resource) => resource.topics))
).sort();

const resourceTypes = ["All Types", "Book", "Article", "External Resource"];

const KnowledgeHub = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const filteredResources = resources.filter((resource) => {
    // Match search query
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchQuery.toLowerCase());

    // Match resource type
    const matchesType =
      selectedType === "All Types" || resource.type === selectedType;

    // Match selected topics (if any are selected)
    const matchesTopics =
      selectedTopics.length === 0 ||
      selectedTopics.some((topic) => resource.topics.includes(topic));

    return matchesSearch && matchesType && matchesTopics;
  });

  const getIconForType = (type: string) => {
    switch (type) {
      case "Book":
        return <BookOpen className="h-5 w-5 text-blue-500" />;
      case "Article":
        return <FileText className="h-5 w-5 text-purple-500" />;
      case "External Resource":
        return <Link2 className="h-5 w-5 text-amber-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="hero-gradient py-12 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold mb-4">Knowledge Hub</h1>
              <p className="text-lg opacity-90 mb-8">
                Explore our curated collection of learning resources to enhance your studies
              </p>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search books, articles, and resources..."
                  className="bg-white/10 border-white/20 pl-10 text-white placeholder:text-white/60"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="container py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Filters Sidebar */}
            <div className="md:col-span-1">
              <div className="rounded-xl border p-6 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <Filter className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Resource Type</h3>
                  <div className="space-y-2">
                    {resourceTypes.map((type) => (
                      <div
                        key={type}
                        className="flex items-center"
                      >
                        <Button
                          variant={selectedType === type ? "default" : "outline"}
                          size="sm"
                          className="w-full justify-start text-sm"
                          onClick={() => setSelectedType(type)}
                        >
                          {type}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTopics.map((topic) => (
                      <Badge
                        key={topic}
                        variant={selectedTopics.includes(topic) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => toggleTopic(topic)}
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setSelectedType("All Types");
                      setSelectedTopics([]);
                      setSearchQuery("");
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Resource Grid */}
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold mb-6">
                {filteredResources.length} Resources Available
              </h2>

              {filteredResources.length > 0 ? (
                <div className="space-y-4">
                  {filteredResources.map((resource) => (
                    <div
                      key={resource.id}
                      className="card-hover rounded-xl border bg-card p-6"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 rounded-full bg-muted p-2">
                            {getIconForType(resource.type)}
                          </div>
                          <div>
                            <span className="text-xs font-semibold uppercase text-muted-foreground">
                              {resource.type}
                            </span>
                            <h3 className="text-xl font-semibold">{resource.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              By {resource.author}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon">
                            <BookmarkPlus className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="mt-4 text-sm">{resource.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {resource.topics.map((topic) => (
                          <Badge key={topic} variant="secondary">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t flex justify-end">
                        <Button asChild>
                          <a href={resource.link}>
                            Access Resource
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Search className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-2">No resources found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedType("All Types");
                      setSelectedTopics([]);
                      setSearchQuery("");
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KnowledgeHub;
