import {
  Shield,
  Users,
  Heart,
  TrendingUp,
  Globe,
  Zap,
  type LucideIcon,
} from "lucide-react";

// ---------- Types ----------
export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface Stat {
  number: string;
  label: string;
}

// ---------- Data ----------
export const values: Value[] = [
  {
    icon: Shield,
    title: "Quality First",
    description:
      "We never compromise on quality. Every product meets international standards and undergoes rigorous testing.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Your satisfaction drives everything we do. We listen, adapt, and deliver solutions that exceed expectations.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We conduct business with honesty and transparency, building lasting relationships based on trust.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We embrace new technologies and continuously improve our products and services.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description:
      "We're committed to environmental responsibility and promoting clean, renewable energy solutions.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our business, from products to customer service.",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2023",
    title: "Company Founded",
    description:
      "Kings Tech Solutions was established in Lagos, Nigeria with a vision to provide reliable solar energy solutions to homes and businesses.",
  },
  {
    year: "2024",
    title: "Expanded Operations",
    description:
      "Opened service centers across major cities, bringing our expertise closer to customers nationwide.",
  },
  {
    year: "2025",
    title: "Product Innovation",
    description:
      "Launched advanced solar inverter and battery systems, setting new standards for efficiency and reliability.",
  },
  {
    year: "2026",
    title: "Growing Trust",
    description:
      "Served over 100+ satisfied customers and established partnerships with certified installers across Nigeria.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Engr. Okeke Kingsley Obinna",
    role: "Founder & Chief Executive Officer",
    image: "/assets/images/ceo.jpeg",
    description:
      "Visionary leader dedicated to providing reliable energy and security solutions across Nigeria, including solar systems, CCTV, electric fencing, and electrical installations.",
  },
];

export const stats: Stat[] = [
  { number: "4+", label: "Years of Excellence" },
  { number: "12+", label: "Service Centers" },
  { number: "100+", label: "Happy Customers" },
  { number: "60+", label: "Certified Installers" },
  { number: "95%", label: "Customer Satisfaction" },
  { number: "24/7", label: "Support Available" },
];

export const locations: string[] = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Kano",
  "Ibadan",
  "Kaduna",
  "Enugu",
  "Benin",
  "Jos",
  "Calabar",
  "Warri",
  "Asaba",
];
