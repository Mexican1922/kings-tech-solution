import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Star,
  CheckCircle,
  Package,
  Shield,
  Truck,
} from "lucide-react";
import {
  getProduct,
  getProductsByCategory,
  type ProductCategory,
} from "@/data/services";
import { COMPANY_NAME, COMPANY_PHONE } from "@/lib/constant";
import { useState } from "react";

const ProductDetailPage = () => {
  const { category, productSlug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Map URL slugs to category keys
  const slugToCategory: Record<string, ProductCategory> = {
    "felicity-solar-panels": "panels",
    "felicity-solar-batteries": "batteries",
    "felicity-solar-inverter": "inverters",
    "felicity-charge-controller": "controllers",
    "felicity-solar-street-light": "streetlights",
  };

  const categoryId = slugToCategory[category as string] as ProductCategory;
  const product = getProduct(categoryId, productSlug as string);
  const relatedProducts = getProductsByCategory(categoryId)
    .filter((p) => p.slug !== productSlug)
    .slice(0, 4);

  const whatsappNumber = COMPANY_PHONE.replace(/\D/g, "");

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Product Not Found
            </h1>
            <Button asChild>
              <Link to={`/products/${category}`}>Back to Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Fallback images if product.images is not provided
  const images = product.images || [
    product.image,
    product.image,
    product.image,
  ];

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
              <Package className="w-10 h-10 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {product.name}
            </h1>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="bg-white py-4 border-b font-maven">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Link
                to={`/products/${category}`}
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
                aria-label={`Back to ${category} products`}
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm">Back to Products</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                to={`/products/${category}`}
                className="hover:text-green-600"
              >
                Products
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-gray-900 font-medium line-clamp-1">
                {product.name}
              </span>
            </div>
          </div>
        </section>

        {/* Main Product Details */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Image Gallery */}
              <div>
                <div className="mb-4 bg-gray-100 rounded-lg overflow-hidden aspect-square">
                  <img
                    src={images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`bg-gray-100 rounded-lg overflow-hidden aspect-square border-2 transition-all ${
                        selectedImage === index
                          ? "border-green-600"
                          : "border-transparent hover:border-gray-300"
                      }`}
                      aria-label={`View image ${index + 1} of ${product.name}`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-contain p-2"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  {product.badge && (
                    <Badge className="bg-green-600">{product.badge}</Badge>
                  )}
                  {product.inStock ? (
                    <Badge
                      variant="outline"
                      className="border-green-600 text-green-600"
                    >
                      In Stock
                    </Badge>
                  ) : (
                    <Badge
                      variant="outline"
                      className="border-red-600 text-red-600"
                    >
                      Out of Stock
                    </Badge>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>

                <div className="flex items-center gap-2 mb-6 font-maven">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="mb-6 font-maven">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-green-600">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xl text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-6 font-maven">
                  {product.shortDescription}
                </p>

                <div className="flex gap-4 mb-8">
                  <Button
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white text-lg py-6"
                    asChild
                  >
                    <a
                      href={`https://api.whatsapp.com/send/?text=Hi%20${encodeURIComponent(
                        COMPANY_NAME,
                      )},%20I%20want%20to%20order%20${encodeURIComponent(
                        product.name,
                      )}&phone=${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order on WhatsApp
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 text-lg py-6 font-maven"
                    asChild
                  >
                    <Link to="/contact-us">Request Quote</Link>
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <Package
                      className="w-6 h-6 text-green-600 mx-auto mb-2"
                      aria-hidden="true"
                    />
                    <p className="text-xs text-gray-600">Genuine Product</p>
                  </div>
                  <div className="text-center">
                    <Shield
                      className="w-6 h-6 text-green-600 mx-auto mb-2"
                      aria-hidden="true"
                    />
                    <p className="text-xs text-gray-600">Warranty Included</p>
                  </div>
                  <div className="text-center">
                    <Truck
                      className="w-6 h-6 text-green-600 mx-auto mb-2"
                      aria-hidden="true"
                    />
                    <p className="text-xs text-gray-600">Free Delivery*</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Key Features:
                  </h2>
                  <div className="space-y-3 font-maven">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle
                          className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {(product.warranty || product.dimensions || product.weight) && (
                  <div className="border-t pt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Specifications:
                    </h3>
                    <div className="space-y-2 text-sm">
                      {product.warranty && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Warranty:</span>
                          <span className="font-semibold text-gray-900 font-maven">
                            {product.warranty}
                          </span>
                        </div>
                      )}
                      {product.dimensions && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Dimensions:</span>
                          <span className="font-semibold text-gray-900 font-maven">
                            {product.dimensions}
                          </span>
                        </div>
                      )}
                      {product.weight && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Weight:</span>
                          <span className="font-semibold text-gray-900 font-maven">
                            {product.weight}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Full Description & Specs */}
            <div className="max-w-7xl mx-auto mt-12">
              <div className="border-t pt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Product Description:
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 font-maven">
                  {product.description}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Technical Specifications:
                </h3>
                <div className="grid md:grid-cols-2 gap-4 font-maven">
                  {product.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <CheckCircle
                        className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Related Products
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedProducts.map((relatedProduct) => (
                    <Link
                      key={relatedProduct.id}
                      to={`/products/${category}/${relatedProduct.slug}`}
                      className="group"
                    >
                      <Card className="hover:shadow-xl transition-all">
                        <div className="relative h-48 overflow-hidden bg-gray-100">
                          <img
                            src={relatedProduct.image}
                            alt={relatedProduct.name}
                            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform"
                            loading="lazy"
                          />
                          {relatedProduct.badge && (
                            <Badge className="absolute top-2 right-2 bg-green-600">
                              {relatedProduct.badge}
                            </Badge>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                            {relatedProduct.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Star
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              aria-hidden="true"
                            />
                            <span className="text-sm text-gray-600">
                              {relatedProduct.rating}
                            </span>
                          </div>
                          <p className="text-lg font-bold text-green-600 font-maven">
                            {relatedProduct.price}
                          </p>
                        </CardContent>
                      </Card>
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

export default ProductDetailPage;
