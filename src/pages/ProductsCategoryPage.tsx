import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import {
  productsDatabase,
  getProductsByCategory,
  type ProductCategory,
} from "@/data/services";
import { COMPANY_NAME } from "@/lib/constant";

const ProductsCategoryPage = () => {
  const { category, serviceType } = useParams();

  const isServiceRoute = window.location.pathname.startsWith("/services");

  const slugToCategory: Record<string, ProductCategory> = {
    // Solar Products
    "felicity-solar-panels": "panels",
    "felicity-solar-batteries": "batteries",
    "felicity-solar-inverter": "inverters",
    "felicity-charge-controller": "controllers",
    "felicity-solar-street-light": "streetlights",
    "felicity-solar-lights": "streetlights",
    // Services
    "cctv-installation": "cctv",
    "house-wiring": "wiring",
    "electric-fencing": "fencing",
  };

  const paramToUse = isServiceRoute ? serviceType : category;
  const categoryId =
    (slugToCategory[paramToUse as string] as ProductCategory) ||
    (paramToUse as ProductCategory);

  const categoryData = productsDatabase[categoryId];
  const products = getProductsByCategory(categoryId);

  if (!categoryData) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Category Not Found
            </h1>
            <p className="text-gray-600 mb-4">
              The requested category could not be found.
            </p>
            <Button asChild>
              <Link to="/">Go Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const Icon = categoryData.icon;

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-green-700 via-green-600 to-green-500">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {categoryData.title}
            </h1>
            <p className="text-xl md:text-2xl text-green-50 max-w-2xl mx-auto font-maven">
              {categoryData.subtitle}
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="bg-white py-4 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 font-maven">
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
              <span>/</span>
              <Link
                to={isServiceRoute ? "/services" : "/products"}
                className="hover:text-green-600"
              >
                {isServiceRoute ? "Services" : "Products"}
              </Link>
              <span className="text-gray-900 font-medium">
                {categoryData.title}
              </span>
            </div>
          </div>
        </section>

        {/* Products / Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {isServiceRoute
                    ? "Service Packages"
                    : `All ${categoryData.title}`}
                </h2>
                <p className="text-gray-600 font-maven">
                  Showing {products.length}{" "}
                  {isServiceRoute ? "package" : "product"}
                  {products.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Card
                    key={product.id}
                    className="group hover:shadow-2xl transition-all duration-300 border-gray-200 hover:border-green-300 overflow-hidden"
                  >
                    <Link
                      to={
                        isServiceRoute
                          ? "#" // No detail pages for services yet
                          : `/products/${category}/${product.slug}`
                      }
                    >
                      <div className="relative h-64 bg-gray-100 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.src =
                              "/assets/images/placeholder.jpeg";
                          }}
                        />
                        {product.badge && (
                          <Badge className="absolute top-4 right-4 bg-green-600 font-maven">
                            {product.badge}
                          </Badge>
                        )}
                        {product.inStock ? (
                          <Badge className="absolute top-4 left-4 bg-white text-green-600 border border-green-600">
                            In Stock
                          </Badge>
                        ) : (
                          <Badge className="absolute top-4 left-4 bg-gray-600">
                            Out of Stock
                          </Badge>
                        )}
                      </div>
                    </Link>

                    <CardHeader>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold text-gray-900">
                            {product.rating}
                          </span>
                          <span className="text-xs text-gray-500">
                            ({product.reviews})
                          </span>
                        </div>
                      </div>
                      <Link
                        to={
                          isServiceRoute
                            ? "#"
                            : `/products/${category}/${product.slug}`
                        }
                      >
                        <CardTitle className="text-lg leading-tight group-hover:text-green-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                          {product.name}
                        </CardTitle>
                      </Link>
                      <div className="mt-2">
                        <p className="text-2xl font-bold text-green-600 font-maven">
                          {product.price}
                        </p>
                        {product.originalPrice && (
                          <p className="text-sm text-gray-400 line-through font-maven">
                            {product.originalPrice}
                          </p>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-600 line-clamp-2 font-maven">
                        {product.shortDescription}
                      </p>

                      <div className="space-y-2 font-maven">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-600">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button
                          className="flex-1 bg-green-600 hover:bg-green-700"
                          size="sm"
                          asChild
                        >
                          <a
                            href={`https://api.whatsapp.com/send/?text=Hi%20${encodeURIComponent(
                              COMPANY_NAME,
                            )},%20I'm%20interested%20in%20${encodeURIComponent(
                              product.name,
                            )}&phone=2348137306375`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Order Now
                          </a>
                        </Button>
                        {!isServiceRoute && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-green-600 text-green-600 hover:bg-green-50 font-maven"
                            asChild
                          >
                            <Link to={`/products/${category}/${product.slug}`}>
                              Details
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {products.length === 0 && (
                <div className="text-center py-16">
                  <Icon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    No {isServiceRoute ? "Packages" : "Products"} Available
                  </h2>
                  <p className="text-gray-600 mb-8 font-maven">
                    {isServiceRoute ? "Service packages" : "Products"} will be
                    available soon.
                  </p>
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white"
                    asChild
                  >
                    <Link to="/">Browse Other Categories</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why {isServiceRoute ? "Choose Our Services" : "Choose Us"}?
                </h2>
                <p className="text-lg text-gray-600 font-maven">
                  Quality {isServiceRoute ? "services" : "products"} with
                  professional support from {COMPANY_NAME}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {isServiceRoute
                        ? "Professional Service"
                        : "Genuine Products"}
                    </h3>
                    <p className="text-gray-600 font-maven">
                      {isServiceRoute
                        ? "Certified professionals with proven track record"
                        : "100% authentic products from trusted manufacturers"}
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {isServiceRoute
                        ? "Quality Guaranteed"
                        : "Professional Installation"}
                    </h3>
                    <p className="text-gray-600 font-maven">
                      {isServiceRoute
                        ? "All work backed by warranty and quality assurance"
                        : "Expert installation by certified technicians"}
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Warranty & Support
                    </h3>
                    <p className="text-gray-600 font-maven">
                      Comprehensive warranty with ongoing technical support
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-green-600 to-green-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto font-maven">
              Our experts are ready to help you find the perfect{" "}
              {isServiceRoute ? "service package" : "solution"} for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center font-maven">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-gray-100"
                asChild
              >
                <a
                  href={`https://api.whatsapp.com/send/?text=Hi%20${encodeURIComponent(
                    COMPANY_NAME,
                  )},%20I%20need%20help%20choosing%20a%20${
                    isServiceRoute ? "service" : "product"
                  }&phone=2348137306375`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Chat with Expert
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700"
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

export default ProductsCategoryPage;
