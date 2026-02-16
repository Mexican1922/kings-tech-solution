import { MapPin } from "lucide-react";

const LOCATIONS: string[] = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Kano",
  "Ibadan",
  "Enugu",
  "Benin City",
  "Calabar",
  "Ilorin",
  "Osogbo",
  "Akure",
  "Gusau",
];

const LocationsSection: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
          Nationwide Coverage
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
          Our Service Locations
        </h2>
        <div className="w-20 h-1 bg-green-600 rounded-full mx-auto mt-4" />
        <p className="text-lg text-gray-600 mt-6">
          With 12 service centers across Nigeria, we're always close by
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {LOCATIONS.map((location, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-md transition-all"
          >
            <MapPin className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-medium text-gray-900">{location}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LocationsSection;
