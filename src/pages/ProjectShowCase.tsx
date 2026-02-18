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
    image: "/assets/images/work.jpg",
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
    image: "/assets/images/house-wiring1.jpeg",
    date: "December 2023",
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
    date: "November 2025",
    location: "Enugu",
    category: "Solar",
  },
  {
    id: 5,
    title: "CCTV & Access Control for Office Complex in Port Harcourt",
    slug: "ph-cctv-access",
    excerpt:
      "Deployed 12 high‑definition cameras and biometric access control for a corporate office.",
    image: "/assets/images/cctv3.jpeg",
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
  {
    id: 7,
    title: "CCTV Surveillance for 6 Bedroom House in Anambra",
    slug: "anambra-cctv",
    excerpt:
      "Installed 24 high‑definition cameras with night vision and remote monitoring for a large residential property.",
    image: "/assets/images/cctv1.jpeg",
    date: "August 2024",
    location: "Anambra",
    category: "Security",
  },
  {
    id: 8,
    title: "Backup Power System for Residential Estate in Enugu",
    slug: "enugu-backup-power",
    excerpt:
      "Deployed 10KVA inverter system with lithium batteries to provide uninterrupted power for 20 apartments.",
    image: "/assets/images/inverter-pro.jpeg",
    date: "July 2024",
    location: "Enugu",
    category: "Solar",
  },
  {
    id: 9,
    title: "Solar Power System for Private School in Ibadan",
    slug: "ibadan-school-solar",
    excerpt:
      "Installed 15KW solar array with hybrid inverters to power classrooms, offices, and ICT lab.",
    image: "/assets/images/main-project.jpeg",
    date: "June 2024",
    location: "Ibadan",
    category: "Solar",
  },
  {
    id: 10,
    title: "Perimeter CCTV & Electric Fence for Warehouse in Warri",
    slug: "warri-warehouse-security",
    excerpt:
      "Comprehensive security upgrade with 16 bullet cameras and 6‑line electric fencing.",
    image: "/assets/images/cctv2.jpeg",
    date: "May 2024",
    location: "Delta",
    category: "Security",
  },
  {
    id: 11,
    title: "Lithium Battery Upgrade for Existing Solar System in Kano",
    slug: "kano-battery-upgrade",
    excerpt:
      "Replaced old lead‑acid batteries with 15KWh lithium bank, doubling backup time and reducing maintenance.",
    image: "/assets/images/solar-project1.jpeg",
    date: "April 2023",
    location: "Kano",
    category: "Solar",
  },
  {
    id: 12,
    title: "Complete House Wiring for New Duplex in Ajah, Lagos",
    slug: "ajah-house-wiring",
    excerpt:
      "Full electrical installation including conduit, sockets, lighting, and distribution board for a modern duplex.",
    image: "/assets/images/house-wiring2.jpeg",
    date: "March 2024",
    location: "Lagos",
    category: "Electrical",
  },

  {
    id: 13,
    title: "Solar Powered Borehole System for Community in Ondo",
    slug: "ondo-borehole-solar",
    excerpt:
      "Designed and installed a 7.5KW solar system to power a community borehole, ensuring 24/7 water supply.",
    image: "/assets/images/ondo-solar.jpeg",
    date: "February 2024",
    location: "Ondo",
    category: "Solar",
  },
  {
    id: 14,
    title: "CCTV Installation for Shopping Mall in Port Harcourt",
    slug: "ph-mall-cctv",
    excerpt:
      "Deployed 30 high‑definition cameras with advanced analytics for a busy shopping mall.",
    image: "/assets/images/ph-mall-cctv.jpeg",
    date: "January 2024",
    location: "Rivers",
    category: "Security",
  },
  {
    id: 15,
    title: "Electric Fencing for Private Estate in Lekki, Lagos",
    slug: "lekki-fencing",
    excerpt:
      "Installed 12‑line electric fence with alarm integration for a high‑security residential estate.",
    image: "/assets/images/lekki-fence.jpeg",
    date: "December 2023",
    location: "Lagos",
    category: "Security",
  },
  {
    id: 16,
    title: "House Wiring & Solar Backup for Duplex in Benin",
    slug: "benin-wiring-solar",
    excerpt:
      "Complete rewiring and 3.5KVA solar backup system for a newly built duplex.",
    image: "/assets/images/benin-wiring.jpeg",
    date: "November 2023",
    location: "Benin",
    category: "Electrical",
  },
  {
    id: 17,
    title: "Solar Street Lights for Market Square in Abeokuta",
    slug: "abeokuta-street-lights",
    excerpt:
      "Installed 15 solar street lights to illuminate a busy market, improving security and extending business hours.",
    image: "/assets/images/abeokuta-lights.jpeg",
    date: "October 2023",
    location: "Ogun",
    category: "Solar",
  },
  {
    id: 18,
    title: "Inverter Upgrade & Battery Bank for Hotel in Ibadan",
    slug: "ibadan-hotel-upgrade",
    excerpt:
      "Upgraded existing inverter system with 20KWh lithium battery bank to ensure uninterrupted guest comfort.",
    image: "/assets/images/ibadan-hotel.jpeg",
    date: "September 2023",
    location: "Ibadan",
    category: "Solar",
  },
  {
    id: 19,
    title: "CCTV & Access Control for Factory in Ota, Ogun State",
    slug: "ota-factory-security",
    excerpt:
      "Installed 16 bullet cameras and biometric access control for a manufacturing facility.",
    image: "/assets/images/ota-factory.webp",
    date: "August 2023",
    location: "Ogun",
    category: "Security",
  },
  {
    id: 20,
    title: "Solar Hybrid System for Guest House in Calabar",
    slug: "calabar-guesthouse",
    excerpt:
      "Designed and installed a 5KVA hybrid solar system for a boutique guest house.",
    image: "/assets/images/calabar-solar.jpeg",
    date: "July 2023",
    location: "Cross River",
    category: "Solar",
  },
  {
    id: 21,
    title: "Solar Installation for 5‑Bedroom Mansion in Ikoyi",
    slug: "ikoyi-solar-mansion",
    excerpt:
      "Installed 10KVA hybrid solar system with lithium batteries for a luxury home, powering all appliances including ACs.",
    image: "/assets/images/ikoyi-solar.jpeg",
    date: "March 2024",
    location: "Lagos",
    category: "Solar",
  },
  {
    id: 22,
    title: "CCTV & Access Control for Office Complex in VI",
    slug: "vi-office-cctv",
    excerpt:
      "Deployed 24 high‑definition cameras and biometric access control for a corporate office in Victoria Island.",
    image: "/assets/images/vi-cctv.webp",
    date: "February 2024",
    location: "Lagos",
    category: "Security",
  },
  {
    id: 23,
    title: "House Wiring for 4‑Bedroom Duplex in Lekki Phase 1",
    slug: "lekki-house-wiring",
    excerpt:
      "Complete electrical wiring, distribution board, and lighting installation for a new duplex.",
    image: "/assets/images/lekki-wiring.jpg",
    date: "January 2024",
    location: "Lagos",
    category: "Electrical",
  },
  {
    id: 24,
    title: "Solar Street Lights for Estate in GRA",
    slug: "gra-street-lights",
    excerpt:
      "Installed 30 solar street lights along internal roads of a GRA estate, improving security.",
    image: "/assets/images/gra-lights.jpg",
    date: "December 2023",
    location: "Lagos",
    category: "Solar",
  },
  {
    id: 25,
    title: "Electric Fencing for Warehouse in Apapa",
    slug: "apapa-fencing",
    excerpt:
      "Installed 8‑line electric fence with alarm for a large warehouse, protecting goods from theft.",
    image: "/assets/images/electric-fence.jpeg",
    date: "November 2023",
    location: "Lagos",
    category: "Security",
  },
  {
    id: 26,
    title: "Inverter Upgrade for Hotel in Ikeja",
    slug: "ikeja-hotel-upgrade",
    excerpt:
      "Replaced lead‑acid batteries with 15KWh lithium bank for a hotel, ensuring uninterrupted power.",
    image: "/assets/images/inverter-pro4.jpeg",
    date: "October 2023",
    location: "Lagos",
    category: "Solar",
  },
  {
    id: 27,
    title: "CCTV Installation for School in Surulere",
    slug: "surulere-school-cctv",
    excerpt:
      "Installed 16 cameras with remote monitoring for a private school, enhancing student safety.",
    image: "/assets/images/surulere-school.jpg",
    date: "September 2023",
    location: "Lagos",
    category: "Security",
  },

  {
    id: 28,
    title: "Solar Power for Shopping Complex in Benin",
    slug: "benin-shopping-solar",
    excerpt:
      "Installed 15KW solar array to power a busy shopping complex, cutting electricity costs.",
    image: "/assets/images/benin-shopping.jpeg",
    date: "August 2023",
    location: "Benin",
    category: "Solar",
  },
  {
    id: 29,
    title: "CCTV & Electric Fence for Private Residence",
    slug: "benin-residence-security",
    excerpt:
      "Comprehensive security solution for a large home, including cameras and perimeter fence.",
    image: "/assets/images/benin-residence.webp",
    date: "July 2023",
    location: "Benin",
    category: "Security",
  },
  {
    id: 30,
    title: "House Wiring for New Bungalow in Benin",
    slug: "benin-bungalow-wiring",
    excerpt:
      "Complete electrical installation for a modern bungalow, with pre‑wiring for solar.",
    image: "/assets/images/benin-bungalow.jpg",
    date: "June 2023",
    location: "Benin",
    category: "Electrical",
  },
  {
    id: 31,
    title: "Solar Street Lights for Community Road",
    slug: "benin-community-lights",
    excerpt:
      "Installed 20 solar street lights along a community road, improving night safety.",
    image: "/assets/images/enugu-light.jpg",
    date: "May 2023",
    location: "Benin",
    category: "Solar",
  },
  {
    id: 32,
    title: "Inverter Backup for Clinic in Benin",
    slug: "benin-clinic-backup",
    excerpt:
      "Installed 3.2KVA inverter with lithium batteries to ensure critical medical equipment stays on.",
    image: "/assets/images/benin-clinic.jpeg",
    date: "April 2023",
    location: "Benin",
    category: "Solar",
  },
  {
    id: 33,
    title: "CCTV for Church Auditorium",
    slug: "benin-church-cctv",
    excerpt:
      "Deployed 12 cameras with night vision for a large church auditorium.",
    image: "/assets/images/benin-church.jpeg",
    date: "March 2023",
    location: "Benin",
    category: "Security",
  },
  {
    id: 34,
    title: "Electric Fencing for Farm in Benin",
    slug: "benin-farm-fence",
    excerpt:
      "Installed solar‑powered electric fence to protect farmland from animals and intruders.",
    image: "/assets/images/electric-fence.jpeg",
    date: "February 2023",
    location: "Benin",
    category: "Security",
  },
  {
    id: 35,
    title: "Solar Hybrid System for Guest House",
    slug: "benin-guesthouse-solar",
    excerpt:
      "Designed and installed a 7.5KVA solar system for a boutique guest house.",
    image: "/assets/images/benin-guesthouse.jpeg",
    date: "January 2023",
    location: "Benin",
    category: "Solar",
  },
  {
    id: 36,
    title: "Solar Installation for Office Complex in Abuja",
    slug: "abuja-office-solar",
    excerpt:
      "Installed 20KW solar system with lithium batteries for a corporate office, ensuring 24/7 power.",
    image: "/assets/images/abuja-office.jpeg",
    date: "December 2023",
    location: "Abuja",
    category: "Solar",
  },
  {
    id: 37,
    title: "CCTV for Residential Estate in Abuja",
    slug: "abuja-estate-cctv",
    excerpt:
      "Deployed 30 cameras across a gated community with central monitoring.",
    image: "/assets/images/abuja-estate.jpg",
    date: "November 2023",
    location: "Abuja",
    category: "Security",
  },
  {
    id: 38,
    title: "Electric Fencing at Abuja",
    slug: "asokoro-wiring",
    excerpt:
      "Complete electrical installation for a new duplex in Asokoro, with smart home pre‑wiring.",
    image: "/assets/images/benin-project.jpeg",
    date: "October 2023",
    location: "Abuja",
    category: "Electrical",
  },
  {
    id: 39,
    title: "Solar Street Lights for Estate Road",
    slug: "abuja-estate-lights",
    excerpt:
      "Installed 15 solar street lights along internal roads of an estate.",
    image: "/assets/images/abuja-estate-lights.jpg",
    date: "September 2023",
    location: "Abuja",
    category: "Solar",
  },
  {
    id: 40,
    title: "Electric Fencing for School in Abuja",
    slug: "abuja-school-fence",
    excerpt:
      "Installed perimeter electric fence with alarm for a private school.",
    image: "/assets/images/abuja-school.jpeg",
    date: "August 2023",
    location: "Abuja",
    category: "Security",
  },
  {
    id: 41,
    title: "Inverter Backup for Hotel in Abuja",
    slug: "abuja-hotel-backup",
    excerpt:
      "Installed 5KVA inverter with 10KWh lithium battery for a hotel, ensuring guest comfort.",
    image: "/assets/images/abuja-hotel.jpeg",
    date: "July 2023",
    location: "Abuja",
    category: "Solar",
  },
  {
    id: 42,
    title: "CCTV & Access Control for Bank",
    slug: "abuja-bank-cctv",
    excerpt:
      "Installed high‑security cameras and biometric access for a bank branch.",
    image: "/assets/images/abuja-bank.webp",
    date: "June 2023",
    location: "Abuja",
    category: "Security",
  },
  {
    id: 43,
    title: "Solar Power for School in Enugu",
    slug: "enugu-school-solar",
    excerpt:
      "Installed 10KW solar system for a private school, powering classrooms and admin block.",
    image: "/assets/images/enugu-school.jpg",
    date: "May 2023",
    location: "Enugu",
    category: "Solar",
  },
  {
    id: 44,
    title: "CCTV for Shopping Mall in Port Harcourt",
    slug: "ph-mall-cctv-2",
    excerpt: "Installed 24 cameras with analytics for a large shopping mall.",
    image: "/assets/images/ph-mall2.webp",
    date: "April 2023",
    location: "Rivers",
    category: "Security",
  },
  {
    id: 45,
    title: "Solar Power for Hotel in Port Harcourt",
    slug: "ph-hotel-solar",
    excerpt: "Installed 15KW solar system with battery backup for a hotel.",
    image: "/assets/images/ph-hotel.jpeg",
    date: "March 2023",
    location: "Rivers",
    category: "Solar",
  },

  {
    id: 46,
    title: "Electric Fencing for Factory in Ibadan",
    slug: "ibadan-factory-fence",
    excerpt: "Installed 6‑line electric fence around a factory premises.",
    image: "/assets/images/ibadan-factory.jpg",
    date: "February 2023",
    location: "Ibadan",
    category: "Security",
  },

  {
    id: 47,
    title: "Solar Installation for Warehouse in Kano",
    slug: "kano-warehouse-solar",
    excerpt: "Installed 12KW solar system to power a large warehouse.",
    image: "/assets/images/kano-warehouse.jpeg",
    date: "January 2023",
    location: "Kano",
    category: "Solar",
  },

  {
    id: 48,
    title: "CCTV for Hotel in Anambra",
    slug: "anambra-hotel-cctv",
    excerpt: "Installed 16 cameras for a hotel, covering all public areas.",
    image: "/assets/images/anambra-hotel.jpg",
    date: "December 2022",
    location: "Anambra",
    category: "Security",
  },

  {
    id: 49,
    title: "Solar Street Lights for Market in Warri",
    slug: "warri-market-lights",
    excerpt: "Installed 20 solar street lights around Warri main market.",
    image: "/assets/images/warri-market.jpg",
    date: "November 2022",
    location: "Delta",
    category: "Solar",
  },

  {
    id: 50,
    title: "CCTV for Hospital in Ondo",
    slug: "ondo-hospital-cctv",
    excerpt: "Installed 12 cameras with night vision for a general hospital.",
    image: "/assets/images/ondo-hospital.jpg",
    date: "October 2022",
    location: "Ondo",
    category: "Security",
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

  const locations = [...new Set(projectsData.map((p) => p.location))];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
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

        {/* Breadcrumb & Filter (unchanged) */}
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

        {/* CTA (unchanged) */}
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
