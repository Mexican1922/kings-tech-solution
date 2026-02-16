import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import {
  COMPANY_NAME,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_PHONE_ALT,
  COMPANY_ADDRESS,
} from "@/lib/constant";

interface LinkItem {
  name: string;
  href: string;
}

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

const CURRENT_YEAR = new Date().getFullYear();

const COMPANY_LINKS: LinkItem[] = [
  { name: "About Us", href: "/about-us" },
  { name: "Project Showcase", href: "/project-showcase" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Find Installers", href: "/find-installers" },
];

const PRODUCT_LINKS: LinkItem[] = [
  { name: "Solar Panels", href: "/products/felicity-solar-panels" },
  { name: "Solar Batteries", href: "/products/felicity-solar-batteries" },
  { name: "Solar Inverters", href: "/products/felicity-solar-inverter" },
  { name: "Charge Controllers", href: "/products/felicity-charge-controller" },
  {
    name: "Solar Street Lights",
    href: "/products/felicity-solar-street-light",
  },
  { name: "Solar Lights", href: "/products/felicity-solar-lights" },
];

const SERVICE_LINKS: LinkItem[] = [
  { name: "CCTV Installation", href: "/services/cctv-installation" },
  { name: "Electric Fencing", href: "/services/electric-fencing" },
  { name: "House Wiring", href: "/services/house-wiring" },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/__kingstech_solutions?igsh=OXVvNGY3ZjdjNGo3&utm_source=qr",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kingsley-okeke-10240a319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    label: "LinkedIn",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@__kingstech_solutions?_r=1&_t=ZN-93sxw6ueIkg",
    label: "TikTok",
  },
];

const LinkSection: React.FC<{ title: string; links: LinkItem[] }> = ({
  title,
  links,
}) => (
  <div>
    <h4 className="text-white font-semibold mb-4">{title}</h4>
    <nav aria-label={title}>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

const SocialLinks: React.FC = () => (
  <div className="flex space-x-4">
    {SOCIAL_LINKS.map((social) => {
      const Icon = social.icon;
      return (
        <a
          key={social.label}
          href={social.href}
          aria-label={`Visit our ${social.label} page`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-green-500 transition-colors"
        >
          <Icon className="w-5 h-5" />
        </a>
      );
    })}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <img
              src="/color-replaced.png"
              alt={`${COMPANY_NAME} Logo`}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm mb-4">
              Powering homes and businesses with smart energy and security
              solutions across Nigeria. Specializing in solar systems, CCTV
              surveillance, electric fencing, and electrical installations since
              2023.
            </p>
            <SocialLinks />
          </div>

          <LinkSection title="Company" links={COMPANY_LINKS} />

          <LinkSection title="Products" links={PRODUCT_LINKS} />

          <LinkSection title="Services" links={SERVICE_LINKS} />

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}
                    className="hover:text-green-500 transition-colors block"
                  >
                    {COMPANY_PHONE}
                  </a>
                  <a
                    href={`tel:${COMPANY_PHONE_ALT?.replace(/\s/g, "")}`}
                    className="hover:text-green-500 transition-colors block"
                  >
                    {COMPANY_PHONE_ALT}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="hover:text-green-500 transition-colors"
                >
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{COMPANY_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            Copyright © {CURRENT_YEAR} All Rights Reserved | Developed by{" "}
            <a
              href="https://wa.me/2349015599954?text=Hello%20ValCodes,%20I%20want%20to%20build%20a%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              ValCodes
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
