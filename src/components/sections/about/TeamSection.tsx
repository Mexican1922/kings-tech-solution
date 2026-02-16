import { Card, CardContent } from "@/components/ui/card";
import { team } from "@/data/aboutData";
import { COMPANY_NAME } from "@/lib/constant";

const TeamSection: React.FC = () => {
  const isSingle = team.length === 1;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Meet the Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Our Leadership
          </h2>
          <div
            className="w-20 h-1 bg-green-600 rounded-full mx-auto"
            aria-hidden="true"
          />
          <p className="text-lg text-gray-600 mt-6 font-maven">
            Experienced professionals dedicated to solar energy excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/images/team.jpeg"
              alt={`${COMPANY_NAME} team`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
              <div className="p-6 md:p-8 text-white">
                <p className="text-lg md:text-xl font-maven italic max-w-2xl">
                  "Together, we're building a brighter, more sustainable future
                  for Nigeria."
                </p>
                <p className="text-sm md:text-base font-semibold mt-2">
                  — The {COMPANY_NAME} Team
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Individual team members */}
        <div
          className={
            isSingle
              ? "flex justify-center"
              : "grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          }
        >
          {team.map((member, index) => (
            <Card
              key={index}
              className={`border border-gray-200 hover:shadow-xl transition-all group overflow-hidden ${
                isSingle ? "max-w-md" : ""
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-semibold text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed font-maven">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
