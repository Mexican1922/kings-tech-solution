import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Shield } from "lucide-react";
import { COMPANY_NAME } from "@/lib/constant";
import { productsDatabase } from "@/data/services";

const ProductsPage = () => {
  const categories = [
    {
      name: "Solar Products",
      slug: "felicity-solar-panels",
      icon: Sun,
      description:
        "High‑efficiency solar panels, inverters, batteries, charge controllers, and street lights for homes and businesses.",
      productCount: getProductCountForGroup("Solar Products"),
      link: "/products/felicity-solar-panels",
    },
    {
      name: "Security Solutions",
      slug: "cctv-installation",
      icon: Shield,
      description:
        "Professional CCTV systems, electric fencing, and house wiring services to protect your property.",
      productCount: getProductCountForGroup("Security Solutions"),
      link: "/services/cctv-installation",
    },
  ];

  function getProductCountForGroup(groupName: string): number {
    if (groupName === "Solar Products") {
      const solarCategories = [
        "panels",
        "batteries",
        "inverters",
        "controllers",
        "streetlights",
      ];
      return solarCategories.reduce(
        (total, cat) =>
          total +
          (productsDatabase[cat as keyof typeof productsDatabase]?.products
            ?.length || 0),
        0,
      );
    } else if (groupName === "Security Solutions") {
      const securityCategories = ["cctv", "wiring", "fencing"];
      return securityCategories.reduce(
        (total, cat) =>
          total +
          (productsDatabase[cat as keyof typeof productsDatabase]?.products
            ?.length || 0),
        0,
      );
    }
    return 0;
  }

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
              Our Products & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-green-50 max-w-2xl mx-auto font-maven">
              Explore our range of high‑quality solar equipment and security
              systems from {COMPANY_NAME}.
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="bg-white border-b py-4 font-maven">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-gray-600 hover:text-green-600">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-gray-900 font-medium">Products</span>
            </div>
          </div>
        </section>

        {/* Category Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Browse by Category
                </h2>
                <p className="text-lg text-gray-600 font-maven">
                  Select a category to view available products and packages.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <Card
                      key={cat.name}
                      className="group hover:shadow-2xl transition-all border-2 hover:border-green-300 overflow-hidden"
                    >
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
                            <Icon className="w-10 h-10 text-green-600 group-hover:text-white transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {cat.name}
                            </h3>
                            <p className="text-gray-600 mb-4 font-maven">
                              {cat.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">
                                {cat.productCount} products available
                              </span>
                              <Button
                                asChild
                                className="bg-green-600 hover:bg-green-700 text-white"
                              >
                                <Link
                                  to={cat.link}
                                  className="flex items-center gap-2"
                                >
                                  View {cat.name}
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-maven">
              Contact our team for tailored advice and quotations for your
              specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                asChild
              >
                <a
                  href={`https://api.whatsapp.com/send/?text=Hi%20${encodeURIComponent(
                    COMPANY_NAME,
                  )},%20I%20need%20help%20choosing%20a%20product&phone=2348137306375`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with Expert
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
                asChild
              >
                <Link to="/contact-us">Request Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
