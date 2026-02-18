import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Package } from "lucide-react";
import { COMPANY_NAME } from "@/lib/constant";

const projectsData = [
  {
    id: 1,
    slug: "lagos-project",
    title: "Complete Solar Installation for 4‑Bedroom Home in Ikeja",
    author: COMPANY_NAME,
    date: "February 2025",
    location: "Lagos",
    category: "Solar",
    image: "/assets/images/work.jpg",
    excerpt:
      "Designed and installed a 5KVA hybrid solar system with lithium batteries, powering all lights, fans, TVs, and fridge 24/7.",
    description: `
      <p>This project involved a complete solar power solution for a residential property in Ikeja, Lagos. The client wanted to eliminate generator noise and fuel costs while ensuring 24/7 power for essential appliances.</p>
      
      <h2>System Components</h2>
      <ul>
        <li>5KVA 48V hybrid inverter</li>
        <li>4 x 450W solar panels (1.8KW total)</li>
        <li>10KWh lithium batteries (10KWh total)</li>
        <li>Automatic changeover with grid/generator backup</li>
        <li>Full rewiring of dedicated loads to the inverter</li>
      </ul>

      <h2>Results</h2>
      <ul>
        <li>24/7 power for all lights, fans, TVs, refrigerator, and security lights</li>
        <li>Reduced generator runtime to only during extended cloudy periods</li>
        <li>Monthly fuel savings of over ₦80,000</li>
        <li>Silent and emission‑free operation</li>
      </ul>
    `,
    gallery: [
      "/assets/images/work.jpeg",
      "/assets/images/abuja-project.jpeg",
      "/assets/images/inverter-install.jpg",
    ],
    tags: ["Solar", "Lagos", "Residential", "Hybrid Inverter"],
  },
  {
    id: 2,
    slug: "ibadan-fencing-cctv",
    title: "Perimeter Electric Fencing & CCTV for Estate in Ibadan",
    author: COMPANY_NAME,
    date: "January 2025",
    location: "Ibadan",
    category: "Security",
    image: "/assets/images/electric-fences.jpeg",
    excerpt:
      "Full perimeter security solution including 8‑line electric fence and 16‑channel CCTV system with night vision.",
    description: `
      <p>A gated community in Ibadan required a robust perimeter security system to deter intruders and monitor activity.</p>
      
      <h2>Installation</h2>
      <ul>
        <li>8‑line electric fence around the entire perimeter (approx. 1.2km)</li>
        <li>16 high‑definition bullet cameras with night vision</li>
        <li>8‑channel NVR with 4TB storage</li>
        <li>Remote viewing via mobile app</li>
        <li>Integration with alarm system</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Significant reduction in attempted intrusions</li>
        <li>Residents can monitor their compound remotely</li>
        <li>Electric fence provides a visible deterrent</li>
      </ul>
    `,
    gallery: [
      "/assets/images/electric-fences.jpeg",
      "/assets/images/cctv4.jpeg",
      "/assets/images/security-control-room.jpg",
    ],
    tags: ["Electric Fence", "CCTV", "Ibadan", "Estate Security"],
  },
  {
    id: 3,
    slug: "abuja-project",
    title: "House Wiring & Inverter Backup for New Bungalow in Abuja",
    author: COMPANY_NAME,
    date: "December 2024",
    location: "Abuja",
    category: "Electrical",
    image: "/assets/images/house-wiring1.jpeg",
    excerpt:
      "Complete rewiring of a new build, including distribution board, sockets, lighting, and 3.5KVA inverter backup.",
    description: `
      <p>This project involved the complete electrical installation for a newly constructed bungalow in Abuja. The client required modern wiring, ample power outlets, and a reliable inverter backup system.</p>
      
      <h2>Scope of Work</h2>
      <ul>
        <li>Full conduit wiring for 3 bedrooms, living room, kitchen, and external lights</li>
        <li>Installation of a 20‑way distribution board with surge protection</li>
        <li>20+ double sockets placed strategically throughout the house</li>
        <li>LED lighting throughout with dimmer controls in selected areas</li>
        <li>3.5KVA inverter system with 200Ah deep‑cycle batteries</li>
        <li>Integration with the main grid for automatic switching</li>
      </ul>

      <h2>Results</h2>
      <ul>
        <li>Safe, code‑compliant electrical system</li>
        <li>Uninterrupted power for all critical loads during outages</li>
        <li>Modern, well‑lit home with plenty of outlets for appliances</li>
      </ul>
    `,
    gallery: [
      "/assets/images/house-wiring.jpeg",
      "/assets/images/abuja-project.jpeg",
      "/assets/images/inverter-install.jpg",
    ],
    tags: ["House Wiring", "Abuja", "Inverter Backup", "New Build"],
  },
  {
    id: 4,
    slug: "enugu-street-lights",
    title: "Solar Street Lights for Community Road in Enugu",
    author: COMPANY_NAME,
    date: "November 2024",
    location: "Enugu",
    category: "Solar",
    image: "/assets/images/street-lights.jpeg",
    excerpt:
      "Installation of 20 all‑in‑one solar street lights along a 2km stretch, improving safety and night visibility.",
    description: `
      <p>The local community in Enugu approached us to provide solar‑powered street lighting for a major access road that was previously dark and unsafe at night.</p>
      
      <h2>Solution</h2>
      <ul>
        <li>20 all‑in‑one solar street lights with 60W LED, 100W solar panel, and built‑in lithium battery</li>
        <li>Poles installed at 100m intervals on both sides of the road</li>
        <li>Automatic dusk‑to‑dawn operation with motion sensors for energy saving</li>
        <li>Heavy‑duty concrete foundations to withstand wind</li>
      </ul>

      <h2>Impact</h2>
      <ul>
        <li>Improved safety for pedestrians and motorists</li>
        <li>Reduced crime in the area</li>
        <li>Zero electricity cost – fully solar powered</li>
        <li>Residents can now walk and do business after dark</li>
      </ul>
    `,
    gallery: [
      "/assets/images/street-lights.jpeg",
      "/assets/images/street-light-install.jpg",
      "/assets/images/street-light-night.jpg",
    ],
    tags: ["Solar Street Lights", "Enugu", "Community Project", "LED"],
  },
  {
    id: 5,
    slug: "ph-cctv-access",
    title: "CCTV & Access Control for Office Complex in Port Harcourt",
    author: COMPANY_NAME,
    date: "October 2024",
    location: "Rivers",
    category: "Security",
    image: "/assets/images/cctv3.jpeg",
    excerpt:
      "Deployed 12 high‑definition cameras and biometric access control for a corporate office.",
    description: `
      <p>A corporate office in Port Harcourt needed a modern security system to monitor premises and control access to sensitive areas.</p>
      
      <h2>System Installed</h2>
      <ul>
        <li>12 high‑definition dome cameras covering all entrances, corridors, and parking</li>
        <li>Night vision capability for 24/7 monitoring</li>
        <li>16‑channel NVR with 6TB storage (30 days retention)</li>
        <li>Biometric fingerprint access control for server room and management floor</li>
        <li>Remote viewing via mobile app for security personnel</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Real‑time monitoring and recording</li>
        <li>Restricted access to sensitive areas</li>
        <li>Quick retrieval of footage when needed</li>
        <li>Improved staff safety</li>
      </ul>
    `,
    gallery: [
      "/assets/images/city-cctv.jpeg",
      "/assets/images/access-control.jpg",
      "/assets/images/cctv.jpeg",
    ],
    tags: ["CCTV", "Port Harcourt", "Access Control", "Office Security"],
  },
  {
    id: 6,
    slug: "benin-project",
    title: "Industrial Solar Power for Factory in Benin City",
    author: COMPANY_NAME,
    date: "September 2024",
    location: "Benin",
    category: "Solar",
    image: "/assets/images/benin-factory.jpeg",
    excerpt:
      "Grid‑tied solar system with 20KW capacity to offset factory daytime load and reduce electricity bills.",
    description: `
      <p>A manufacturing factory in Benin City wanted to reduce its reliance on the unstable grid and high diesel costs. We designed a grid‑tied solar system to offset their daytime consumption.</p>
      
      <h2>System Design</h2>
      <ul>
        <li>48 x 450W solar panels (21.6KW total)</li>
        <li>3 x 6KW grid‑tie inverters with zero export feature</li>
        <li>Mounting structures on factory roof</li>
        <li>Monitoring system to track generation and consumption</li>
        <li>Automatic changeover during grid failure (optional backup)</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Reduced monthly electricity bills by 60%</li>
        <li>Payback period estimated at 4 years</li>
        <li>Lower diesel generator runtime, saving fuel and maintenance</li>
        <li>Green energy contribution to corporate sustainability goals</li>
      </ul>
    `,
    gallery: [
      "/assets/images/benin-factory.jpeg",
      "/assets/images/abuja-project.jpeg",
      "/assets/images/city-inverter.jpeg",
    ],
    tags: ["Industrial Solar", "Benin", "Grid‑tied", "Factory"],
  },
  {
    id: 7,
    slug: "anambra-cctv",
    title: "CCTV Surveillance for 6 Bedroom House in Anambra",
    author: COMPANY_NAME,
    date: "August 2024",
    location: "Anambra",
    category: "Security",
    image: "/assets/images/cctv1.jpeg",
    excerpt:
      "Installed 24 high‑definition cameras with night vision and remote monitoring for a large residential property.",
    description: `
      <p>A large residential property in Anambra required comprehensive security coverage to deter theft and monitor activity. We designed and installed a state‑of‑the‑art CCTV system.</p>
      
      <h2>System Components</h2>
      <ul>
        <li>24 high‑definition dome and bullet cameras</li>
        <li>32‑channel NVR with 8TB storage (30 days retention)</li>
        <li>Remote viewing via mobile app</li>
        <li>Night vision and motion detection</li>
        <li>Weatherproof cameras for outdoor areas</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>24/7 monitoring of all entrances, parking lots, and corridors</li>
        <li>Reduced incidents of shoplifting</li>
        <li>Quick incident review and evidence retrieval</li>
        <li>Peace of mind for tenants and shoppers</li>
      </ul>
    `,
    gallery: [
      "/assets/images/cctv-anambra.jpeg",
      "/assets/images/cctv-install.jpg",
      "/assets/images/nvr-setup.jpg",
    ],
    tags: ["CCTV", "Anambra", "Shopping Plaza", "Security"],
  },
  {
    id: 8,
    slug: "enugu-backup-power",
    title: "Backup Power System for Residential Estate in Enugu",
    author: COMPANY_NAME,
    date: "July 2024",
    location: "Enugu",
    category: "Solar",
    image: "/assets/images/inverter-pro.jpeg",
    excerpt:
      "Deployed 10KVA inverter system with lithium batteries to provide uninterrupted power for 20 apartments.",
    description: `
      <p>A residential estate in Enugu faced frequent power outages. We installed a centralized backup power system to serve common areas and individual apartments.</p>
      
      <h2>System Design</h2>
      <ul>
        <li>10KVA 3‑phase hybrid inverter</li>
        <li>4 x 5KWh lithium batteries (20KWh total)</li>
        <li>Solar panel array on the estate clubhouse roof (5KW)</li>
        <li>Automatic transfer switch</li>
        <li>Sub‑distribution to each apartment block for lighting and security lights</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Uninterrupted power for common areas and security lights</li>
        <li>Each apartment gets backup for essential loads</li>
        <li>Reduced noise and emissions from individual generators</li>
        <li>Residents report improved quality of life</li>
      </ul>
    `,
    gallery: [
      "/assets/images/inverter-enugu.jpeg",
      "/assets/images/battery-bank.jpg",
      "/assets/images/solar-roof.jpg",
    ],
    tags: ["Backup Power", "Enugu", "Inverter", "Estate"],
  },
  {
    id: 9,
    slug: "ibadan-school-solar",
    title: "Solar Power System for Private School in Ibadan",
    author: COMPANY_NAME,
    date: "June 2024",
    location: "Ibadan",
    category: "Solar",
    image: "/assets/images/main-project.jpeg",
    excerpt:
      "Installed 15KW solar array with hybrid inverters to power classrooms, offices, and ICT lab.",
    description: `
      <p>A private school in Ibadan needed a reliable power source for their computer lab and administrative offices. We designed a hybrid solar system.</p>
      
      <h2>Installation</h2>
      <ul>
        <li>36 x 450W solar panels (16.2KW total)</li>
        <li>2 x 5KVA hybrid inverters (parallel configuration)</li>
        <li>4 x 200Ah gel batteries</li>
        <li>Reinforced roof mounting</li>
        <li>Integration with generator for cloudy days</li>
      </ul>

      <h2>Results</h2>
      <ul>
        <li>24/7 power for ICT lab, enabling uninterrupted computer classes</li>
        <li>Reduced generator fuel consumption by 70%</li>
        <li>Quiet environment conducive to learning</li>
        <li>Educational opportunity for students to learn about renewable energy</li>
      </ul>
    `,
    gallery: [
      "/assets/images/solar-ibadan.jpeg",
      "/assets/images/school-install.jpg",
      "/assets/images/inverter-rack.jpg",
    ],
    tags: ["Solar", "Ibadan", "School", "Hybrid Inverter"],
  },
  {
    id: 10,
    slug: "warri-warehouse-security",
    title: "Perimeter CCTV & Electric Fence for Warehouse in Warri",
    author: COMPANY_NAME,
    date: "May 2024",
    location: "Delta",
    category: "Security",
    image: "/assets/images/cctv2.jpeg",
    excerpt:
      "Comprehensive security upgrade with 16 bullet cameras and 6‑line electric fencing.",
    description: `
      <p>A large warehouse in Warri storing valuable goods required a robust security perimeter. We combined electric fencing and CCTV for maximum protection.</p>
      
      <h2>Security Measures</h2>
      <ul>
        <li>6‑line electric fence around the entire perimeter (800m)</li>
        <li>16 bullet cameras with night vision covering all approaches</li>
        <li>16‑channel NVR with 6TB storage</li>
        <li>Alarm integration with instant notifications</li>
        <li>Remote monitoring via mobile app</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Deters intruders physically with electric shock</li>
        <li>Full video evidence of any incidents</li>
        <li>Security personnel can monitor from anywhere</li>
        <li>Insurance premium reduction due to enhanced security</li>
      </ul>
    `,
    gallery: [
      "/assets/images/cctv-warri.jpeg",
      "/assets/images/electric-fence-close.jpg",
      "/assets/images/security-room.jpg",
    ],
    tags: ["CCTV", "Electric Fence", "Warri", "Warehouse Security"],
  },
  {
    id: 11,
    slug: "kano-battery-upgrade",
    title: "Lithium Battery Upgrade for Existing Solar System in Kano",
    author: COMPANY_NAME,
    date: "April 2024",
    location: "Kano",
    category: "Solar",
    image: "/assets/images/solar-project1.jpeg",
    excerpt:
      "Replaced old lead‑acid batteries with 15KWh lithium bank, doubling backup time and reducing maintenance.",
    description: `
      <p>A client in Kano had an existing solar system with aging lead‑acid batteries that required frequent maintenance and provided limited backup. We upgraded them to modern lithium batteries.</p>
      
      <h2>Upgrade Details</h2>
      <ul>
        <li>Removed 8 x 200Ah lead‑acid batteries (9.6KWh usable)</li>
        <li>Installed 3 x 5KWh wall‑mount lithium batteries (15KWh usable)</li>
        <li>Reconfigured inverter settings for lithium profile</li>
        <li>Added battery management system (BMS) monitoring</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Backup time increased from 4 hours to 10 hours</li>
        <li>No more water topping or equalization charges</li>
        <li>Lithium batteries occupy 60% less space</li>
        <li>Extended lifespan (10+ years vs 3‑4 years for lead‑acid)</li>
      </ul>
    `,
    gallery: [
      "/assets/images/battery-kano.jpeg",
      "/assets/images/lithium-rack.jpg",
      "/assets/images/inverter-with-batteries.jpg",
    ],
    tags: ["Battery Upgrade", "Kano", "Lithium", "Solar"],
  },
  {
    id: 12,
    slug: "ajah-house-wiring",
    title: "Complete House Wiring for New Duplex in Ajah, Lagos",
    author: COMPANY_NAME,
    date: "March 2024",
    location: "Lagos",
    category: "Electrical",
    image: "/assets/images/house-wiring2.jpeg",
    excerpt:
      "Full electrical installation including conduit, sockets, lighting, and distribution board for a modern duplex.",
    description: `
      <p>A newly constructed duplex in Ajah, Lagos needed a complete electrical installation. We provided end‑to‑end wiring services.</p>
      
      <h2>Scope of Work</h2>
      <ul>
        <li>Conduit installation throughout the building</li>
        <li>40+ double sockets placed per architectural plan</li>
        <li>LED downlights in all rooms with dimmers in living areas</li>
        <li>30‑way distribution board with surge protection</li>
        <li>Earthing system for safety</li>
        <li>Pre‑wiring for AC units and security system</li>
      </ul>

      <h2>Results</h2>
      <ul>
        <li>Modern, safe electrical system meeting Nigerian standards</li>
        <li>Plenty of outlets to accommodate future appliances</li>
        <li>Clean installation with no visible wires</li>
        <li>Passed final inspection with flying colors</li>
      </ul>
    `,
    gallery: [
      "/assets/images/wiring-owerri.jpeg",
      "/assets/images/distribution-board.jpg",
      "/assets/images/conduit-work.jpg",
    ],
    tags: ["House Wiring", "Ajah", "New Build", "Electrical"],
  },
  {
    id: 13,
    slug: "ondo-borehole-solar",
    title: "Solar Powered Borehole System for Community in Ondo",
    author: COMPANY_NAME,
    date: "February 2024",
    location: "Ondo",
    category: "Solar",
    image: "/assets/images/ondo-solar.jpeg",
    excerpt:
      "Designed and installed a 7.5KW solar system to power a community borehole, ensuring 24/7 water supply.",
    description: `
      <p>A rural community in Ondo State relied on an unreliable grid to power their borehole, often leaving residents without water for days. We designed a standalone solar system to guarantee water access.</p>
      
      <h2>System Components</h2>
      <ul>
        <li>7.5KW hybrid inverter</li>
        <li>12 x 450W solar panels (5.4KW total)</li>
        <li>10KWh lithium battery bank</li>
        <li>Submersible pump controller</li>
        <li>Overflow protection and tank level monitoring</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>24/7 water supply regardless of grid outages</li>
        <li>Reduced diesel generator usage, saving community funds</li>
        <li>Improved hygiene and quality of life</li>
        <li>System remotely monitored for maintenance alerts</li>
      </ul>
    `,
    gallery: [
      "/assets/images/ondo-solar.jpeg",
      "/assets/images/solar-panels-install.jpg",
      "/assets/images/pump-install.jpg",
    ],
    tags: ["Solar", "Ondo", "Borehole", "Community Project"],
  },
  {
    id: 14,
    slug: "ph-mall-cctv",
    title: "CCTV Installation for Shopping Mall in Port Harcourt",
    author: COMPANY_NAME,
    date: "January 2024",
    location: "Rivers",
    category: "Security",
    image: "/assets/images/ph-mall-cctv.jpeg",
    excerpt:
      "Deployed 30 high‑definition cameras with advanced analytics for a busy shopping mall.",
    description: `
      <p>A large shopping mall in Port Harcourt needed a modern surveillance system to monitor all entrances, parking lots, and corridors. We installed a comprehensive CCTV solution with remote monitoring.</p>
      
      <h2>System Installed</h2>
      <ul>
        <li>30 high‑definition dome and bullet cameras</li>
        <li>32‑channel NVR with 12TB storage (45 days retention)</li>
        <li>Video analytics for people counting and loitering detection</li>
        <li>Remote viewing via mobile app for security personnel</li>
        <li>Integration with existing fire alarm system</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Enhanced shopper safety and theft prevention</li>
        <li>Quick incident review and evidence retrieval</li>
        <li>Security team can monitor from central control room</li>
        <li>Reduced insurance premiums due to improved security</li>
      </ul>
    `,
    gallery: [
      "/assets/images/ph-mall-cctv.jpeg",
      "/assets/images/cctv-install.jpg",
      "/assets/images/control-room.jpg",
    ],
    tags: ["CCTV", "Port Harcourt", "Mall", "Surveillance"],
  },
  {
    id: 15,
    slug: "lekki-fencing",
    title: "Electric Fencing for Private Estate in Lekki, Lagos",
    author: COMPANY_NAME,
    date: "December 2023",
    location: "Lagos",
    category: "Security",
    image: "/assets/images/lekki-fence.jpeg",
    excerpt:
      "Installed 12‑line electric fence with alarm integration for a high‑security residential estate.",
    description: `
      <p>A private estate in Lekki required a robust perimeter security system to deter intruders. We installed a multi‑line electric fence with alarm integration.</p>
      
      <h2>Installation</h2>
      <ul>
        <li>12‑line electric fence around the entire 2km perimeter</li>
        <li>High‑powered energizer with battery backup</li>
        <li>Integration with central alarm system</li>
        <li>Warning signs and flashing lights at all gates</li>
        <li>Remote monitoring via mobile app</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Significant reduction in attempted intrusions</li>
        <li>Residents feel safer and more secure</li>
        <li>Immediate alerts on fence tampering</li>
        <li>Low maintenance and weather‑resistant design</li>
      </ul>
    `,
    gallery: [
      "/assets/images/lekki-fence.jpeg",
      "/assets/images/electric-fence-close.jpg",
      "/assets/images/energizer-setup.jpg",
    ],
    tags: ["Electric Fence", "Lagos", "Estate", "Perimeter Security"],
  },
  {
    id: 16,
    slug: "benin-wiring-solar",
    title: "House Wiring & Solar Backup for Duplex in Benin",
    author: COMPANY_NAME,
    date: "November 2023",
    location: "Benin",
    category: "Electrical",
    image: "/assets/images/benin-wiring.jpeg",
    excerpt:
      "Complete rewiring and 3.5KVA solar backup system for a newly built duplex.",
    description: `
      <p>A newly constructed duplex in Benin City needed modern electrical wiring and a solar backup system to ensure uninterrupted power. We provided end‑to‑end electrical and solar installation.</p>
      
      <h2>Scope of Work</h2>
      <ul>
        <li>Full conduit wiring for all rooms</li>
        <li>Distribution board with surge protection and RCBOs</li>
        <li>LED lighting throughout with dimmers</li>
        <li>3.5KVA hybrid inverter with 200Ah lithium battery</li>
        <li>Pre‑wiring for CCTV and internet</li>
      </ul>

      <h2>Results</h2>
      <ul>
        <li>Safe, modern electrical system compliant with Nigerian standards</li>
        <li>Seamless power backup for lights, fans, TVs, and refrigerator</li>
        <li>Reduced dependency on noisy generators</li>
        <li>Easy integration with future solar expansion</li>
      </ul>
    `,
    gallery: [
      "/assets/images/benin-wiring.jpeg",
      "/assets/images/distribution-board.jpg",
      "/assets/images/inverter-with-batteries.jpg",
    ],
    tags: ["House Wiring", "Benin", "Solar Backup", "New Build"],
  },
  {
    id: 17,
    slug: "abeokuta-street-lights",
    title: "Solar Street Lights for Market Square in Abeokuta",
    author: COMPANY_NAME,
    date: "October 2023",
    location: "Ogun",
    category: "Solar",
    image: "/assets/images/abeokuta-lights.jpeg",
    excerpt:
      "Installed 15 solar street lights to illuminate a busy market, improving security and extending business hours.",
    description: `
      <p>The local government in Abeokuta sought to improve safety and commercial activity in the central market. We supplied and installed solar‑powered street lights.</p>
      
      <h2>Installation</h2>
      <ul>
        <li>15 all‑in‑one solar street lights with 60W LED and 100W panel</li>
        <li>Poles installed at strategic locations around the market</li>
        <li>Automatic dusk‑to‑dawn operation with motion sensors</li>
        <li>Heavy‑duty concrete foundations</li>
      </ul>

      <h2>Impact</h2>
      <ul>
        <li>Market can now operate safely after dark</li>
        <li>Reduced petty crime and theft</li>
        <li>Vendors report increased evening sales</li>
        <li>Zero electricity cost – fully solar powered</li>
      </ul>
    `,
    gallery: [
      "/assets/images/abeokuta-lights.jpeg",
      "/assets/images/street-light-night.jpg",
      "/assets/images/street-light-install.jpg",
    ],
    tags: ["Solar Street Lights", "Ogun", "Market", "Community"],
  },
  {
    id: 18,
    slug: "ibadan-hotel-upgrade",
    title: "Inverter Upgrade & Battery Bank for Hotel in Ibadan",
    author: COMPANY_NAME,
    date: "September 2023",
    location: "Ibadan",
    category: "Solar",
    image: "/assets/images/ibadan-hotel.jpeg",
    excerpt:
      "Upgraded existing inverter system with 20KWh lithium battery bank to ensure uninterrupted guest comfort.",
    description: `
      <p>A popular hotel in Ibadan had an aging battery bank that could no longer provide reliable backup. We upgraded them to modern lithium batteries for extended runtime and faster charging.</p>
      
      <h2>Upgrade Details</h2>
      <ul>
        <li>Removed 16 x 200Ah lead‑acid batteries (19.2KWh usable)</li>
        <li>Installed 4 x 5KWh wall‑mount lithium batteries (20KWh usable)</li>
        <li>Reconfigured inverter settings for optimal lithium performance</li>
        <li>Added remote monitoring system</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Backup time increased from 6 hours to 14 hours</li>
        <li>No more water topping or battery maintenance</li>
        <li>Lithium batteries occupy 70% less space</li>
        <li>Guests enjoy uninterrupted power even during extended outages</li>
      </ul>
    `,
    gallery: [
      "/assets/images/ibadan-hotel.jpeg",
      "/assets/images/lithium-rack.jpg",
      "/assets/images/battery-bank.jpg",
    ],
    tags: ["Battery Upgrade", "Ibadan", "Lithium", "Hotel"],
  },
  {
    id: 19,
    slug: "ota-factory-security",
    title: "CCTV & Access Control for Factory in Ota, Ogun State",
    author: COMPANY_NAME,
    date: "August 2023",
    location: "Ogun",
    category: "Security",
    image: "/assets/images/ota-factory.webp",
    excerpt:
      "Installed 16 bullet cameras and biometric access control for a manufacturing facility.",
    description: `
      <p>A manufacturing factory in Ota needed to secure its premises and restrict access to sensitive areas. We designed and installed a comprehensive security system.</p>
      
      <h2>System Installed</h2>
      <ul>
        <li>16 bullet cameras covering all entrances, storage, and production areas</li>
        <li>32‑channel NVR with 8TB storage</li>
        <li>Biometric fingerprint access control for main gate and office areas</li>
        <li>Intercom system for visitor management</li>
        <li>Remote monitoring via mobile app</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Full visibility of all activities on site</li>
        <li>Only authorized personnel can enter restricted zones</li>
        <li>Deter theft and vandalism</li>
        <li>Quick retrieval of footage for incident investigation</li>
      </ul>
    `,
    gallery: [
      "/assets/images/ota-factory.webp",
      "/assets/images/access-control.jpg",
      "/assets/images/cctv-install.jpg",
    ],
    tags: ["CCTV", "Ogun", "Access Control", "Factory"],
  },
  {
    id: 20,
    slug: "calabar-guesthouse",
    title: "Solar Hybrid System for Guest House in Calabar",
    author: COMPANY_NAME,
    date: "July 2023",
    location: "Cross River",
    category: "Solar",
    image: "/assets/images/calabar-solar.jpeg",
    excerpt:
      "Designed and installed a 5KVA hybrid solar system for a boutique guest house.",
    description: `
      <p>A boutique guest house in Calabar wanted to offer guests a quiet, comfortable stay without generator noise. We installed a hybrid solar system to power all common areas and guest rooms.</p>
      
      <h2>System Components</h2>
      <ul>
        <li>5KVA 48V hybrid inverter</li>
        <li>8 x 450W solar panels (3.6KW total)</li>
        <li>2 x 5KWh lithium batteries (10KWh total)</li>
        <li>Automatic changeover with grid backup</li>
        <li>Dedicated circuits for lighting, fans, and TV points</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Silent power for all guest rooms and common areas</li>
        <li>Positive guest reviews highlighting the peaceful environment</li>
        <li>Reduced electricity bills by 60%</li>
        <li>System can be expanded easily for future AC units</li>
      </ul>
    `,
    gallery: [
      "/assets/images/calabar-solar.jpeg",
      "/assets/images/inverter-install.jpg",
      "/assets/images/solar-roof.jpg",
    ],
    tags: ["Solar", "Cross River", "Guest House", "Hybrid Inverter"],
  },

  {
    id: 21,
    slug: "ikoyi-solar-mansion",
    title: "Solar Installation for 5‑Bedroom Mansion in Ikoyi",
    author: COMPANY_NAME,
    date: "March 2024",
    location: "Lagos",
    category: "Solar",
    image: "/assets/images/ikoyi-solar.jpeg",
    excerpt:
      "Installed 10KVA hybrid solar system with lithium batteries for a luxury home, powering all appliances including ACs.",
    description: `
      <p>A luxury home in Ikoyi required a robust solar system to power high‑consumption appliances like air conditioners. We designed a 10KVA hybrid system with sufficient battery storage.</p>
      
      <h2>System Components</h2>
      <ul>
        <li>10KVA 48V hybrid inverter</li>
        <li>12 x 450W solar panels (5.4KW total)</li>
        <li>20KWh lithium battery bank</li>
        <li>Automatic changeover with grid backup</li>
        <li>Dedicated circuits for ACs, lighting, and outlets</li>
      </ul>

      <h2>Results</h2>
      <ul>
        <li>24/7 power for all appliances, including ACs during daylight</li>
        <li>Reduced generator usage by 90%</li>
        <li>Silent operation, enhancing comfort</li>
        <li>Estimated monthly savings of ₦150,000</li>
      </ul>
    `,
    gallery: [
      "/assets/images/ikoyi-solar.jpeg",
      "/assets/images/inverter-install.jpg",
      "/assets/images/battery-bank.jpg",
    ],
    tags: ["Solar", "Lagos", "Residential", "Hybrid Inverter"],
  },
  {
    id: 22,
    slug: "vi-office-cctv",
    title: "CCTV & Access Control for Office Complex in VI",
    author: COMPANY_NAME,
    date: "February 2024",
    location: "Lagos",
    category: "Security",
    image: "/assets/images/vi-cctv.webp",
    excerpt:
      "Deployed 24 high‑definition cameras and biometric access control for a corporate office in Victoria Island.",
    description: `
      <p>A corporate office in Victoria Island needed a modern security system. We installed 24 high‑definition cameras and biometric access control.</p>
      
      <h2>System Installed</h2>
      <ul>
        <li>24 high‑definition dome and bullet cameras</li>
        <li>32‑channel NVR with 12TB storage (30 days retention)</li>
        <li>Biometric access control for main entrance and server room</li>
        <li>Remote monitoring via mobile app</li>
        <li>Integration with existing alarm system</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Full coverage of all areas, indoors and outdoors</li>
        <li>Restricted access to sensitive zones</li>
        <li>Quick incident review and evidence retrieval</li>
        <li>Peace of mind for management and staff</li>
      </ul>
    `,
    gallery: [
      "/assets/images/vi-cctv.webp",
      "/assets/images/cctv-install.jpg",
      "/assets/images/access-control.jpg",
    ],
    tags: ["CCTV", "Lagos", "Office", "Access Control"],
  },
  {
    id: 23,
    slug: "lekki-house-wiring",
    title: "House Wiring for 4‑Bedroom Duplex in Lekki Phase 1",
    author: COMPANY_NAME,
    date: "January 2024",
    location: "Lagos",
    category: "Electrical",
    image: "/assets/images/lekki-wiring.jpg",
    excerpt:
      "Complete electrical wiring, distribution board, and lighting installation for a new duplex.",
    description: `
      <p>A newly built duplex in Lekki Phase 1 required a complete electrical installation. We handled all wiring from the distribution board to every socket and light.</p>
      
      <h2>Scope of Work</h2>
      <ul>
        <li>Full conduit wiring for all 4 bedrooms, living, dining, kitchen, and external areas</li>
        <li>Installation of a 24‑way distribution board with surge protection</li>
        <li>LED downlights throughout with dimmers in living areas</li>
        <li>40+ double sockets strategically placed</li>
        <li>Pre‑wiring for AC units, internet, and security system</li>
      </ul>

      <h2>Results</h2>
      <ul>
        <li>Modern, safe electrical system compliant with Nigerian standards</li>
        <li>Clean installation with no visible wires</li>
        <li>Future‑proofed for smart home integration</li>
        <li>Passed final inspection with zero defects</li>
      </ul>
    `,
    gallery: [
      "/assets/images/lekki-wiring.jpg",
      "/assets/images/distribution-board.jpg",
      "/assets/images/conduit-work.jpg",
    ],
    tags: ["House Wiring", "Lagos", "New Build", "Electrical"],
  },
  {
    id: 24,
    slug: "gra-street-lights",
    title: "Solar Street Lights for Estate in GRA",
    author: COMPANY_NAME,
    date: "December 2023",
    location: "Lagos",
    category: "Solar",
    image: "/assets/images/gra-lights.jpg",
    excerpt:
      "Installed 30 solar street lights along internal roads of a GRA estate, improving security.",
    description: `
      <p>A residential estate in GRA wanted to improve security and visibility on internal roads. We supplied and installed 30 solar street lights.</p>
      
      <h2>Installation</h2>
      <ul>
        <li>30 all‑in‑one solar street lights with 60W LED and 100W panel</li>
        <li>Poles installed at 50m intervals along all roads</li>
        <li>Automatic dusk‑to‑dawn operation with motion sensors</li>
        <li>Heavy‑duty concrete foundations</li>
      </ul>

      <h2>Impact</h2>
      <ul>
        <li>Improved safety for residents walking at night</li>
        <li>Reduced crime and increased security</li>
        <li>Zero electricity cost – fully solar powered</li>
        <li>Positive feedback from residents</li>
      </ul>
    `,
    gallery: [
      "/assets/images/gra-lights.jpg",
      "/assets/images/street-light-night.jpg",
      "/assets/images/street-light-install.jpg",
    ],
    tags: ["Solar Street Lights", "Lagos", "Estate", "LED"],
  },
  {
    id: 25,
    slug: "apapa-fencing",
    title: "Electric Fencing for Warehouse in Apapa",
    author: COMPANY_NAME,
    date: "November 2023",
    location: "Lagos",
    category: "Security",
    image: "/assets/images/electric-fence.jpeg",
    excerpt:
      "Installed 8‑line electric fence with alarm for a large warehouse, protecting goods from theft.",
    description: `
      <p>A warehouse in Apapa storing valuable goods needed a robust perimeter security system. We installed an 8‑line electric fence with alarm integration.</p>
      
      <h2>Installation</h2>
      <ul>
        <li>8‑line electric fence around the entire 1.5km perimeter</li>
        <li>High‑powered energizer with battery backup</li>
        <li>Integration with central alarm system</li>
        <li>Warning signs and flashing lights at all entry points</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Deters intruders effectively</li>
        <li>Immediate alerts on fence tampering</li>
        <li>Reduced theft and vandalism</li>
        <li>Low maintenance and weather‑resistant</li>
      </ul>
    `,
    gallery: [
      "/assets/images/electric-fence.jpeg",
      "/assets/images/electric-fence-close.jpg",
      "/assets/images/energizer-setup.jpg",
    ],
    tags: ["Electric Fence", "Lagos", "Warehouse", "Perimeter Security"],
  },
  {
    id: 26,
    slug: "ikeja-hotel-upgrade",
    title: "Inverter Upgrade for Hotel in Ikeja",
    author: COMPANY_NAME,
    date: "October 2023",
    location: "Lagos",
    category: "Solar",
    image: "/assets/images/inverter-pro4.jpeg",
    excerpt:
      "Replaced lead‑acid batteries with 30KWh lithium bank for a hotel, ensuring uninterrupted power.",
    description: `
      <p>A hotel in Ikeja had an aging battery bank that could no longer provide reliable backup. We upgraded them to modern lithium batteries for extended runtime and faster charging.</p>
      
      <h2>Upgrade Details</h2>
      <ul>
        <li>Removed 24 x 200Ah lead‑acid batteries (28.8KWh usable)</li>
        <li>Installed 15KWh wall‑mount lithium batteries</li>
        <li>Reconfigured inverter settings for optimal lithium performance</li>
        <li>Added remote monitoring system</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Backup time increased from 8 hours to 18 hours</li>
        <li>No more water topping or battery maintenance</li>
        <li>Lithium batteries occupy 60% less space</li>
        <li>Guests enjoy uninterrupted power even during extended outages</li>
      </ul>
    `,
    gallery: [
      "/assets/images/inverter-pro4.jpeg",
      "/assets/images/lithium-rack.jpg",
      "/assets/images/battery-bank.jpg",
    ],
    tags: ["Battery Upgrade", "Lagos", "Lithium", "Hotel"],
  },
  {
    id: 27,
    slug: "surulere-school-cctv",
    title: "CCTV Installation for School in Surulere",
    author: COMPANY_NAME,
    date: "September 2023",
    location: "Lagos",
    category: "Security",
    image: "/assets/images/surulere-school.jpg",
    excerpt:
      "Installed 16 cameras with remote monitoring for a private school, enhancing student safety.",
    description: `
      <p>A private school in Surulere wanted to improve security for students and staff. We installed a comprehensive CCTV system with remote monitoring.</p>
      
      <h2>System Installed</h2>
      <ul>
        <li>16 high‑definition dome and bullet cameras</li>
        <li>16‑channel NVR with 8TB storage</li>
        <li>Remote viewing via mobile app for administrators</li>
        <li>Night vision and motion detection</li>
        <li>Coverage of all entrances, corridors, and playground</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Enhanced safety for students and staff</li>
        <li>Deters bullying and vandalism</li>
        <li>Quick incident review and evidence retrieval</li>
        <li>Parents have peace of mind</li>
      </ul>
    `,
    gallery: [
      "/assets/images/surulere-school.jpg",
      "/assets/images/cctv-install.jpg",
      "/assets/images/nvr-setup.jpg",
    ],
    tags: ["CCTV", "Lagos", "School", "Surveillance"],
  },
  {
    id: 28,
    slug: "benin-shopping-solar",
    title: "Solar Power for Shopping Complex in Benin",
    author: COMPANY_NAME,
    date: "August 2023",
    location: "Benin",
    category: "Solar",
    image: "/assets/images/benin-shopping.jpeg",
    excerpt:
      "Installed 15KW solar array to power a busy shopping complex, cutting electricity costs.",
    description: `
      <p>A shopping complex in Benin City faced high electricity bills from the grid. We installed a 15KW solar system to offset daytime consumption.</p>
      
      <h2>System Components</h2>
      <ul>
        <li>36 x 450W solar panels (16.2KW total)</li>
        <li>3 x 5KVA hybrid inverters</li>
        <li>20KWh lithium battery bank</li>
        <li>Roof‑mounting structures</li>
        <li>Net metering setup (where applicable)</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Reduced monthly electricity bills by 70%</li>
        <li>Payback period estimated at 3.5 years</li>
        <li>Uninterrupted power for shops during grid outages</li>
        <li>Positive feedback from tenants</li>
      </ul>
    `,
    gallery: [
      "/assets/images/benin-shopping.jpeg",
      "/assets/images/solar-roof.jpg",
      "/assets/images/inverter-rack.jpg",
    ],
    tags: ["Solar", "Benin", "Commercial", "Grid‑tied"],
  },
  {
    id: 29,
    slug: "benin-residence-security",
    title: "CCTV & Electric Fence for Private Residence",
    author: COMPANY_NAME,
    date: "July 2023",
    location: "Benin",
    category: "Security",
    image: "/assets/images/benin-residence.webp",
    excerpt:
      "Comprehensive security solution for a large home, including cameras and perimeter fence.",
    description: `
      <p>A large private residence in Benin City required a multi‑layered security system. We combined electric fencing and CCTV for maximum protection.</p>
      
      <h2>Security Measures</h2>
      <ul>
        <li>6‑line electric fence around the entire property</li>
        <li>8 high‑definition cameras covering all approaches</li>
        <li>16‑channel NVR with 4TB storage</li>
        <li>Remote monitoring via mobile app</li>
        <li>Integration with alarm system</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Deters intruders physically</li>
        <li>Full video evidence of any incidents</li>
        <li>Homeowner can monitor from anywhere</li>
        <li>Peace of mind for the family</li>
      </ul>
    `,
    gallery: [
      "/assets/images/benin-residence.webp",
      "/assets/images/electric-fence-close.jpg",
      "/assets/images/cctv-install.jpg",
    ],
    tags: ["Electric Fence", "CCTV", "Benin", "Residential"],
  },
  {
    id: 30,
    slug: "benin-bungalow-wiring",
    title: "House Wiring for New Bungalow in Benin",
    author: COMPANY_NAME,
    date: "June 2023",
    location: "Benin",
    category: "Electrical",
    image: "/assets/images/benin-bungalow.jpg",
    excerpt:
      "Complete electrical installation for a modern bungalow, with pre‑wiring for solar.",
    description: `
      <p>A new bungalow in Benin City needed a complete electrical system. We installed wiring, distribution board, and lighting, with future solar in mind.</p>
      
      <h2>Scope of Work</h2>
      <ul>
        <li>Full conduit wiring for all rooms</li>
        <li>20‑way distribution board with surge protection</li>
        <li>LED lighting throughout</li>
        <li>Pre‑wiring for solar inverter and battery bank</li>
        <li>Earthing system for safety</li>
      </ul>

      <h2>Results</h2>
      <ul>
        <li>Safe, modern electrical system</li>
        <li>Easy integration with solar later</li>
        <li>Clean installation with no visible wires</li>
        <li>Passed final inspection</li>
      </ul>
    `,
    gallery: [
      "/assets/images/benin-bungalow.jpg",
      "/assets/images/distribution-board.jpg",
      "/assets/images/conduit-work.jpg",
    ],
    tags: ["House Wiring", "Benin", "New Build", "Electrical"],
  },
  {
    id: 31,
    slug: "benin-community-lights",
    title: "Solar Street Lights for Community Road",
    author: COMPANY_NAME,
    date: "May 2023",
    location: "Benin",
    category: "Solar",
    image: "/assets/images/enugu-light.jpg",
    excerpt:
      "Installed 20 solar street lights along a community road, improving night safety.",
    description: `
      <p>A community in Benin City lacked proper lighting on a main road, leading to safety concerns at night. We installed 20 solar street lights.</p>
      
      <h2>Installation</h2>
      <ul>
        <li>20 all‑in‑one solar street lights with 60W LED</li>
        <li>Poles installed at 100m intervals</li>
        <li>Automatic dusk‑to‑dawn operation</li>
        <li>Heavy‑duty concrete foundations</li>
      </ul>

      <h2>Impact</h2>
      <ul>
        <li>Improved safety for pedestrians and motorists</li>
        <li>Reduced crime in the area</li>
        <li>Zero electricity cost</li>
        <li>Community members now feel secure walking at night</li>
      </ul>
    `,
    gallery: [
      "/assets/images/enugu-light.jpg",
      "/assets/images/street-light-night.jpg",
      "/assets/images/street-light-install.jpg",
    ],
    tags: ["Solar Street Lights", "Benin", "Community", "LED"],
  },
  {
    id: 32,
    slug: "benin-clinic-backup",
    title: "Inverter Backup for Clinic in Benin",
    author: COMPANY_NAME,
    date: "April 2023",
    location: "Benin",
    category: "Solar",
    image: "/assets/images/benin-clinic.jpeg",
    excerpt:
      "Installed 3.2KVA inverter with lithium batteries to ensure critical medical equipment stays on.",
    description: `
      <p>A private clinic in Benin City needed reliable backup power for critical medical equipment. We installed a 3.2KVA inverter system with lithium batteries.</p>
      
      <h2>System Components</h2>
      <ul>
        <li>3.2KVA 48V hybrid inverter</li>
        <li>24v lithium battery bank</li>
        <li>Automatic changeover with grid backup</li>
        <li>Surge protection for sensitive equipment</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Uninterrupted power for lights, fans, and critical equipment</li>
        <li>No more disruptions during surgeries or emergencies</li>
        <li>Reduced generator noise, improving patient comfort</li>
        <li>Clinic can now operate 24/7 without grid worries</li>
      </ul>
    `,
    gallery: [
      "/assets/images/benin-clinic.jpeg",
      "/assets/images/inverter-install.jpg",
      "/assets/images/battery-bank.jpg",
    ],
    tags: ["Inverter", "Benin", "Clinic", "Backup"],
  },
  {
    id: 33,
    slug: "benin-church-cctv",
    title: "CCTV for Church Auditorium",
    author: COMPANY_NAME,
    date: "March 2023",
    location: "Benin",
    category: "Security",
    image: "/assets/images/benin-church.jpeg",
    excerpt:
      "Deployed 12 cameras with night vision for a large church auditorium.",
    description: `
      <p>A large church auditorium in Benin City wanted to enhance security and monitor activities during services. We installed 12 high‑definition cameras.</p>
      
      <h2>System Installed</h2>
      <ul>
        <li>12 high‑definition dome cameras with night vision</li>
        <li>16‑channel NVR with 6TB storage</li>
        <li>Remote viewing via mobile app for church leaders</li>
        <li>Coverage of sanctuary, entrances, and parking</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Deters theft and vandalism</li>
        <li>Monitor crowds during large events</li>
        <li>Quick incident review</li>
        <li>Peace of mind for congregation</li>
      </ul>
    `,
    gallery: [
      "/assets/images/benin-church.jpeg",
      "/assets/images/cctv-install.jpg",
      "/assets/images/nvr-setup.jpg",
    ],
    tags: ["CCTV", "Benin", "Church", "Surveillance"],
  },
  {
    id: 34,
    slug: "benin-farm-fence",
    title: "Electric Fencing for Farm in Benin",
    author: COMPANY_NAME,
    date: "February 2023",
    location: "Benin",
    category: "Security",
    image: "/assets/images/electric-fence.jpeg",
    excerpt:
      "Installed solar‑powered electric fence to protect farmland from animals and intruders.",
    description: `
      <p>A farm in Benin City needed to protect crops from animals and intruders. We installed a solar‑powered electric fence.</p>
      
      <h2>Installation</h2>
      <ul>
        <li>6‑line electric fence around the 2km perimeter</li>
        <li>Solar‑powered energizer with battery backup</li>
        <li>Warning signs and flashing lights</li>
        <li>Low‑maintenance design</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Effectively deters animals and intruders</li>
        <li>Zero electricity cost – solar powered</li>
        <li>Farmer reports increased crop yield</li>
        <li>Peace of mind for the farmer</li>
      </ul>
    `,
    gallery: [
      "/assets/images/electric-fence.jpeg",
      "/assets/images/electric-fence-close.jpg",
      "/assets/images/energizer-setup.jpg",
    ],
    tags: ["Electric Fence", "Benin", "Farm", "Solar Powered"],
  },
  {
    id: 35,
    slug: "benin-guesthouse-solar",
    title: "Solar Hybrid System for Guest House",
    author: COMPANY_NAME,
    date: "January 2023",
    location: "Benin",
    category: "Solar",
    image: "/assets/images/benin-guesthouse.jpeg",
    excerpt:
      "Designed and installed a 7.5KVA solar system for a boutique guest house.",
    description: `
      <p>A boutique guest house in Benin City wanted to offer guests a quiet, comfortable stay without generator noise. We installed a 7.5KVA hybrid solar system.</p>
      
      <h2>System Components</h2>
      <ul>
        <li>7.5KVA 48V hybrid inverter</li>
        <li>10 x 450W solar panels (4.5KW total)</li>
        <li>15KWh lithium battery bank</li>
        <li>Automatic changeover with grid backup</li>
        <li>Dedicated circuits for all rooms and common areas</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Silent power for all guest rooms</li>
        <li>Positive guest reviews highlighting the peaceful environment</li>
        <li>Reduced electricity bills by 60%</li>
        <li>System can be expanded for future AC units</li>
      </ul>
    `,
    gallery: [
      "/assets/images/benin-guesthouse.jpeg",
      "/assets/images/inverter-install.jpg",
      "/assets/images/solar-roof.jpg",
    ],
    tags: ["Solar", "Benin", "Guest House", "Hybrid Inverter"],
  },
  {
    id: 36,
    slug: "abuja-office-solar",
    title: "Solar Installation for Office Complex in Abuja",
    author: COMPANY_NAME,
    date: "December 2023",
    location: "Abuja",
    category: "Solar",
    image: "/assets/images/abuja-office.jpeg",
    excerpt:
      "Installed 20KW solar system with lithium batteries for a corporate office, ensuring 24/7 power.",
    description: `
      <p>A corporate office complex in Abuja wanted to reduce dependency on the grid and ensure uninterrupted operations. We installed a 20KW solar system.</p>
      
      <h2>System Components</h2>
      <ul>
        <li>48 x 450W solar panels (21.6KW total)</li>
        <li>4 x 5KVA hybrid inverters (parallel)</li>
        <li>30KWh lithium battery bank</li>
        <li>Roof‑mounting structures</li>
        <li>Automatic changeover with grid backup</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>24/7 power for all office equipment, lighting, and ACs</li>
        <li>Reduced electricity bills by 80%</li>
        <li>No more downtime during grid outages</li>
        <li>Positive impact on employee productivity</li>
      </ul>
    `,
    gallery: [
      "/assets/images/abuja-office.jpeg",
      "/assets/images/solar-roof.jpg",
      "/assets/images/inverter-rack.jpg",
    ],
    tags: ["Solar", "Abuja", "Commercial", "Hybrid"],
  },
  {
    id: 37,
    slug: "abuja-estate-cctv",
    title: "CCTV for Residential Estate in Abuja",
    author: COMPANY_NAME,
    date: "November 2023",
    location: "Abuja",
    category: "Security",
    image: "/assets/images/abuja-estate.jpg",
    excerpt:
      "Deployed 30 cameras across a gated community with central monitoring.",
    description: `
      <p>A gated community in Abuja required a comprehensive CCTV system to monitor all entrances, roads, and common areas. We installed 30 cameras with central monitoring.</p>
      
      <h2>System Installed</h2>
      <ul>
        <li>30 high‑definition bullet and dome cameras</li>
        <li>32‑channel NVR with 12TB storage</li>
        <li>Central monitoring station at the security gate</li>
        <li>Remote viewing via mobile app for residents</li>
        <li>Night vision and motion detection</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Enhanced security for all residents</li>
        <li>Deters crime and vandalism</li>
        <li>Quick incident review and evidence retrieval</li>
        <li>Residents can monitor their surroundings</li>
      </ul>
    `,
    gallery: [
      "/assets/images/abuja-estate.jpg",
      "/assets/images/cctv-install.jpg",
      "/assets/images/control-room.jpg",
    ],
    tags: ["CCTV", "Abuja", "Estate", "Surveillance"],
  },
  {
    id: 38,
    slug: "asokoro-wiring",
    title: "Electric Fencing at Abuja",
    author: COMPANY_NAME,
    date: "October 2023",
    location: "Abuja",
    category: "Security",
    image: "/assets/images/benin-project.jpeg",
    excerpt:
      "Installed a 6‑line electric fence with alarm integration for a private residence in Abuja, enhancing perimeter security.",
    description: `
    <p>A private residence in Abuja required a robust perimeter security system to deter intruders. We installed a 6‑line electric fence with alarm integration, providing effective security while maintaining aesthetic appeal.</p>
    
    <h2>Installation</h2>
    <ul>
      <li>6‑line electric fence around the entire property (approx. 500m)</li>
      <li>High‑powered energizer with battery backup</li>
      <li>Integration with central alarm system</li>
      <li>Warning signs and flashing lights at all gates</li>
      <li>Remote monitoring via mobile app</li>
    </ul>

    <h2>Outcome</h2>
    <ul>
      <li>Significant reduction in attempted intrusions</li>
      <li>Homeowner can monitor fence status remotely</li>
      <li>Immediate alerts on fence tampering</li>
      <li>Low maintenance and weather‑resistant design</li>
    </ul>
  `,
    gallery: [
      "/assets/images/benin-project.jpeg",
      "/assets/images/electric-fence-close.jpg",
      "/assets/images/energizer-setup.jpg",
    ],
    tags: ["Electric Fence", "Abuja", "Perimeter Security", "Residential"],
  },
  {
    id: 39,
    slug: "abuja-estate-lights",
    title: "Solar Street Lights for Estate Road",
    author: COMPANY_NAME,
    date: "September 2023",
    location: "Abuja",
    category: "Solar",
    image: "/assets/images/abuja-estate-lights.jpg",
    excerpt:
      "Installed 15 solar street lights along internal roads of an estate.",
    description: `
      <p>An estate in Abuja wanted to improve visibility and safety on internal roads. We installed 15 solar street lights.</p>
      
      <h2>Installation</h2>
      <ul>
        <li>15 all‑in‑one solar street lights with 60W LED</li>
        <li>Poles installed at strategic locations</li>
        <li>Automatic dusk‑to‑dawn operation</li>
        <li>Heavy‑duty concrete foundations</li>
      </ul>

      <h2>Impact</h2>
      <ul>
        <li>Improved safety for pedestrians and vehicles</li>
        <li>Reduced crime in the area</li>
        <li>Zero electricity cost</li>
        <li>Residents now enjoy evening walks</li>
      </ul>
    `,
    gallery: [
      "/assets/images/abuja-estate-lights.jpg",
      "/assets/images/street-light-night.jpg",
      "/assets/images/street-light-install.jpg",
    ],
    tags: ["Solar Street Lights", "Abuja", "Estate", "LED"],
  },
  {
    id: 40,
    slug: "abuja-school-fence",
    title: "Electric Fencing for School in Abuja",
    author: COMPANY_NAME,
    date: "August 2023",
    location: "Abuja",
    category: "Security",
    image: "/assets/images/abuja-school.jpeg",
    excerpt:
      "Installed perimeter electric fence with alarm for a private school.",
    description: `
      <p>A private school in Abuja needed to secure its perimeter to ensure student safety. We installed an electric fence with alarm integration.</p>
      
      <h2>Installation</h2>
      <ul>
        <li>6‑line electric fence around the entire school perimeter</li>
        <li>High‑powered energizer with battery backup</li>
        <li>Integration with central alarm system</li>
        <li>Warning signs and flashing lights</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Deters intruders effectively</li>
        <li>Immediate alerts on fence tampering</li>
        <li>Parents have peace of mind</li>
        <li>Low maintenance and weather‑resistant</li>
      </ul>
    `,
    gallery: [
      "/assets/images/abuja-school.jpeg",
      "/assets/images/electric-fence-close.jpg",
      "/assets/images/energizer-setup.jpg",
    ],
    tags: ["Electric Fence", "Abuja", "School", "Perimeter Security"],
  },
  {
    id: 41,
    slug: "abuja-hotel-backup",
    title: "Inverter Backup for Hotel in Abuja",
    author: COMPANY_NAME,
    date: "July 2023",
    location: "Abuja",
    category: "Solar",
    image: "/assets/images/abuja-hotel.jpeg",
    excerpt:
      "Installed 10KVA inverter with 20KWh lithium battery for a hotel, ensuring guest comfort.",
    description: `
      <p>A hotel in Abuja wanted to ensure uninterrupted power for guests. We installed a 5KVA inverter system with lithium batteries.</p>
      
      <h2>System Components</h2>
      <ul>
        <li>5KVA 48V hybrid inverter</li>
        <li>10KWh lithium battery bank</li>
        <li>Automatic changeover with grid backup</li>
        <li>Surge protection for sensitive equipment</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Uninterrupted power for all guest rooms and common areas</li>
        <li>No more generator noise disturbing guests</li>
        <li>Positive reviews highlighting comfort</li>
        <li>Reduced diesel costs</li>
      </ul>
    `,
    gallery: [
      "/assets/images/abuja-hotel.jpeg",
      "/assets/images/inverter-install.jpg",
      "/assets/images/battery-bank.jpg",
    ],
    tags: ["Inverter", "Abuja", "Hotel", "Backup"],
  },
  {
    id: 42,
    slug: "abuja-bank-cctv",
    title: "CCTV & Access Control for Bank",
    author: COMPANY_NAME,
    date: "June 2023",
    location: "Abuja",
    category: "Security",
    image: "/assets/images/abuja-bank.webp",
    excerpt:
      "Installed high‑security cameras and biometric access for a bank branch.",
    description: `
      <p>A bank branch in Abuja required a high‑security CCTV and access control system to meet regulatory standards. We installed a comprehensive solution.</p>
      
      <h2>System Installed</h2>
      <ul>
        <li>16 high‑definition cameras covering all areas</li>
        <li>32‑channel NVR with 12TB storage</li>
        <li>Biometric access control for vault and server room</li>
        <li>Integration with alarm system</li>
        <li>Remote monitoring by security personnel</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Full compliance with security regulations</li>
        <li>Restricted access to sensitive areas</li>
        <li>Quick incident review and evidence</li>
        <li>Enhanced safety for staff and customers</li>
      </ul>
    `,
    gallery: [
      "/assets/images/abuja-bank.webp",
      "/assets/images/cctv-install.jpg",
      "/assets/images/access-control.jpg",
    ],
    tags: ["CCTV", "Abuja", "Bank", "Access Control"],
  },
  {
    id: 43,
    slug: "enugu-school-solar",
    title: "Solar Power for School in Enugu",
    author: COMPANY_NAME,
    date: "May 2023",
    location: "Enugu",
    category: "Solar",
    image: "/assets/images/enugu-school.jpg",
    excerpt:
      "Installed 10KW solar system for a private school, powering classrooms and admin block.",
    description: `
      <p>A private school in Enugu needed a reliable power source for its ICT lab and classrooms. We installed a 10KW solar system.</p>
      
      <h2>System Components</h2>
      <ul>
        <li>24 x 450W solar panels (10.8KW total)</li>
        <li>2 x 5KVA hybrid inverters</li>
        <li>15KWh lithium battery bank</li>
        <li>Roof‑mounting structures</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>24/7 power for ICT lab, enabling uninterrupted computer classes</li>
        <li>Reduced generator fuel consumption by 80%</li>
        <li>Quiet environment conducive to learning</li>
        <li>Educational opportunity for students</li>
      </ul>
    `,
    gallery: [
      "/assets/images/enugu-school.jpg",
      "/assets/images/solar-roof.jpg",
      "/assets/images/inverter-install.jpg",
    ],
    tags: ["Solar", "Enugu", "School", "Hybrid"],
  },
  {
    id: 44,
    slug: "ph-mall-cctv-2",
    title: "CCTV for Shopping Mall in Port Harcourt",
    author: COMPANY_NAME,
    date: "April 2023",
    location: "Rivers",
    category: "Security",
    image: "/assets/images/ph-mall2.webp",
    excerpt: "Installed 24 cameras with analytics for a large shopping mall.",
    description: `
      <p>A large shopping mall in Port Harcourt wanted to enhance security with advanced analytics. We installed 24 cameras with people counting and loitering detection.</p>
      
      <h2>System Installed</h2>
      <ul>
        <li>24 high‑definition dome cameras</li>
        <li>32‑channel NVR with 12TB storage</li>
        <li>Video analytics software</li>
        <li>Remote monitoring via mobile app</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Enhanced shopper safety</li>
        <li>Analytics help management understand traffic</li>
        <li>Quick incident review</li>
        <li>Reduced theft</li>
      </ul>
    `,
    gallery: [
      "/assets/images/ph-mall2.webp",
      "/assets/images/cctv-install.jpg",
      "/assets/images/control-room.jpg",
    ],
    tags: ["CCTV", "Port Harcourt", "Mall", "Surveillance"],
  },
  {
    id: 45,
    slug: "ph-hotel-solar",
    title: "Solar Power for Hotel in Port Harcourt",
    author: COMPANY_NAME,
    date: "March 2023",
    location: "Rivers",
    category: "Solar",
    image: "/assets/images/ph-hotel.jpeg",
    excerpt: "Installed 15KW solar system with battery backup for a hotel.",
    description: `
      <p>A hotel in Port Harcourt wanted to reduce its electricity bills and offer guests a quiet experience. We installed a 15KW solar system.</p>
      
      <h2>System Components</h2>
      <ul>
        <li>36 x 450W solar panels (16.2KW total)</li>
        <li>3 x 5KVA hybrid inverters</li>
        <li>20KWh lithium battery bank</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Significant reduction in electricity bills</li>
        <li>Silent power for guest comfort</li>
        <li>Backup during grid outages</li>
        <li>Positive guest reviews</li>
      </ul>
    `,
    gallery: [
      "/assets/images/ph-hotel.jpeg",
      "/assets/images/solar-roof.jpg",
      "/assets/images/inverter-rack.jpg",
    ],
    tags: ["Solar", "Port Harcourt", "Hotel", "Hybrid"],
  },
  {
    id: 46,
    slug: "ibadan-factory-fence",
    title: "Electric Fencing for Factory in Ibadan",
    author: COMPANY_NAME,
    date: "February 2023",
    location: "Ibadan",
    category: "Security",
    image: "/assets/images/ibadan-factory.jpg",
    excerpt: "Installed 6‑line electric fence around a factory premises.",
    description: `
      <p>A factory in Ibadan needed to secure its perimeter to protect assets. We installed a 6‑line electric fence.</p>
      
      <h2>Installation</h2>
      <ul>
        <li>6‑line electric fence around the 1km perimeter</li>
        <li>High‑powered energizer with battery backup</li>
        <li>Warning signs and flashing lights</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Effective deterrent against intruders</li>
        <li>Reduced theft and vandalism</li>
        <li>Peace of mind for management</li>
      </ul>
    `,
    gallery: [
      "/assets/images/ibadan-factory.jpg",
      "/assets/images/electric-fence-close.jpg",
      "/assets/images/energizer-setup.jpg",
    ],
    tags: ["Electric Fence", "Ibadan", "Factory", "Perimeter Security"],
  },
  {
    id: 47,
    slug: "kano-warehouse-solar",
    title: "Solar Installation for Warehouse in Kano",
    author: COMPANY_NAME,
    date: "January 2023",
    location: "Kano",
    category: "Solar",
    image: "/assets/images/kano-warehouse.jpeg",
    excerpt: "Installed 12KW solar system to power a large warehouse.",
    description: `
      <p>A warehouse in Kano needed a reliable power source for lighting and security systems. We installed a 12KW solar system.</p>
      
      <h2>System Components</h2>
      <ul>
        <li>28 x 450W solar panels (12.6KW total)</li>
        <li>2 x 6KVA hybrid inverters</li>
        <li>15KWh lithium battery bank</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>24/7 power for lighting and security</li>
        <li>Reduced diesel generator usage</li>
        <li>Lower operating costs</li>
      </ul>
    `,
    gallery: [
      "/assets/images/kano-warehouse.jpeg",
      "/assets/images/solar-roof.jpg",
      "/assets/images/inverter-install.jpg",
    ],
    tags: ["Solar", "Kano", "Warehouse", "Hybrid"],
  },
  {
    id: 48,
    slug: "anambra-hotel-cctv",
    title: "CCTV for Hotel in Anambra",
    author: COMPANY_NAME,
    date: "December 2022",
    location: "Anambra",
    category: "Security",
    image: "/assets/images/anambra-hotel.jpg",
    excerpt: "Installed 16 cameras for a hotel, covering all public areas.",
    description: `
      <p>A hotel in Anambra wanted to ensure guest safety and monitor public areas. We installed 16 cameras.</p>
      
      <h2>System Installed</h2>
      <ul>
        <li>16 high‑definition dome cameras</li>
        <li>16‑channel NVR with 6TB storage</li>
        <li>Remote viewing via mobile app</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Enhanced guest safety</li>
        <li>Deters theft and vandalism</li>
        <li>Quick incident review</li>
      </ul>
    `,
    gallery: [
      "/assets/images/anambra-hotel.jpg",
      "/assets/images/cctv-install.jpg",
      "/assets/images/nvr-setup.jpg",
    ],
    tags: ["CCTV", "Anambra", "Hotel", "Surveillance"],
  },
  {
    id: 49,
    slug: "warri-market-lights",
    title: "Solar Street Lights for Market in Warri",
    author: COMPANY_NAME,
    date: "November 2022",
    location: "Delta",
    category: "Solar",
    image: "/assets/images/warri-market.jpg",
    excerpt: "Installed 20 solar street lights around Warri main market.",
    description: `
      <p>The main market in Warri lacked adequate lighting, leading to security concerns. We installed 20 solar street lights.</p>
      
      <h2>Installation</h2>
      <ul>
        <li>20 all‑in‑one solar street lights with 60W LED</li>
        <li>Poles installed at key points</li>
        <li>Automatic dusk‑to‑dawn operation</li>
      </ul>

      <h2>Impact</h2>
      <ul>
        <li>Improved safety for traders and customers</li>
        <li>Extended business hours</li>
        <li>Reduced crime</li>
      </ul>
    `,
    gallery: [
      "/assets/images/warri-market.jpg",
      "/assets/images/street-light-night.jpg",
      "/assets/images/street-light-install.jpg",
    ],
    tags: ["Solar Street Lights", "Delta", "Market", "LED"],
  },
  {
    id: 50,
    slug: "ondo-hospital-cctv",
    title: "CCTV for Hospital in Ondo",
    author: COMPANY_NAME,
    date: "October 2022",
    location: "Ondo",
    category: "Security",
    image: "/assets/images/ondo-hospital.jpg",
    excerpt: "Installed 12 cameras with night vision for a general hospital.",
    description: `
      <p>A general hospital in Ondo needed to monitor premises and ensure patient safety. We installed 12 cameras with night vision.</p>
      
      <h2>System Installed</h2>
      <ul>
        <li>12 high‑definition bullet cameras</li>
        <li>16‑channel NVR with 6TB storage</li>
        <li>Night vision for 24/7 monitoring</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Enhanced security for patients and staff</li>
        <li>Deters theft and vandalism</li>
        <li>Quick incident review</li>
      </ul>
    `,
    gallery: [
      "/assets/images/ondo-hospital.jpg",
      "/assets/images/cctv-install.jpg",
      "/assets/images/nvr-setup.jpg",
    ],
    tags: ["CCTV", "Ondo", "Hospital", "Surveillance"],
  },
];

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Project Not Found
            </h1>
            <Button asChild>
              <Link to="/project-showcase">Back to Projects</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedProjects = projectsData
    .filter((p) => p.slug !== slug && p.category === project.category)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen">
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
              <Package className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-green-50 max-w-2xl mx-auto font-maven">
              {project.category} • {project.location}
            </p>
          </div>
        </section>

        <section className="bg-white py-4 border-b font-maven">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Link
                to="/project-showcase"
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Projects</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
              <span>/</span>
              <Link to="/project-showcase" className="hover:text-green-600">
                Projects
              </Link>
              <span className="text-gray-900 font-medium line-clamp-1">
                {project.title}
              </span>
            </div>
          </div>
        </section>

        <article className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{project.location}</span>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {project.category}
                </span>
              </div>

              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: project.description }}
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.75",
                  color: "#374151",
                }}
              />

              <div className="mb-12 pb-12 border-b">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Project Tags:
                </h3>
                <div className="flex flex-wrap gap-2 font-maven">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-green-100 hover:text-green-700 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-center text-white mb-12">
                <h3 className="text-2xl font-bold mb-4">
                  Need a Similar Solution?
                </h3>
                <p className="text-green-50 mb-6 font-maven">
                  Contact us today for a free consultation and quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center font-maven">
                  <Button
                    className="bg-white text-green-700 hover:bg-gray-100"
                    size="lg"
                    asChild
                  >
                    <a
                      href={`https://api.whatsapp.com/send/?text=Hi%20${encodeURIComponent(
                        COMPANY_NAME,
                      )},%20I'm%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(
                        project.title,
                      )}&phone=2348137306375`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Free Quote
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700"
                    size="lg"
                    asChild
                  >
                    <Link to="/contact-us">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {relatedProjects.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Related Projects
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedProjects.map((p) => (
                    <Link
                      key={p.id}
                      to={`/project-showcase/project/${p.slug}`}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">{p.date}</p>
                        <h3 className="text-lg font-bold text-gray-900 hover:text-green-600 transition-colors">
                          {p.title}
                        </h3>
                      </div>
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

export default ProjectDetailPage;
