import {
  Shield,
  Users,
  Heart,
  TrendingUp,
  Globe,
  Zap,
  type LucideIcon,
} from "lucide-react";

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
      "Kings Tech Solutions was established in Lagos, Nigeria with a vision to provide reliable solar energy systems, including panels, inverters, and batteries, to local homes and businesses.",
  },
  {
    year: "2024",
    title: "First Projects & Service Expansion",
    description:
      "Completed initial solar installations and began offering CCTV, electric fencing, and house wiring services to meet growing client needs for integrated security and energy solutions.",
  },
  {
    year: "2025",
    title: "Growing Customer Base",
    description:
      "Served 50+ satisfied customers across Lagos and nearby states, built relationships with certified installers, and introduced solar street lights for community projects.",
  },
  {
    year: "2026",
    title: "Building Trust & Reach",
    description:
      "Continued to expand our portfolio with more efficient inverters and batteries, while strengthening our reputation as a reliable partner for homes and small businesses.",
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
  { number: "50+", label: "Happy Customers" },
  { number: "15+", label: "Certified Installers" },
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
