
import { Link } from "react-router-dom";
import { BookOpen, Facebook, Github, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">VidyaVerse</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering college students with smart, personalized learning tools and resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-foreground">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-foreground">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/knowledge-hub" className="text-muted-foreground hover:text-foreground">
                  Knowledge Hub
                </Link>
              </li>
              <li>
                <Link to="/quizzes" className="text-muted-foreground hover:text-foreground">
                  Quizzes
                </Link>
              </li>
              <li>
                <Link to="/forum" className="text-muted-foreground hover:text-foreground">
                  Student Forum
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-muted-foreground hover:text-foreground">
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Getting Started Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} VidyaVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
