import { COMPANY_NAME } from "@/lib/constant";

const StorySection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image with stat box */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/images/about_us.jpg"
              alt={`${COMPANY_NAME} team installing solar panels`}
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async" // additional performance hint
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Responsive stat box */}
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-green-600 text-white p-4 md:p-8 rounded-xl shadow-lg">
            <p className="text-3xl md:text-5xl font-bold">2+</p>
            <p className="text-xs md:text-sm">Years Strong</p>
          </div>
        </div>

        {/* Text content */}
        <div>
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Illuminating Nigeria, One Home at a Time
          </h2>
          <div
            className="w-20 h-1 bg-green-600 rounded-full mb-6"
            aria-hidden="true"
          />

          <div className="space-y-4 text-gray-600 leading-relaxed font-maven max-w-prose">
            <p className="text-lg">
              Established in 2023 and headquartered in Lagos, {COMPANY_NAME} was
              born from a simple yet powerful vision: to make reliable, clean
              energy accessible to every Nigerian home and business.
            </p>
            <p className="text-lg">
              What started as a small operation has grown into one of the most
              recognized and trusted solar energy brands in the country. Today,
              with over 12 service centers strategically located across Nigeria,
              we've helped hundreds of customers break free from power
              instability and embrace sustainable energy.
            </p>
            <p className="text-lg">
              Our commitment goes beyond just selling solar products. We provide
              comprehensive solutions—from expert consultation and professional
              installation to ongoing maintenance and support. Our network of
              certified installers ensures that every system is set up safely,
              efficiently, and to the highest standards.
            </p>
            <p className="text-lg font-semibold text-gray-900">
              At {COMPANY_NAME}, we don't just power homes—we empower lives,
              enable businesses, and contribute to a cleaner, greener Nigeria.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StorySection;
