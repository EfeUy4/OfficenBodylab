import { useState, useEffect, useRef, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  imageUrl: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [carouselWidth, setCarouselWidth] = useState(3); // Default to 3 items per slide for desktop
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Function to handle window resize and update items per slide
  const updateCarouselWidth = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setCarouselWidth(3); // Show 3 items on desktop (lg)
    } else if (window.innerWidth >= 768) {
      setCarouselWidth(2); // Show 2 items on tablet (md)
    } else {
      setCarouselWidth(1); // Show 1 item on mobile
    }
  }, []);
  
  useEffect(() => {
    updateCarouselWidth();
    window.addEventListener('resize', updateCarouselWidth);
    return () => {
      window.removeEventListener('resize', updateCarouselWidth);
    };
  }, [updateCarouselWidth]);
  
  const maxSlides = Math.ceil(testimonials.length / carouselWidth);
  
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  }, [maxSlides]);
  
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  }, [maxSlides]);
  
  // Touch events for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };
  
  // Auto advance the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);
  
  return (
    <div className="relative">
      <div 
        className="overflow-hidden" 
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={`px-4 flex-shrink-0`}
              style={{ width: `${100 / carouselWidth}%` }}
            >
              <Card className="bg-white shadow-md mb-6">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-sage flex">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          size={18}
                          fill={index < testimonial.rating ? "currentColor" : "none"}
                          className={index < testimonial.rating ? "text-sage" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-charcoal/80 italic mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img src={testimonial.imageUrl} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-charcoal/60">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {maxSlides > 1 && (
        <>
          <Button 
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full shadow-md focus:outline-none z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-charcoal" />
          </Button>
          
          <Button 
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full shadow-md focus:outline-none z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-charcoal" />
          </Button>
        </>
      )}
      
      {/* Pagination indicators */}
      {maxSlides > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-sage" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;
