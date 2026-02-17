import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";

import { categories, products } from "@/data/services";
import type { ProductCategory } from "@/data/services";

const WHATSAPP_NUMBER = "2348171479561";
const WHATSAPP_MESSAGE = "Hi KingsTech-Solution, I need a free quote";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const isValidCategory = (id: string): id is ProductCategory => {
  return categories.some((cat) => cat.id === id);
};

interface CategoryTabsProps {
  activeTab: ProductCategory;
  onTabChange: (id: ProductCategory) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeTab,
  onTabChange,
}) => (
  <div className="hidden md:flex justify-center gap-3 flex-wrap" role="tablist">
    {categories.map((category) => {
      const Icon = category.icon;
      const isActive = activeTab === category.id;

      return (
        <button
          key={category.id}
          role="tab"
          aria-selected={isActive}
          aria-controls={`product-panel-${category.id}`}
          id={`tab-${category.id}`}
          onClick={() => onTabChange(category.id)}
          className={`
            flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all font-maven
            ${
              isActive
                ? "bg-green-600 text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }
          `}
        >
          <Icon className="w-5 h-5" />
          <span>{category.name}</span>
        </button>
      );
    })}
  </div>
);

interface CategorySelectProps {
  activeTab: ProductCategory;
  onTabChange: (id: ProductCategory) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  activeTab,
  onTabChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeCategory = categories.find((cat) => cat.id === activeTab);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (id: ProductCategory) => {
    onTabChange(id);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-green-600 text-white px-6 py-3 rounded-full font-medium flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        <span>{activeCategory?.name || "Select category"}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeTab === category.id;

            return (
              <button
                key={category.id}
                onClick={() => handleSelect(category.id)}
                className={`
                  w-full flex items-center space-x-3 px-6 py-4 text-left
                  transition-colors font-maven
                  ${
                    isActive
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }
                  ${!isActive && "border-b border-gray-100 last:border-0"}
                `}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? "text-green-600" : "text-gray-500"
                  }`}
                />
                <span className="flex-1 font-medium">{category.name}</span>
                {isActive && <CheckCircle className="w-5 h-5 text-green-600" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

interface ProductDisplayProps {
  product: (typeof products)[ProductCategory];
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    <div className="relative order-2 lg:order-1">
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 md:p-8">
        <img
          src={product.featured.image}
          alt={product.featured.name}
          className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[500px] object-contain mx-auto"
          loading="lazy"
        />
      </div>

      <div className="absolute -bottom-4 right-2 sm:-bottom-5 sm:-right-5 md:-bottom-6 md:-right-6 bg-white rounded-xl shadow-lg p-3 sm:p-4 border-2 border-green-100 max-w-[180px] sm:max-w-none">
        <Badge className="bg-green-600 mb-1 sm:mb-2 text-xs sm:text-sm">
          {product.additional.tag}
        </Badge>
        <p className="font-semibold text-xs sm:text-sm text-gray-900 leading-tight">
          {product.additional.name}
        </p>
      </div>
    </div>

    <div className="order-1 lg:order-2">
      <div className="mb-4 sm:mb-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
          {product.featured.name}
        </h3>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl font-maven">
          {product.subtitle}
        </p>
      </div>

      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-maven">
        {product.featured.description}
      </p>

      <div className="space-y-3 mb-6 sm:mb-8">
        <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-2 sm:mb-4">
          Key Features:
        </h4>
        {product.featured.specs.map((spec, index) => (
          <div key={index} className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm sm:text-base font-maven">
              {spec}
            </span>
          </div>
        ))}
      </div>

      <Button
        size="lg"
        className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white group"
        asChild
      >
        <Link
          to={product.link}
          className="flex items-center justify-center sm:justify-start"
        >
          {product.cta}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  </div>
);

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<ProductCategory>("panels");

  const activeProduct = useMemo(() => {
    if (isValidCategory(activeTab) && products[activeTab]) {
      return products[activeTab];
    }

    return products.panels ?? products[categories[0]?.id];
  }, [activeTab]);

  return (
    <section className="py-12 md:py-20 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="text-green-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Kings Tech Solutions Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
            Complete Energy & Security Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-maven px-2">
            Solar, CCTV, Electrical Wiring & Security Solutions — All in One
            Place.
          </p>
          <div className="w-20 h-0.5 bg-green-600 rounded-full mx-auto mt-4" />
        </div>

        <div className="mb-10 md:mb-12">
          <CategorySelect activeTab={activeTab} onTabChange={setActiveTab} />
          <CategoryTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <div
          role="tabpanel"
          id={`product-panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
        >
          <ProductDisplay product={activeProduct} />
        </div>

        <div className="mt-12 sm:mt-16 text-center font-maven px-4">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Need help choosing the right product?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-green-600 text-green-600 hover:bg-green-50"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Get Expert Advice
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
