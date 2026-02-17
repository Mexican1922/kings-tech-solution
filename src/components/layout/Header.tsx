import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type SimpleNavItem = { name: string; href: string };

type GroupedDropdownItem = {
  group: string;
  items: SimpleNavItem[];
};

type ProjectsDropdownItem = SimpleNavItem;

type NavLink =
  | SimpleNavItem
  | {
      name: string;
      dropdown: (GroupedDropdownItem | ProjectsDropdownItem)[];
    };

const WHATSAPP_NUMBER = "2348137306375";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20KingsTech-Solution%20I%20need%20a%20free%20quote`;

const NAVIGATION_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  {
    name: "Products",
    dropdown: [
      { name: "All Products", href: "/products" },
      {
        group: "Solar Products",
        items: [
          { name: "Solar Panels", href: "/products/felicity-solar-panels" },
          {
            name: "Solar Batteries",
            href: "/products/felicity-solar-batteries",
          },
          { name: "Inverters", href: "/products/felicity-solar-inverter" },
          {
            name: "Charge Controllers",
            href: "/products/felicity-charge-controller",
          },
          {
            name: "Solar Street Lights",
            href: "/products/felicity-solar-street-light",
          },
        ],
      },
      {
        group: "Security Solutions",
        items: [
          { name: "CCTV Systems", href: "/services/cctv-installation" },
          { name: "House Wiring", href: "/services/house-wiring" },
          { name: "Electric Fencing", href: "/services/electric-fencing" },
        ],
      },
    ],
  },
  { name: "Find Installers", href: "/find-installers" },
  {
    name: "Projects",
    dropdown: [
      { name: "Lagos", href: "/project-showcase?city=lagos" },
      { name: "Abuja", href: "/project-showcase?city=abuja" },
      { name: "Benin", href: "/project-showcase?city=benin" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
];

const isSimpleLink = (item: NavLink): item is SimpleNavItem => "href" in item;

const isGroupedDropdownItem = (
  item: GroupedDropdownItem | ProjectsDropdownItem,
): item is GroupedDropdownItem => "group" in item;

interface DesktopDropdownProps {
  link: Extract<
    NavLink,
    { dropdown: (GroupedDropdownItem | ProjectsDropdownItem)[] }
  >;
  isOpen: boolean;
  onClose: () => void;
  isScrolled: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const DesktopDropdown: React.FC<DesktopDropdownProps> = ({
  link,
  isOpen,
  onClose,
  isScrolled,
  onMouseEnter,
  onMouseLeave,
}) => {
  const isProjects = link.name === "Projects";

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => (isOpen ? onClose() : onMouseEnter())}
        className={`flex items-center gap-1 font-medium transition-colors hover:text-green-600 ${
          isScrolled ? "text-gray-900" : "text-white"
        }`}
      >
        {link.name}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white rounded-2xl shadow-xl border border-gray-100 z-50"
        >
          {isProjects ? (
            <div className="w-[500px] max-w-[60vw] p-8">
              <h3 className="text-xl font-bold text-green-600 mb-3">
                Trusted Across Cities
              </h3>
              <p className="text-gray-600 mb-6 text-sm font-maven">
                We've delivered successful solar and electrical projects in
                major cities.
              </p>
              <div className="flex items-center gap-10">
                {link.dropdown.map((city) => {
                  const cityItem = city as ProjectsDropdownItem;
                  return (
                    <Link
                      key={cityItem.name}
                      to={cityItem.href}
                      role="menuitem"
                      onClick={onClose}
                      className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                    >
                      <img
                        src={`/cities/${cityItem.name.toLowerCase()}.png`}
                        alt={cityItem.name}
                        className="w-14 h-14 object-contain"
                      />
                      <span className="text-gray-700 font-medium">
                        {cityItem.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="w-[500px] max-w-[40vw] p-10">
              {link.dropdown.some((item) => !isGroupedDropdownItem(item)) && (
                <div className="mb-6 pb-4 border-b border-gray-200">
                  {link.dropdown.map((item) => {
                    if (!isGroupedDropdownItem(item)) {
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          role="menuitem"
                          onClick={onClose}
                          className="block text-gray-700 hover:text-green-600 transition-colors text-lg font-semibold"
                        >
                          {item.name}
                        </Link>
                      );
                    }
                    return null;
                  })}
                </div>
              )}
              <div className="grid grid-cols-2 gap-12">
                {link.dropdown.map((item) => {
                  if (isGroupedDropdownItem(item)) {
                    return (
                      <div key={item.group} role="group">
                        <h4 className="text-sm font-semibold text-green-600 mb-4 uppercase tracking-wide">
                          {item.group}
                        </h4>
                        <div className="space-y-3">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              role="menuitem"
                              onClick={onClose}
                              className="block text-gray-700 hover:text-green-600 transition-colors text-lg"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

interface MobileNavProps {
  links: NavLink[];
  onLinkClick: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ links, onLinkClick }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (name: string) => {
    setOpenSections((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <nav className="flex flex-col gap-2 mt-8">
      {links.map((link) => {
        if (isSimpleLink(link)) {
          return (
            <Link
              key={link.name}
              to={link.href}
              onClick={onLinkClick}
              className="block font-medium text-gray-900 hover:text-green-600 transition-colors py-2"
            >
              {link.name}
            </Link>
          );
        } else {
          const isOpen = openSections[link.name] || false;
          return (
            <div
              key={link.name}
              className="border-b border-gray-100 last:border-0"
            >
              <button
                onClick={() => toggleSection(link.name)}
                className="flex items-center justify-between w-full py-3 font-medium text-gray-900 hover:text-green-600 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="pl-4 pb-3 space-y-3">
                  {link.dropdown.map((item) => {
                    if (isGroupedDropdownItem(item)) {
                      return (
                        <div key={item.group}>
                          <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mt-2 first:mt-0">
                            {item.group}
                          </p>
                          <div className="space-y-2 mt-1">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                onClick={onLinkClick}
                                className="block text-sm text-gray-600 hover:text-green-600 transition-colors pl-2"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={onLinkClick}
                          className="block text-sm text-gray-600 hover:text-green-600 transition-colors py-1"
                        >
                          {item.name}
                        </Link>
                      );
                    }
                  })}
                </div>
              )}
            </div>
          );
        }
      })}
      <Button
        className="bg-green-600 hover:bg-green-700 text-white mt-4"
        asChild
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onLinkClick}
        >
          Get a Quote
        </a>
      </Button>
    </nav>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const closeDropdown = () => setOpenDropdown(null);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {" "}
          {/* Increased header height */}
          <Link to="/" className="flex items-center shrink-0">
            <div className="p-1 rounded-md">
              <img
                src="/logo.svg"
                alt="KingsTech-Solutions Logo"
                className="h-[120px] md:h-[138px] w-auto" /* Larger logo */
              />
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-8 font-maven text-lg">
            {NAVIGATION_LINKS.map((link) => {
              if (isSimpleLink(link)) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`font-medium transition-colors hover:text-green-600 ${
                      isScrolled ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              } else {
                return (
                  <DesktopDropdown
                    key={link.name}
                    link={link}
                    isOpen={openDropdown === link.name}
                    onClose={closeDropdown}
                    isScrolled={isScrolled}
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              }
            })}
          </nav>
          <div className="hidden lg:block">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Get a Quote
              </a>
            </Button>
          </div>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] sm:w-[350px] md:w-[400px]"
            >
              <MobileNav
                links={NAVIGATION_LINKS}
                onLinkClick={() => setMobileMenuOpen(false)}
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
