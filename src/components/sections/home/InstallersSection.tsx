import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, CheckCircle, Award, Clock, ArrowRight } from "lucide-react";

interface Location {
  name: string;
  image: string;
  installers: number;
  stateId: string;
}

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

// ---------- Constants ----------
const WHATSAPP_NUMBER = "2348137306375";
const WHATSAPP_HELP_URL = `https://api.whatsapp.com/send/?text=Hi%20KingsTech-Solution,%20I%20need%20help%20finding%20an%20installer&phone=${WHATSAPP_NUMBER}`;

const LOCATIONS: Location[] = [
  { name: "Lagos", image: "/cities/lagos.png", installers: 10, stateId: "24" },
  { name: "Abuja", image: "/cities/abuja.png", installers: 3, stateId: "37" },
  { name: "Enugu", image: "/cities/enugu.jpg", installers: 2, stateId: "19" },
  { name: "Benin", image: "/cities/benin.png", installers: 8, stateId: "33" },
  { name: "Ibadan", image: "/cities/ibadan.jpg", installers: 5, stateId: "32" },
  {
    name: "Anambra",
    image: "/cities/anambra.jpg",
    installers: 4,
    stateId: "18",
  },
];

const FEATURES: Feature[] = [
  {
    icon: CheckCircle,
    title: "Certified Professionals",
    description:
      "All installers are trained and verified by KingsTech-Solution",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Installation backed by our quality assurance standards",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Quick turnaround time for installation and support",
  },
];

// ---------- Subcomponents ----------

interface LocationCardProps {
  location: Location;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  const citiesWithProjects = [
    "Lagos",
    "Abuja",
    "Benin",
    "Anambra",
    "Enugu",
    "Ibadan",
  ];
  const linkTo = citiesWithProjects.includes(location.name)
    ? `/project-showcase?city=${location.name.toLowerCase()}`
    : "/find-installers";

  return (
    <Link
      to={linkTo}
      className="group"
      aria-label={`${location.name} with ${location.installers} installers`}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center group-hover:from-green-600 group-hover:to-green-500 transition-all">
            <MapPin className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
          </div>
          <h4 className="font-bold text-gray-900 mb-1">{location.name}</h4>
          <p className="text-xs text-gray-600 font-maven">
            {location.installers}+ Installers
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

interface FeatureItemProps {
  feature: Feature;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => {
  const Icon = feature.icon;
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg bg-white border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-green-600" />
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
        <p className="text-sm text-gray-600 font-maven">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

const StatsRow: React.FC = () => {
  const stats = [
    { value: "10+", label: "Installers" },
    { value: "12", label: "States" },
    { value: "100%", label: "Certified" },
  ];

  return (
    <ul className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200 font-maven">
      {stats.map((stat, index) => (
        <li key={index} className="text-center">
          <p className="text-3xl font-bold text-green-600">{stat.value}</p>
          <p className="text-sm text-gray-600">{stat.label}</p>
        </li>
      ))}
    </ul>
  );
};

// ---------- Main Component ----------

const InstallersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Installers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Trusted Certified Installers Near You
          </h2>
          <div className="w-20 h-1 bg-green-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column: Location Cards + Image */}
          <div className="relative">
            {/* Location Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
              {LOCATIONS.map((location) => (
                <LocationCard key={location.name} location={location} />
              ))}
            </div>

            {/* Map Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/images/location_frame_2.png"
                alt="Service locations across Nigeria"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Right Column: Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Need a Certified Solar Installer You Can Trust?
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-maven">
                We've partnered with trained and verified professionals to
                ensure your solar setup is done right — safely, efficiently, and
                to the highest standards.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {FEATURES.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white group"
                asChild
              >
                <Link
                  to="/find-installers"
                  className="flex items-center justify-center font-maven"
                >
                  Find an Installer Near You
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 font-maven"
                asChild
              >
                <a
                  href={WHATSAPP_HELP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Help Choosing
                </a>
              </Button>
            </div>

            {/* Stats */}
            <StatsRow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallersSection;
