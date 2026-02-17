import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Phone,
  Mail,
  Clock,
  Shield,
  Users,
  Award,
  Camera,
  Cable,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE } from "@/lib/constant";

const ServicesPage = () => {
  const { serviceType } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = {
    "cctv-installation": {
      name: "CCTV Surveillance Systems",
      icon: Camera,
      tagline: "24/7 Security Monitoring for Your Property",
      description:
        "Professional CCTV installation services with HD and IP camera systems. Protect your home, office, or business with advanced surveillance technology, remote monitoring, and crystal-clear recording.",
      heroImage: "/assets/images/city-cctv.jpeg",

      gallery: [
        "/assets/images/cctv1.jpeg",
        "/assets/images/cctv2.jpeg",
        "/assets/images/cctv3.jpeg",
        "/assets/images/cctv4.jpeg",
      ],
      features: [
        "HD & 4K Camera Options",
        "Day & Night Vision Capability",
        "Remote Mobile Monitoring",
        "Motion Detection & Alerts",
        "Cloud & Local Storage",
        "Professional Installation",
        "Weatherproof Outdoor Cameras",
        "Multi-Channel DVR/NVR Systems",
      ],
      benefits: [
        {
          icon: Shield,
          title: "Enhanced Security",
          description:
            "Deter crime and monitor your property 24/7 with high-definition surveillance cameras.",
        },
        {
          icon: Phone,
          title: "Remote Access",
          description:
            "View live footage from anywhere in the world using your smartphone or computer.",
        },
        {
          icon: Clock,
          title: "24/7 Recording",
          description:
            "Continuous recording with motion detection alerts to capture every important moment.",
        },
      ],
      packages: [
        {
          name: "Basic Package",
          price: "From ₦150,000",
          features: [
            "4 HD Cameras (1080p)",
            "4-Channel DVR",
            "1TB Storage",
            "Basic Installation",
            "Mobile App Access",
            "3-Month Warranty",
          ],
          badge: "Home",
        },
        {
          name: "Standard Package",
          price: "From ₦280,000",
          features: [
            "8 HD Cameras (1080p/4K)",
            "8-Channel NVR",
            "2TB Storage",
            "Professional Installation",
            "Remote Monitoring",
            "6-Month Warranty",
            "Night Vision",
          ],
          badge: "Small Business",
          popular: true,
        },
        {
          name: "Premium Package",
          price: "From ₦500,000",
          features: [
            "16 IP Cameras (4K)",
            "16-Channel NVR",
            "4TB Storage",
            "Advanced Installation",
            "PTZ Camera Options",
            "1-Year Warranty",
            "Smart Analytics",
            "24/7 Support",
          ],
          badge: "Enterprise",
        },
      ],
      process: [
        {
          step: "1",
          title: "Site Assessment",
          description:
            "Our team visits your property to assess security needs and recommend optimal camera placement.",
        },
        {
          step: "2",
          title: "Custom Proposal",
          description:
            "We design a tailored CCTV system based on your budget, property size, and security requirements.",
        },
        {
          step: "3",
          title: "Professional Installation",
          description:
            "Certified technicians install cameras, wiring, and recording equipment with minimal disruption.",
        },
        {
          step: "4",
          title: "System Testing & Training",
          description:
            "We test the entire system, configure mobile access, and train you on using the equipment.",
        },
      ],
    },
    "house-wiring": {
      name: "Electrical & House Wiring",
      icon: Cable,
      tagline: "Safe, Reliable Electrical Installations",
      description:
        "Complete electrical wiring services for new and existing buildings. From conduit installation to distribution boards, we ensure safe, code-compliant electrical systems for your home or business.",
      heroImage: "/assets/images/house-wiring.jpeg",
      // Add gallery if available
      gallery: [],
      features: [
        "Complete Building Wiring",
        "Distribution Board Installation",
        "Socket & Switch Installation",
        "Lighting Circuit Setup",
        "Cable Management & Conduit",
        "Electrical Fault Diagnosis",
        "Safety Compliance",
        "Energy-Efficient Solutions",
      ],
      benefits: [
        {
          icon: Shield,
          title: "Safety First",
          description:
            "All installations meet electrical safety standards to protect your family and property.",
        },
        {
          icon: Users,
          title: "Certified Electricians",
          description:
            "Our team consists of licensed, experienced electricians with proven track records.",
        },
        {
          icon: Award,
          title: "Quality Materials",
          description:
            "We use only high-quality cables, switches, and components for long-lasting installations.",
        },
      ],
      packages: [
        {
          name: "Residential Wiring",
          price: "From ₦200,000",
          features: [
            "2-3 Bedroom Apartment",
            "Full Conduit Installation",
            "Distribution Board Setup",
            "Socket & Switch Installation",
            "Lighting Circuits",
            "Basic Testing",
          ],
          badge: "Home",
        },
        {
          name: "Commercial Wiring",
          price: "From ₦500,000",
          features: [
            "Office/Shop Space",
            "Heavy-Duty Wiring",
            "Three-Phase Installation",
            "Emergency Lighting",
            "Data Cable Integration",
            "Complete Testing & Certification",
          ],
          badge: "Business",
          popular: true,
        },
        {
          name: "Industrial Wiring",
          price: "Custom Quote",
          features: [
            "Large-Scale Projects",
            "High-Voltage Systems",
            "Machinery Connections",
            "Backup Power Integration",
            "Safety Systems",
            "Comprehensive Documentation",
          ],
          badge: "Industrial",
        },
      ],
      process: [
        {
          step: "1",
          title: "Electrical Survey",
          description:
            "We assess your building's electrical needs and create a detailed wiring plan.",
        },
        {
          step: "2",
          title: "Material Procurement",
          description:
            "High-quality cables, conduits, switches, and distribution boards are sourced.",
        },
        {
          step: "3",
          title: "Installation Work",
          description:
            "Our certified electricians install all wiring, ensuring code compliance and safety.",
        },
        {
          step: "4",
          title: "Testing & Handover",
          description:
            "Complete electrical testing is performed before final handover and documentation.",
        },
      ],
    },
    "electric-fencing": {
      name: "Electric & Security Fencing",
      icon: Zap,
      tagline: "Perimeter Protection for Maximum Security",
      description:
        "High-voltage electric fencing solutions to secure homes, estates, and commercial properties. Deter intruders with modern, reliable perimeter security systems that provide round-the-clock protection.",
      heroImage: "/assets/images/electric-fences.jpeg",
      gallery: [],
      features: [
        "High-Voltage Deterrent System",
        "Weather-Resistant Materials",
        "Alarm Integration Support",
        "Low Maintenance Design",
        "Solar-Powered Options",
        "Professional Installation",
        "Perimeter Monitoring",
        "Customizable Zones",
      ],
      benefits: [
        {
          icon: Shield,
          title: "Maximum Deterrence",
          description:
            "High-voltage electric shock deters intruders without causing permanent harm.",
        },
        {
          icon: Clock,
          title: "24/7 Protection",
          description:
            "Continuous perimeter security that works day and night, rain or shine.",
        },
        {
          icon: Award,
          title: "Durable & Reliable",
          description:
            "Built to withstand harsh weather conditions with minimal maintenance required.",
        },
      ],
      packages: [
        {
          name: "Residential Fencing",
          price: "From ₦150,000",
          features: [
            "50-100 Meters Coverage",
            "6-Line Electric Wire",
            "5KV Energizer",
            "Warning Signs",
            "Basic Installation",
            "6-Month Warranty",
          ],
          badge: "Home",
        },
        {
          name: "Estate/Commercial",
          price: "From ₦400,000",
          features: [
            "200+ Meters Coverage",
            "8-Line Electric Wire",
            "10KV Energizer",
            "Alarm Integration",
            "Solar Power Option",
            "1-Year Warranty",
            "Monitoring System",
          ],
          badge: "Business",
          popular: true,
        },
        {
          name: "Industrial/High Security",
          price: "Custom Quote",
          features: [
            "Unlimited Coverage",
            "Multi-Zone System",
            "15KV+ Energizer",
            "CCTV Integration",
            "Solar Backup",
            "2-Year Warranty",
            "24/7 Monitoring",
            "Maintenance Package",
          ],
          badge: "Enterprise",
        },
      ],
      process: [
        {
          step: "1",
          title: "Perimeter Survey",
          description:
            "We assess your property boundaries and determine optimal fence line placement.",
        },
        {
          step: "2",
          title: "System Design",
          description:
            "Custom electric fencing design based on your property size and security needs.",
        },
        {
          step: "3",
          title: "Installation",
          description:
            "Professional installation of poles, wires, energizer, and alarm systems.",
        },
        {
          step: "4",
          title: "Testing & Training",
          description:
            "System testing, safety briefing, and training on operation and maintenance.",
        },
      ],
    },
  };

  const currentService = services[serviceType as keyof typeof services];

  if (!currentService) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Service Not Found
            </h1>
            <Button asChild>
              <Link to="/">Go Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const Icon = currentService.icon;
  const hasGallery =
    currentService.gallery && currentService.gallery.length > 0;

  const nextImage = () => {
    if (hasGallery) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % currentService.gallery.length,
      );
    }
  };

  const prevImage = () => {
    if (hasGallery) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + currentService.gallery.length) %
          currentService.gallery.length,
      );
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-green-700 via-green-600 to-green-500">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon className="w-10 h-10 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {currentService.name}
            </h1>
            <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto mb-8 font-maven">
              {currentService.tagline}
            </p>
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-gray-100 font-maven"
              asChild
            >
              <a
                href={`https://api.whatsapp.com/send/?text=Hi%20${encodeURIComponent(
                  COMPANY_NAME,
                )},%20I%20need%20a%20quote%20for%20${encodeURIComponent(
                  currentService.name,
                )}&phone=${COMPANY_PHONE.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Free Quote
              </a>
            </Button>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="bg-white py-4 border-b font-maven">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
              <span>/</span>
              <Link to="/services" className="hover:text-green-600">
                Services
              </Link>
              <span className="text-gray-900 font-medium">
                {currentService.name}
              </span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={currentService.heroImage}
                    alt={`${currentService.name} - ${COMPANY_NAME}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Professional {currentService.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed font-maven">
                    {currentService.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 font-maven">
                    {currentService.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle
                          className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section – only if images exist */}
        {hasGallery && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Project Gallery
                  </h2>
                  <p className="text-lg text-gray-600 font-maven">
                    See examples of our completed installations
                  </p>
                </div>

                <div className="relative">
                  {/* Main image */}
                  <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={currentService.gallery[currentImageIndex]}
                      alt={`${currentService.name} gallery image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Navigation buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white shadow-lg transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white shadow-lg transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Thumbnails */}
                  <div className="flex justify-center gap-4 mt-6 overflow-x-auto pb-2">
                    {currentService.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          idx === currentImageIndex
                            ? "border-green-600 scale-105"
                            : "border-gray-300 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Our Service?
                </h2>
                <p className="text-lg text-gray-600 font-maven">
                  Professional installation with guaranteed quality and support
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {currentService.benefits.map((benefit, index) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <Card
                      key={index}
                      className="text-center hover:shadow-xl transition-all border-2 hover:border-green-300"
                    >
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <BenefitIcon
                            className="w-8 h-8 text-green-600"
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 font-maven">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Service Packages
                </h2>
                <p className="text-lg text-gray-600 font-maven">
                  Choose the package that fits your needs and budget
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {currentService.packages.map((pkg, index) => (
                  <Card
                    key={index}
                    className={`relative hover:shadow-2xl transition-all ${
                      pkg.popular
                        ? "border-2 border-green-600 scale-105"
                        : "border border-gray-200"
                    }`}
                  >
                    {pkg.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600">
                        Most Popular
                      </Badge>
                    )}
                    <CardContent className="p-8">
                      <Badge variant="outline" className="mb-4">
                        {pkg.badge}
                      </Badge>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-3xl font-bold text-green-600 mb-6 font-maven">
                        {pkg.price}
                      </p>

                      <div className="space-y-3 mb-6 font-maven">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle
                              className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className={`w-full ${
                          pkg.popular
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-gray-900 hover:bg-gray-800"
                        }`}
                        asChild
                      >
                        <a
                          href={`https://api.whatsapp.com/send/?text=Hi%20${encodeURIComponent(
                            COMPANY_NAME,
                          )},%20I'm%20interested%20in%20${encodeURIComponent(
                            pkg.name,
                          )}%20for%20${encodeURIComponent(
                            currentService.name,
                          )}&phone=${COMPANY_PHONE.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Get This Package
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Installation Process
                </h2>
                <p className="text-lg text-gray-600 font-maven">
                  Simple, professional, and hassle-free installation
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {currentService.process.map((step, index) => (
                  <Card key={index} className="border-l-4 border-green-600">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 font-maven">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 font-maven">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-green-600 to-green-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto font-maven">
              Contact us today for a free consultation and quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-gray-100 font-maven"
                asChild
              >
                <a
                  href={`https://api.whatsapp.com/send/?text=Hi%20${encodeURIComponent(
                    COMPANY_NAME,
                  )},%20I%20need%20a%20free%20quote%20for%20${encodeURIComponent(
                    currentService.name,
                  )}&phone=${COMPANY_PHONE.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700"
                asChild
              >
                <Link
                  to="/contact-us"
                  className="flex items-center gap-2 font-maven"
                >
                  <Mail className="w-5 h-5" />
                  Send Message
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="text-white">
                <Phone className="w-6 h-6 mx-auto mb-2" aria-hidden="true" />
                <p className="font-semibold">Call Us</p>
                <p className="text-green-100">{COMPANY_PHONE}</p>
              </div>
              <div className="text-white">
                <Mail className="w-6 h-6 mx-auto mb-2" aria-hidden="true" />
                <p className="font-semibold">Email Us</p>
                <p className="text-green-100">{COMPANY_EMAIL}</p>
              </div>
              <div className="text-white">
                <Clock className="w-6 h-6 mx-auto mb-2" aria-hidden="true" />
                <p className="font-semibold">Working Hours</p>
                <p className="text-green-100">Mon-Sat: 8AM - 6PM</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
