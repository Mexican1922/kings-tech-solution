import { Card, CardContent } from "@/components/ui/card";
import { Target, Award } from "lucide-react";

const MissionVisionSection: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Mission Card */}
        <Card className="border-2 border-green-100 hover:border-green-300 transition-all hover:shadow-xl group">
          <CardContent className="p-6 md:p-8">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
              <Target
                className="w-6 h-6 md:w-8 md:h-8 text-green-600 group-hover:text-white transition-colors"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg font-maven">
              To provide affordable, reliable, and sustainable energy solutions
              including solar panels, inverters, batteries, charge controllers,
              and street lights alongside professional electrical services such
              as CCTV installation, electric fencing, and house wiring. We
              empower Nigerian homes and businesses to achieve energy
              independence, enhance security, and contribute to a cleaner
              environment for future generations.
            </p>
          </CardContent>
        </Card>

        {/* Vision Card */}
        <Card className="border-2 border-green-100 hover:border-green-300 transition-all hover:shadow-xl group">
          <CardContent className="p-6 md:p-8">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
              <Award
                className="w-6 h-6 md:w-8 md:h-8 text-green-600 group-hover:text-white transition-colors"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg font-maven">
              To be West Africa's leading provider of integrated energy and
              security solutions, recognized for innovation, quality, and
              customer satisfaction. We envision a future where clean, reliable
              power and advanced security systems are accessible to every
              Nigerian, driving economic growth, safety, and environmental
              sustainability.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default MissionVisionSection;
