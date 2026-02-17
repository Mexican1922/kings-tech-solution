import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, FileText } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

const WHATSAPP_NUMBER = "2348137306375";
const WHATSAPP_MESSAGE_QUOTE =
  "Hi KingsTech-Solution, I need a free quote for your services.";
const WHATSAPP_MESSAGE_CHAT =
  "Hi KingsTech-Solution, I have a question about your services.";
const WHATSAPP_URL_QUOTE = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_QUOTE)}`;
const WHATSAPP_URL_CHAT = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_CHAT)}`;

const STATS: Stat[] = [
  { value: "2023", label: "Established" },
  { value: "On-Request", label: "Service Deployment" },
  { value: "100+", label: "Happy Customers" },
  { value: "24/7", label: "Support" },
];

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Enjoy Uninterrupted Power?
          </h2>

          <p className="text-xl md:text-2xl text-green-50 mb-12 max-w-2xl mx-auto font-maven">
            Join thousands of satisfied customers across Nigeria enjoying
            reliable, sustainable solar energy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 font-maven">
            {/* Get a Free Quote – now opens WhatsApp with quote message */}
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-6 group shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a
                href={WHATSAPP_URL_QUOTE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <FileText className="mr-2 h-5 w-5" />
                Get a Free Quote Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 text-lg px-8 py-6 group shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a
                href={WHATSAPP_URL_CHAT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Send a Message
              </a>
            </Button>
          </div>

          <ul
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-green-500 font-maven"
            aria-label="Company statistics"
          >
            {STATS.map((stat, index) => (
              <li key={index} className="text-center">
                <p className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-green-100 text-sm font-maven">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 rounded-full opacity-20 blur-3xl"
        aria-hidden="true"
      />
    </section>
  );
};

export default CTASection;
