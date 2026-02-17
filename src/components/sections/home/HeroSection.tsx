import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "2348137306375";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20KingsTech-Solution%20I%20need%20a%20free%20quote`;

const stats = [
  { value: "12+", label: "States Covered" }, // ✅ Changed from "Service Centers"
  { value: "2023", label: "Established", highlight: true },
  { value: "50+", label: "Happy Customers" },
];

const StatsList: React.FC = () => (
  <ul
    className="mt-12 flex flex-wrap gap-5 justify-center md:justify-normal lg:justify-start text-white"
    role="list"
  >
    {stats.map((stat, index) => (
      <li key={index} className="text-center font-maven">
        <p
          className={`text-3xl font-bold ${
            stat.highlight ? "text-green-600" : ""
          }`}
        >
          {stat.value}
        </p>
        <p className="text-sm text-gray-300">{stat.label}</p>
      </li>
    ))}
  </ul>
);

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/assets/images/landing_page_hero1.png"
        >
          <source
            src="https://res.cloudinary.com/dhnd4s77j/video/upload/v1770742914/VN20260210_130411_1_fjd1zv.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl">
          <h1 className="text-[32px] md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Smart Energy &{" "}
            <span className="text-green-600">Security Solutions</span> for Homes
            and Businesses
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl font-maven">
            Solar installations, CCTV systems, house wiring, and fencing
            delivered professionally across Nigeria
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 group"
              asChild
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center font-maven"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <StatsList />
        </div>
      </div>

      <div
        className="absolute bottom-8 inset-x-0 z-10 flex justify-center animate-bounce"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
