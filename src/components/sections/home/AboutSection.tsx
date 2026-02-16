import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Zap, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: Award,
    title: "Established 2023",
    description: "Over 6 years of excellence in solar energy solutions",
  },
  {
    icon: Users,
    title: "On-Request Service",
    description: "Nationwide coverage ensuring fast and efficient support",
  },
  {
    icon: Zap,
    title: "Clean Energy",
    description: "Committed to advancing sustainable power solutions",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Premium products with comprehensive warranty coverage",
  },
];

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const Icon = feature.icon;
  return (
    <div
      className="flex items-start space-x-3 p-4 rounded-lg bg-white border border-gray-100 hover:border-green-200 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-green-300"
      tabIndex={0}
    >
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-green-600" />
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 text-sm mb-1">
          {feature.title}
        </h4>
        <p className="text-xs text-gray-600 font-maven">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

const StatsBadge: React.FC = () => (
  <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
    <p className="text-4xl font-bold font-maven">6+</p>
    <p className="text-sm font-maven">Years Experience</p>
  </div>
);

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/images/about_us_image.jpg"
                alt="KingsTech-Solutions team installing solar panels on a residential rooftop"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <StatsBadge />
          </div>

          <div>
            <div className="mb-6">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                About us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                KINGSTECH-SOLUTION
              </h2>
              <div className="w-20 h-1 bg-green-600 rounded-full" />
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed font-maven">
              <p className="text-lg">
                Kings Tech Solutions was founded with one clear goal: to provide
                reliable, modern, and affordable technology solutions that
                power, protect, and connect homes and businesses.
              </p>
              <p className="text-lg">
                What started as a passion for practical electrical solutions has
                grown into a trusted brand delivering{" "}
                <span className="font-semibold text-gray-900">
                  solar energy systems, electric fencing, CCTV surveillance, and
                  quality house wiring.
                </span>{" "}
                We understand the challenges of unstable power and security
                concerns, especially in today’s environment, so we design
                solutions that are efficient, durable, and tailored to each
                client’s needs.
              </p>
              <p className="text-lg">
                At Kings Tech Solutions, we don’t just install systems — we
                install peace of mind. Every project is handled with
                professionalism, technical expertise, and attention to detail,
                ensuring long-term performance and customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {FEATURES.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white group"
                asChild
              >
                <a href="/about-us" className="flex items-center font-maven">
                  Read more
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
