import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // ✅ added
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote, MessageCircle } from "lucide-react"; // ✅ added MessageCircle
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

interface Stat {
  value: string;
  label: string;
}

// ✅ WhatsApp review link
const WHATSAPP_NUMBER = "2348137306375";
const REVIEW_MESSAGE =
  "Hi KingsTech-Solution, I'd like to leave a review about your services.";
const REVIEW_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(REVIEW_MESSAGE)}`;

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ola O.",
    role: "Founder, StackDev Limited",
    image:
      "https://www.shutterstock.com/image-photo/portrait-african-american-man-architect-600nw-1665468736.jpg",
    rating: 5,
    text: "As a tech startup, we can't afford downtime. Kings Tech Solutions installed a complete solar system with inverter and lithium batteries, and it's been flawless. I've recommended them to my entire tech circle.",
  },
  {
    name: "Grace N.",
    role: "Program Director, EduLight Africa",
    image:
      "https://everygirlafrica.org/wp-content/uploads/2022/03/first_african_woman_5f572eac88260.jpeg",
    rating: 5,
    text: "Kings Tech Solutions equipped five rural schools with solar panels and efficient lighting. Students now study after dark, and teachers feel safer. Their commitment to quality and purpose is unmatched.",
  },
  {
    name: "Chijioke M.",
    role: "MD, GreenHaven Properties",
    image:
      "https://media.istockphoto.com/id/1366582232/photo/shot-of-a-mature-businessman-using-his-smartphone-to-send-a-text-message-while-drinking-coffee.jpg?s=612x612&w=0&k=20&c=o9XK4P6iW1drP9DBdGRXO-Pf9JhhH-R8nTco9WbTtlg=",
    rating: 5,
    text: "Kings Tech Solutions has been our go-to partner for all residential projects. From solar panels and inverters to complete house wiring, their work is top-notch. Clients love the savings and reliability.",
  },
  {
    name: "Mr. Adeola I.",
    role: "Business Owner, Lagos",
    image: "https://images.pexels.com/photos/5398958/pexels-photo-5398958.jpeg",
    rating: 5,
    text: "Switching to Kings Tech Solutions for our office solar and CCTV needs was the best decision. Power costs dropped by over 60%, and the security system gives us peace of mind. Excellent support!",
  },
  {
    name: "Tunde A.",
    role: "Homeowner, Abuja",
    image: "https://images.pexels.com/photos/936117/pexels-photo-936117.jpeg",
    rating: 5,
    text: "Kings Tech Solutions handled our house wiring and installed a 5KVA inverter system. The team was professional, and now we enjoy 24/7 power without generator noise. Highly recommended!",
  },
  {
    name: "Dominic E.",
    role: "Community Leader, Edo State",
    image: "https://images.pexels.com/photos/3206080/pexels-photo-3206080.jpeg",
    rating: 5,
    text: "Our community installed solar street lights from Kings Tech Solutions. The transformation is incredible—no more darkness, improved security, and children can play safely at night. Built to last!",
  },
  {
    name: "Engr. Boma K.",
    role: "Facility Manager, CareMed Hospital",
    image:
      "https://img.freepik.com/premium-photo/portrait-african-american-man-as-software-engineer-looking-camera-while-posing-workplace-wi_236854-44703.jpg",
    rating: 5,
    text: "CareMed Hospital relies on Kings Tech Solutions for our backup power and electric fencing. Even during grid outages, our critical equipment stays online. Reliable, efficient, and truly life-saving.",
  },
];

const STATS: Stat[] = [
  { value: "50+", label: "Happy Customers" },
  { value: "4.9", label: "Average Rating" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support Available" },
];

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="h-full hover:shadow-2xl transition-all duration-300 border-gray-100 hover:border-green-200">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <Quote className="w-10 h-10 text-green-600 opacity-20" />
        </div>

        <div className="flex gap-1 mb-4" aria-hidden="true">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <p className="text-gray-700 leading-relaxed mb-6 flex-grow font-maven">
          "{testimonial.text}"
        </p>

        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-green-100">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-600 font-maven">
              {testimonial.role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface StatsBoxProps {
  stats: Stat[];
}

const StatsBox: React.FC<StatsBoxProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto font-maven">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100"
        >
          <p className="text-3xl font-bold text-green-600 mb-2">{stat.value}</p>
          <p className="text-sm text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Customer success stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            See what our customers are saying
          </h2>
          <div className="w-20 h-1 bg-green-600 rounded-full mx-auto mt-4" />
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{ align: "start", loop: true }}
            aria-label="Customer testimonials"
          >
            <CarouselContent>
              {TESTIMONIALS.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious
                className="relative left-0 translate-x-0 bg-white hover:bg-green-50 border-green-600 text-green-600"
                aria-label="Previous testimonial"
              />
              <CarouselNext
                className="relative right-0 translate-x-0 bg-white hover:bg-green-50 border-green-600 text-green-600"
                aria-label="Next testimonial"
              />
            </div>
          </Carousel>
        </div>

        <StatsBox stats={STATS} />

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4 font-maven">
            Share your experience with us – we'd love to hear from you!
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white"
            asChild
          >
            <a
              href={REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Write a Review on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
