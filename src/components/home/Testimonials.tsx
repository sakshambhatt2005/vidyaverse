
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      image: "/placeholder.svg",
      testimonial: "VidyaVerse transformed my learning experience. The interactive courses and AI assistant made complex topics much easier to understand.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      image: "/placeholder.svg",
      testimonial: "As someone looking to expand my skills, VidyaVerse offered exactly what I needed. The forums and community support were incredibly helpful.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Data Science Professional",
      image: "/placeholder.svg",
      testimonial: "The quality of content on VidyaVerse is outstanding. I've recommended it to all my colleagues looking to upskill in the data science field.",
      rating: 4
    },
    {
      name: "David Rodriguez",
      role: "Engineering Student",
      image: "/placeholder.svg",
      testimonial: "The knowledge hub and resources available on VidyaVerse have been invaluable for my studies and research projects.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm dark:bg-amber-900/30 text-amber-800 dark:text-amber-300">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-slate-900 dark:text-white">
              What Our Students Say
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-600 dark:text-slate-400 md:text-xl/relaxed">
              Hear from our community about how VidyaVerse has helped them achieve their learning goals.
            </p>
          </div>
        </div>
        
        <div className="mx-auto max-w-5xl py-12">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="border-slate-200 dark:border-slate-800">
                    <CardContent className="p-6">
                      <div className="flex space-x-1 mb-2">
                        {Array(5).fill(0).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-slate-300 dark:text-slate-700'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 italic">
                        "{testimonial.testimonial}"
                      </p>
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 dark:text-white">{testimonial.name}</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
