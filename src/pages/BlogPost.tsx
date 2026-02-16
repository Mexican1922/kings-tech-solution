import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Calendar, User, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    slug: "lagos-solar-projects",
    title: "Solar Installations in Lagos: Powering Homes & Businesses",
    author: "KingsTech-Solutions",
    date: "February 12, 2025",
    readTime: "5 min read",
    category: "Projects",
    image: "/assets/images/work.jpeg",
    excerpt:
      "Take a look at some of our completed solar installations across Lagos — from apartments to offices now enjoying 24/7 electricity.",
    content: `
      <p>Power outages are a daily challenge in Lagos. Many homes rely heavily on generators, leading to high fuel costs and noise pollution.</p>

      <p>KingsTech Solutions recently completed multiple solar installations across residential apartments, duplexes, and office spaces.</p>

      <h2>What We Installed</h2>
      <ul>
        <li>5KVA and 10KVA hybrid inverter systems</li>
        <li>Lithium battery storage</li>
        <li>Roof-mounted solar panels</li>
        <li>Automatic changeover integration</li>
      </ul>

      <h2>Results</h2>
      <ul>
        <li>24/7 electricity supply</li>
        <li>Reduced generator usage</li>
        <li>Lower monthly fuel cost</li>
        <li>Silent power backup</li>
      </ul>

      <p>Every system was designed based on the client’s actual load demand to avoid oversizing or undersizing.</p>
    `,
    tags: [
      "Lagos Solar",
      "Projects",
      "Home Backup Power",
      "Solar Installation",
    ],
  },

  {
    id: 2,
    slug: "house-wiring-guide",
    title: "House Wiring: A Complete Guide for Nigerian Homes",
    author: "KingsTech-Solutions",
    date: "February 5, 2025",
    readTime: "7 min read",
    category: "Solar Guide",
    image: "/assets/images/house-wiring.jpeg",
    excerpt:
      "Not every house needs a 10KVA inverter. Learn how to calculate the exact system your appliances require and avoid overspending.",
    content: `
      <p>The biggest mistake many homeowners make is installing a solar system without proper load calculation.</p>

      <h2>Step 1: List Your Appliances</h2>
      <ul>
        <li>TV</li>
        <li>Fans</li>
        <li>Lighting</li>
        <li>Fridge/Freezer</li>
        <li>Air Conditioner</li>
      </ul>

      <h2>Step 2: Calculate Wattage</h2>
      <p>Add the watt rating of all appliances you want to power simultaneously.</p>

      <h2>Step 3: Choose the Right Inverter</h2>
      <ul>
        <li>1KVA – Basic lighting & TV</li>
        <li>3KVA – Small apartment</li>
        <li>5KVA – Standard home</li>
        <li>10KVA – Large home/office</li>
      </ul>

      <p>Proper sizing prevents battery damage and inverter shutdown.</p>
    `,
    tags: [
      "Solar Sizing",
      "Energy Planning",
      "Inverter Guide",
      "Nigeria Power",
    ],
  },

  {
    id: 3,
    slug: "cctv-installation-guide",
    title: "CCTV Installation Guide: Protecting Your Property 24/7",
    author: "KingsTech-Solutions",
    date: "January 28, 2025",
    readTime: "6 min read",
    category: "Security",
    image: "/assets/images/cctv.jpeg",
    excerpt:
      "Understand camera types, storage options, and where to place cameras for maximum security coverage.",
    content: `
      <p>CCTV cameras are one of the most effective security solutions for homes and businesses.</p>

      <h2>Camera Placement</h2>
      <ul>
        <li>Entrance gate</li>
        <li>Parking area</li>
        <li>Backyard</li>
        <li>Hallways</li>
      </ul>

      <h2>Camera Types</h2>
      <ul>
        <li>Dome Cameras – indoor</li>
        <li>Bullet Cameras – outdoor</li>
        <li>PTZ Cameras – large compounds</li>
      </ul>

      <p>Proper positioning matters more than camera quantity.</p>
    `,
    tags: ["CCTV", "Security", "Surveillance", "Home Protection"],
  },

  {
    id: 4,
    slug: "inverter-tripping-causes",
    title: "Why Your Inverter Keeps Tripping — Common Causes & Fix",
    author: "KingsTech-Solutions",
    date: "January 20, 2025",
    readTime: "5 min read",
    category: "Troubleshooting",
    image: "https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg",
    excerpt:
      "Frequent inverter shutdowns? Learn the real reasons and how proper wiring and load calculation fixes it permanently.",
    content: `
      <p>If your inverter keeps going off, the problem is usually installation related.</p>

      <h2>Common Causes</h2>
      <ul>
        <li>Overload</li>
        <li>Wrong battery capacity</li>
        <li>Bad wiring</li>
        <li>Short circuit</li>
      </ul>

      <h2>Solution</h2>
      <p>Proper load calculation and professional installation eliminates most inverter problems.</p>
    `,
    tags: ["Inverter Problems", "Troubleshooting", "Power Backup"],
  },

  {
    id: 5,
    slug: "electric-fence-vs-cctv",
    title: "Electric Fencing vs CCTV: Which Security Solution Do You Need?",
    author: "KingsTech-Solutions",
    date: "January 18, 2025",
    readTime: "6 min read",
    category: "Security",
    image: "/assets/images/electric-fences.jpeg",
    excerpt:
      "Both are powerful security tools, but they serve different purposes. Here’s how to choose the right one for your property.",
    content: `
      <h2>Electric Fence</h2>
      <p>Prevents intrusion physically.</p>

      <h2>CCTV</h2>
      <p>Records activities and identifies intruders.</p>

      <h2>Best Option</h2>
      <p>Combining both gives maximum security coverage.</p>
    `,
    tags: ["Electric Fence", "CCTV", "Security Systems"],
  },

  {
    id: 6,
    slug: "benin-projects",
    title: "Benin City Perimeter Security Project (Fence + CCTV)",
    author: "KingsTech-Solutions",
    date: "January 15, 2025",
    readTime: "4 min read",
    category: "Projects",
    image: "/assets/images/benin-project.jpeg",
    excerpt:
      "See how we secured a full compound using electric fencing and smart surveillance monitoring.",
    content: `
      <p>We deployed a full perimeter protection system combining electric fencing and CCTV surveillance.</p>

      <ul>
        <li>Complete perimeter electric fence</li>
        <li>Night vision cameras</li>
        <li>Remote phone monitoring</li>
      </ul>

      <p>The property now enjoys 24-hour monitored security.</p>
    `,
    tags: ["Security Project", "Electric Fence", "CCTV Installation"],
  },
];

const BlogPostPage = () => {
  const { slug } = useParams();

  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog Post Not Found
            </h1>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedPosts = blogPosts
    .filter((post) => post.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-green-700 via-green-600 to-green-500">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {blogPost.title}
            </h1>
            <p className="text-xl md:text-2xl text-green-50 max-w-2xl mx-auto font-maven">
              {blogPost.category}
            </p>
          </div>
        </section>

        <section className="bg-white py-4 border-b font-maven">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Link
                to="/blog"
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Blog</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-green-600">
                Blog
              </Link>
              <span className="text-gray-900 font-medium line-clamp-1">
                {blogPost.title}
              </span>
            </div>
          </div>
        </section>

        <article className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-4">
                <span className="inline-block px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                  {blogPost.category}
                </span>
              </div>
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {blogPost.title}
              </h1>
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
                <img
                  src={blogPost.image}
                  alt={blogPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="flex items-center gap-4 mb-12 pb-8 border-b">
                <span className="text-gray-600 font-medium flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share:
                </span>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div> */}
              {/* Article Content */}{" "}
              <div
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.75",
                  color: "#374151",
                }}
              />
              {/* Tags */}
              <div className="mb-12 pb-12 border-b">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Tags:
                </h3>
                <div className="flex flex-wrap gap-2 font-maven">
                  {blogPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-green-100 hover:text-green-700 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Author Section */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                <div className="flex gap-6 items-start">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    KTS
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {blogPost.author}
                    </h3>
                    <p className="text-gray-600 font-maven">
                      Expert team at KingsTech-Solutionsr, dedicated to
                      providing valuable insights on solar energy solutions and
                      helping Nigerians achieve energy independence.
                    </p>
                  </div>
                </div>
              </div>
              {/* CTA Section */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-center text-white mb-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Go Solar?</h3>
                <p className="text-green-50 mb-6 font-maven">
                  Get a free consultation and quote from our certified solar
                  experts
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center font-maven">
                  <Button
                    className="bg-white text-green-700 hover:bg-gray-100"
                    size="lg"
                    asChild
                  >
                    <a
                      href="https://api.whatsapp.com/send/?text=Hi%20Felicity%20Solar,%20I%20need%20a%20free%20quote&phone=2348171479561"
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

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Related Articles
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">
                          {post.date}
                        </p>
                        <h3 className="text-lg font-bold text-gray-900 hover:text-green-600 transition-colors">
                          {post.title}
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

export default BlogPostPage;
