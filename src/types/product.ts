import type { ElementType } from "react";

export type ProductCategory =
  | "panels"
  | "batteries"
  | "inverters"
  | "controllers"
  | "streetlights"
  | "cctv"
  | "wiring"
  | "fencing";

export interface CategoryHighlight {
  title: string;
  subtitle: string;
  cta: string;
  link: string;
  featured: {
    name: string;
    image: string;
    description: string;
    specs: string[];
  };
  additional: {
    name: string;
    tag: string;
  };
}

export interface Product {
  id: string;
  category: ProductCategory;

  name: string;
  slug: string;

  price: string;
  originalPrice?: string;

  image: string;
  images?: string[];

  rating: number;
  reviews: number;
  badge?: string;
  inStock: boolean;

  shortDescription: string;
  description: string;

  features: string[];
  specs: string[];

  warranty?: string;
  dimensions?: string;
  weight?: string;
}

export interface CategoryItem {
  id: ProductCategory;
  name: string;
  icon: ElementType;
}
