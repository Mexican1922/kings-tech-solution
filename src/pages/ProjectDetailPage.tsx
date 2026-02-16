import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Package } from "lucide-react";
import { COMPANY_NAME } from "@/lib/constant";

const projectsData = [
  {
    id: 1,
    slug: "lagos-project",
    title: "Complete Solar Installation for 4‑Bedroom Home in Ikeja",
    author: COMPANY_NAME,
    date: "February 2025",
    location: "Lagos",
    category: "Solar",
    image: "/assets/images/work.jpeg",
    excerpt:
      "Designed and installed a 5KVA hybrid solar system with lithium batteries, powering all lights, fans, TVs, and fridge 24/7.",
    description: `
      <p>This project involved a complete solar power solution for a residential property in Ikeja, Lagos. The client wanted to eliminate generator noise and fuel costs while ensuring 24/7 power for essential appliances.</p>
      
      <h2>System Components</h2>
      <ul>
        <li>5KVA 48V hybrid inverter</li>
        <li>4 x 450W solar panels (1.8KW total)</li>
        <li>2 x 5KWh lithium batteries (10KWh total)</li>
        <li>Automatic changeover with grid/generator backup</li>
        <li>Full rewiring of dedicated loads to the inverter</li>
      </ul>

      <h2>Results</h2>
      <ul>
        <li>24/7 power for all lights, fans, TVs, refrigerator, and security lights</li>
        <li>Reduced generator runtime to only during extended cloudy periods</li>
        <li>Monthly fuel savings of over ₦80,000</li>
        <li>Silent and emission‑free operation</li>
      </ul>
    `,
    gallery: [
      "/assets/images/work.jpeg",
      "/assets/images/solar-panels-close.jpg",
      "/assets/images/inverter-install.jpg",
    ],
    tags: ["Solar", "Lagos", "Residential", "Hybrid Inverter"],
  },
  {
    id: 2,
    slug: "ibadan-fencing-cctv",
    title: "Perimeter Electric Fencing & CCTV for Estate in Ibadan",
    author: COMPANY_NAME,
    date: "January 2025",
    location: "Ibadan",
    category: "Security",
    image: "/assets/images/electric-fences.jpeg",
    excerpt:
      "Full perimeter security solution including 8‑line electric fence and 16‑channel CCTV system with night vision.",
    description: `
      <p>A gated community in Ibadan required a robust perimeter security system to deter intruders and monitor activity.</p>
      
      <h2>Installation</h2>
      <ul>
        <li>8‑line electric fence around the entire perimeter (approx. 1.2km)</li>
        <li>16 high‑definition bullet cameras with night vision</li>
        <li>8‑channel NVR with 4TB storage</li>
        <li>Remote viewing via mobile app</li>
        <li>Integration with alarm system</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Significant reduction in attempted intrusions</li>
        <li>Residents can monitor their compound remotely</li>
        <li>Electric fence provides a visible deterrent</li>
      </ul>
    `,
    gallery: [
      "/assets/images/electric-fences.jpeg",
      "/assets/images/cctv.jpeg",
      "/assets/images/security-control-room.jpg",
    ],
    tags: ["Electric Fence", "CCTV", "Ibadan", "Estate Security"],
  },
  {
    id: 3,
    slug: "abuja-project",
    title: "House Wiring & Inverter Backup for New Bungalow in Abuja",
    author: COMPANY_NAME,
    date: "December 2024",
    location: "Abuja",
    category: "Electrical",
    image: "/assets/images/house-wiring.jpeg",
    excerpt:
      "Complete rewiring of a new build, including distribution board, sockets, lighting, and 3.5KVA inverter backup.",
    description: `
      <p>This project involved the complete electrical installation for a newly constructed bungalow in Abuja. The client required modern wiring, ample power outlets, and a reliable inverter backup system.</p>
      
      <h2>Scope of Work</h2>
      <ul>
        <li>Full conduit wiring for 3 bedrooms, living room, kitchen, and external lights</li>
        <li>Installation of a 20‑way distribution board with surge protection</li>
        <li>20+ double sockets placed strategically throughout the house</li>
        <li>LED lighting throughout with dimmer controls in selected areas</li>
        <li>3.5KVA inverter system with 200Ah deep‑cycle batteries</li>
        <li>Integration with the main grid for automatic switching</li>
      </ul>

      <h2>Results</h2>
      <ul>
        <li>Safe, code‑compliant electrical system</li>
        <li>Uninterrupted power for all critical loads during outages</li>
        <li>Modern, well‑lit home with plenty of outlets for appliances</li>
      </ul>
    `,
    gallery: [
      "/assets/images/house-wiring.jpeg",
      "/assets/images/abuja-project.jpeg",
      "/assets/images/inverter-install.jpg",
    ],
    tags: ["House Wiring", "Abuja", "Inverter Backup", "New Build"],
  },
  {
    id: 4,
    slug: "enugu-street-lights",
    title: "Solar Street Lights for Community Road in Enugu",
    author: COMPANY_NAME,
    date: "November 2024",
    location: "Enugu",
    category: "Solar",
    image: "/assets/images/street-lights.jpeg",
    excerpt:
      "Installation of 20 all‑in‑one solar street lights along a 2km stretch, improving safety and night visibility.",
    description: `
      <p>The local community in Enugu approached us to provide solar‑powered street lighting for a major access road that was previously dark and unsafe at night.</p>
      
      <h2>Solution</h2>
      <ul>
        <li>20 all‑in‑one solar street lights with 60W LED, 100W solar panel, and built‑in lithium battery</li>
        <li>Poles installed at 100m intervals on both sides of the road</li>
        <li>Automatic dusk‑to‑dawn operation with motion sensors for energy saving</li>
        <li>Heavy‑duty concrete foundations to withstand wind</li>
      </ul>

      <h2>Impact</h2>
      <ul>
        <li>Improved safety for pedestrians and motorists</li>
        <li>Reduced crime in the area</li>
        <li>Zero electricity cost – fully solar powered</li>
        <li>Residents can now walk and do business after dark</li>
      </ul>
    `,
    gallery: [
      "/assets/images/street-lights.jpeg",
      "/assets/images/street-light-install.jpg",
      "/assets/images/street-light-night.jpg",
    ],
    tags: ["Solar Street Lights", "Enugu", "Community Project", "LED"],
  },
  {
    id: 5,
    slug: "ph-cctv-access",
    title: "CCTV & Access Control for Office Complex in Port Harcourt",
    author: COMPANY_NAME,
    date: "October 2024",
    location: "Rivers",
    category: "Security",
    image: "/assets/images/city-cctv.jpeg",
    excerpt:
      "Deployed 12 high‑definition cameras and biometric access control for a corporate office.",
    description: `
      <p>A corporate office in Port Harcourt needed a modern security system to monitor premises and control access to sensitive areas.</p>
      
      <h2>System Installed</h2>
      <ul>
        <li>12 high‑definition dome cameras covering all entrances, corridors, and parking</li>
        <li>Night vision capability for 24/7 monitoring</li>
        <li>16‑channel NVR with 6TB storage (30 days retention)</li>
        <li>Biometric fingerprint access control for server room and management floor</li>
        <li>Remote viewing via mobile app for security personnel</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Real‑time monitoring and recording</li>
        <li>Restricted access to sensitive areas</li>
        <li>Quick retrieval of footage when needed</li>
        <li>Improved staff safety</li>
      </ul>
    `,
    gallery: [
      "/assets/images/city-cctv.jpeg",
      "/assets/images/access-control.jpg",
      "/assets/images/cctv.jpeg",
    ],
    tags: ["CCTV", "Port Harcourt", "Access Control", "Office Security"],
  },
  {
    id: 6,
    slug: "benin-project",
    title: "Industrial Solar Power for Factory in Benin City",
    author: COMPANY_NAME,
    date: "September 2024",
    location: "Benin",
    category: "Solar",
    image: "/assets/images/benin-factory.jpeg",
    excerpt:
      "Grid‑tied solar system with 20KW capacity to offset factory daytime load and reduce electricity bills.",
    description: `
      <p>A manufacturing factory in Benin City wanted to reduce its reliance on the unstable grid and high diesel costs. We designed a grid‑tied solar system to offset their daytime consumption.</p>
      
      <h2>System Design</h2>
      <ul>
        <li>48 x 450W solar panels (21.6KW total)</li>
        <li>3 x 6KW grid‑tie inverters with zero export feature</li>
        <li>Mounting structures on factory roof</li>
        <li>Monitoring system to track generation and consumption</li>
        <li>Automatic changeover during grid failure (optional backup)</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Reduced monthly electricity bills by 60%</li>
        <li>Payback period estimated at 4 years</li>
        <li>Lower diesel generator runtime, saving fuel and maintenance</li>
        <li>Green energy contribution to corporate sustainability goals</li>
      </ul>
    `,
    gallery: [
      "/assets/images/benin-factory.jpeg",
      "/assets/images/abuja-project.jpeg",
      "/assets/images/city-inverter.jpeg",
    ],
    tags: ["Industrial Solar", "Benin", "Grid‑tied", "Factory"],
  },
];

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Project Not Found
            </h1>
            <Button asChild>
              <Link to="/project-showcase">Back to Projects</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedProjects = projectsData
    .filter((p) => p.slug !== slug && p.category === project.category)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-green-700 via-green-600 to-green-500">
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
              <Package className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-green-50 max-w-2xl mx-auto font-maven">
              {project.category} • {project.location}
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="bg-white py-4 border-b font-maven">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Link
                to="/project-showcase"
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Projects</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
              <span>/</span>
              <Link to="/project-showcase" className="hover:text-green-600">
                Projects
              </Link>
              <span className="text-gray-900 font-medium line-clamp-1">
                {project.title}
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{project.location}</span>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {project.category}
                </span>
              </div>

              {/* Main image */}
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <div
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: project.description }}
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.75",
                  color: "#374151",
                }}
              />

              {/* Tags */}
              <div className="mb-12 pb-12 border-b">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Project Tags:
                </h3>
                <div className="flex flex-wrap gap-2 font-maven">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-green-100 hover:text-green-700 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-center text-white mb-12">
                <h3 className="text-2xl font-bold mb-4">
                  Need a Similar Solution?
                </h3>
                <p className="text-green-50 mb-6 font-maven">
                  Contact us today for a free consultation and quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center font-maven">
                  <Button
                    className="bg-white text-green-700 hover:bg-gray-100"
                    size="lg"
                    asChild
                  >
                    <a
                      href={`https://api.whatsapp.com/send/?text=Hi%20${encodeURIComponent(
                        COMPANY_NAME,
                      )},%20I'm%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(
                        project.title,
                      )}&phone=2348137306375`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Free Quote
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700"
                    size="lg"
                    asChild
                  >
                    <Link to="/contact-us">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Related Projects
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedProjects.map((p) => (
                    <Link
                      key={p.id}
                      to={`/project-showcase/project/${p.slug}`}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">{p.date}</p>
                        <h3 className="text-lg font-bold text-gray-900 hover:text-green-600 transition-colors">
                          {p.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
