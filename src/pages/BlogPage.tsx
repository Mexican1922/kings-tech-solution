import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { COMPANY_NAME } from "@/lib/constant";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Solar Installations in Lagos: Powering Homes & Businesses",
      slug: "lagos-solar-projects",
      excerpt:
        "Take a look at some of our completed solar installations across Lagos — from apartments to offices now enjoying 24/7 electricity.",
      image: "/assets/images/work.jpeg",
      date: "February 12, 2025",
      category: "Projects",
    },
    {
      id: 2,
      title: "House Wiring: A Complete Guide for Nigerian Homes",
      slug: "house-wiring-guide",
      excerpt:
        "Learn the essentials of safe, code-compliant house wiring. From conduit installation to distribution boards, we cover everything you need to know.",
      image: "/assets/images/house-wiring.jpeg",
      date: "February 5, 2025",
      category: "Electrical Guide",
    },
    {
      id: 3,
      title: "CCTV Installation Guide: Protecting Your Property 24/7",
      slug: "cctv-installation-guide",
      excerpt:
        "Understand camera types, storage options, and where to place cameras for maximum security coverage.",
      image: "/assets/images/cctv.jpeg",
      date: "January 28, 2025",
      category: "Security",
    },
    {
      id: 4,
      title: "Why Your Inverter Keeps Tripping — Common Causes & Fix",
      slug: "inverter-tripping-causes",
      excerpt:
        "Frequent inverter shutdowns? Learn the real reasons and how proper wiring and load calculation fixes it permanently.",
      image: "https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg",
      date: "January 20, 2025",
      category: "Troubleshooting",
    },
    {
      id: 5,
      title: "Electric Fencing vs CCTV: Which Security Solution Do You Need?",
      slug: "electric-fence-vs-cctv",
      excerpt:
        "Both are powerful security tools, but they serve different purposes. Here’s how to choose the right one for your property.",
      image: "/assets/images/electric-fences.jpeg",
      date: "January 18, 2025",
      category: "Security",
    },
    {
      id: 6,
      title: "Benin City Perimeter Security Project (Fence + CCTV)",
      slug: "benin-projects",
      excerpt:
        "See how we secured a full compound using electric fencing and smart surveillance monitoring.",
      image: "/assets/images/benin-project.jpeg",
      date: "January 15, 2025",
      category: "Projects",
    },
  ];

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can add actual subscription logic here (e.g., API call)
    alert("Thank you for subscribing! We'll keep you updated.");
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-green-700 via-green-600 to-green-500">
          {/* Pattern Overlay */}
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
              Insights & Innovations
            </h1>
            <p className="text-xl md:text-2xl text-green-50 max-w-2xl mx-auto font-maven">
              Stay informed with the latest solar industry news, expert tips,
              and success stories from {COMPANY_NAME}.
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="bg-white border-b py-4 font-maven">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link
                to="/"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-400" aria-hidden="true">
                /
              </span>
              <span className="text-gray-900 font-medium">Blog</span>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {blogPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
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
                        <time dateTime={post.date}>{post.date}</time>
                        <span aria-hidden="true">•</span>
                        <span>{post.category}</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3">
                        <Link
                          to={`/blog/${post.slug}`}
                          className="hover:text-green-600 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3 font-maven">
                        {post.excerpt}
                      </p>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-green-600 hover:text-green-700 font-medium inline-flex items-center gap-2"
                        aria-label={`Read more about ${post.title}`}
                      >
                        Read More
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
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 max-w-2xl mx-auto">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-12 h-12 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  No Blog Posts Yet
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're working on bringing you valuable insights about solar
                  energy. Check back soon for our latest articles and updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Go to Homepage
                  </Link>
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 font-medium rounded-lg border border-gray-300 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Subscribe to our newsletter for the latest solar energy insights
                and updates from {COMPANY_NAME}.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              >
                <label htmlFor="email-input" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
