import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { COMPANY_NAME } from "@/lib/constant";

const projectsData = [
  {
    id: 1,
    title: "Complete Solar Installation for 4‑Bedroom Home in Ikeja",
    slug: "lagos-project",
    excerpt:
      "Designed and installed a 5KVA hybrid solar system with lithium batteries, powering all lights, fans, TVs, and fridge 24/7.",
    image: "/assets/images/work.jpeg",
    date: "February 2025",
    location: "Lagos",
    category: "Solar",
  },
  {
    id: 2,
    title: "Perimeter Electric Fencing & CCTV for Estate in Ibadan",
    slug: "ibadan-fencing-cctv",
    excerpt:
      "Full perimeter security solution including 8‑line electric fence and 16‑channel CCTV system with night vision.",
    image: "/assets/images/electric-fences.jpeg",
    date: "January 2025",
    location: "Ibadan",
    category: "Security",
  },
  {
    id: 3,
    title: "House Wiring & Inverter Backup for New Bungalow in Abuja",
    slug: "abuja-project",
    excerpt:
      "Complete rewiring of a new build, including distribution board, sockets, lighting, and 3.5KVA inverter backup.",
    image: "/assets/images/house-wiring.jpeg",
    date: "December 2024",
    location: "Abuja",
    category: "Electrical",
  },
  {
    id: 4,
    title: "Solar Street Lights for Community Road in Enugu",
    slug: "enugu-street-lights",
    excerpt:
      "Installation of 20 all‑in‑one solar street lights along a 2km stretch, improving safety and night visibility.",
    image: "/assets/images/street-lights.jpeg",
    date: "November 2024",
    location: "Enugu",
    category: "Solar",
  },
  {
    id: 5,
    title: "CCTV & Access Control for Office Complex in Port Harcourt",
    slug: "ph-cctv-access",
    excerpt:
      "Deployed 12 high‑definition cameras and biometric access control for a corporate office.",
    image: "/assets/images/city-cctv.jpeg",
    date: "October 2024",
    location: "Rivers",
    category: "Security",
  },
  {
    id: 6,
    title: "Industrial Solar Power for Factory in Benin City",
    slug: "benin-project",
    excerpt:
      "Grid‑tied solar system with 20KW capacity to offset factory daytime load and reduce electricity bills.",
    image: "/assets/images/benin-factory.jpeg",
    date: "September 2024",
    location: "Benin",
    category: "Solar",
  },
];

const ProjectShowcasePage = () => {
  const [searchParams] = useSearchParams();
  const cityFilter = searchParams.get("city");

  const filteredProjects = cityFilter
    ? projectsData.filter(
        (p) => p.location.toLowerCase() === cityFilter.toLowerCase(),
      )
    : projectsData;

  // Group projects by location for filter display (optional)
  const locations = [...new Set(projectsData.map((p) => p.location))];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Project Showcase
            </h1>
            <p className="text-xl md:text-2xl text-green-50 max-w-2xl mx-auto font-maven">
              Real‑world installations delivered by {COMPANY_NAME} across
              Nigeria.
            </p>
          </div>
        </section>

        {/* Breadcrumb & Filter */}
        <section className="bg-white border-b py-4 font-maven">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Link to="/" className="text-gray-600 hover:text-green-600">
                  Home
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-gray-900 font-medium">Projects</span>
                {cityFilter && (
                  <>
                    <span aria-hidden="true">/</span>
                    <span className="text-gray-900 font-medium capitalize">
                      {cityFilter}
                    </span>
                  </>
                )}
              </div>

              {/* City filter dropdown */}
              <div className="flex items-center gap-2">
                <label htmlFor="city-filter" className="text-sm text-gray-600">
                  Filter by city:
                </label>
                <select
                  id="city-filter"
                  value={cityFilter || ""}
                  onChange={(e) => {
                    const city = e.target.value;
                    const url = city
                      ? `/project-showcase?city=${city.toLowerCase()}`
                      : "/project-showcase";
                    window.location.href = url;
                  }}
                  className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-green-600"
                >
                  <option value="">All Cities</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc.toLowerCase()}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredProjects.length > 0 ? (
              <>
                {cityFilter && (
                  <p className="mb-8 text-lg text-gray-600 font-maven">
                    Showing {filteredProjects.length} project
                    {filteredProjects.length !== 1 ? "s" : ""} in{" "}
                    <span className="font-semibold capitalize">
                      {cityFilter}
                    </span>
                  </p>
                )}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {filteredProjects.map((project) => (
                    <article
                      key={project.id}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src =
                              "/assets/images/placeholder.jpeg";
                          }}
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <time dateTime={project.date}>{project.date}</time>
                          <span aria-hidden="true">•</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            {project.category}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">
                          <Link
                            to={`/project-showcase/project/${project.slug}`}
                            className="hover:text-green-600 transition-colors"
                          >
                            {project.title}
                          </Link>
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3 font-maven">
                          {project.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            Location: {project.location}
                          </span>
                          <Link
                            to={`/project-showcase/project/${project.slug}`}
                            className="text-green-600 hover:text-green-700 font-medium inline-flex items-center gap-2"
                            aria-label={`View details of ${project.title}`}
                          >
                            View Project
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  No Projects Found
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {cityFilter
                    ? `We don't have any projects listed in ${cityFilter} yet.`
                    : "Check back soon for our completed projects."}
                </p>
                <Link
                  to="/project-showcase"
                  className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                >
                  View All Projects
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how we can bring your vision to life.
            </p>
            <Link
              to="/contact-us"
              className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectShowcasePage;
