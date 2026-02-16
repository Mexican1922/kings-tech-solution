import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Users, Award } from "lucide-react";
import { COMPANY_NAME, COMPANY_PHONE } from "@/lib/constant";

const states = [
  { value: "", label: "Choose a state" },
  { value: "lagos", label: "Lagos" },
  { value: "abuja", label: "Abuja (FCT)" },
  { value: "kano", label: "Kano" },
  { value: "rivers", label: "Rivers (Port Harcourt)" },
  { value: "oyo", label: "Oyo (Ibadan)" },
  { value: "kaduna", label: "Kaduna" },
  { value: "enugu", label: "Enugu" },
  { value: "edo", label: "Edo (Benin)" },
  { value: "delta", label: "Delta (Warri/Asaba)" },
  { value: "ondo", label: "Ondo" },
  { value: "plateau", label: "Plateau (Jos)" },
  { value: "cross-river", label: "Cross River (Calabar)" },
];

const FindInstallersPage = () => {
  const [selectedState, setSelectedState] = useState("");

  // Clean phone number for WhatsApp (remove spaces, +)
  const whatsappNumber = COMPANY_PHONE.replace(/\D/g, "");

  // Memoized selected state label
  const selectedStateLabel = useMemo(() => {
    const state = states.find((s) => s.value === selectedState);
    return state ? state.label : "";
  }, [selectedState]);

  const handleConnectInstaller = () => {
    if (!selectedState) return;

    // Broad message covering all services
    const message = `Hi ${COMPANY_NAME}, I need a certified professional for solar installation, CCTV, electric fencing, or house wiring in ${selectedStateLabel}. Can you connect me with an expert?`;
    const whatsappUrl = `https://api.whatsapp.com/send/?text=${encodeURIComponent(
      message,
    )}&phone=${whatsappNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-green-700 via-green-600 to-green-500">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Find Certified Installers
            </h1>
            <p className="text-xl md:text-2xl text-green-50 max-w-2xl mx-auto mb-6 font-maven">
              Connect with our network of professional installers across Nigeria
              for solar, CCTV, electric fencing, and electrical services.
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="bg-white border-b py-4 font-maven">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
                aria-label="Go back to homepage"
              >
                <ArrowLeft className="w-4 h-4" />
                Go back
              </Link>
              <span className="text-gray-400" aria-hidden="true">
                /
              </span>
              <Link
                to="/"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Homepage
              </Link>
              <span className="text-gray-400" aria-hidden="true">
                /
              </span>
              <span className="text-gray-900 font-medium">Installers</span>
            </div>
          </div>
        </section>

        {/* Main Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Select Your State
                </h2>
                <p className="text-lg text-gray-600 font-maven">
                  Choose your location and we'll connect you with certified
                  professionals in your area.
                </p>
              </div>

              <Card className="border-2 border-gray-200 hover:border-green-300 transition-all">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="state-filter"
                        className="block text-lg font-semibold text-gray-900 mb-3"
                      >
                        Where do you need an installer?
                      </label>
                      <select
                        id="state-filter"
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 bg-white text-gray-900 font-medium text-lg font-maven"
                        aria-describedby="state-help"
                      >
                        {states.map((state) => (
                          <option key={state.value} value={state.value}>
                            {state.label}
                          </option>
                        ))}
                      </select>
                      <p id="state-help" className="text-sm text-gray-500 mt-2">
                        We currently cover 12 states across Nigeria.
                      </p>
                    </div>

                    {selectedState && (
                      <div className="pt-4">
                        <Button
                          onClick={handleConnectInstaller}
                          className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
                          size="lg"
                          disabled={!selectedState}
                        >
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Connect with Installer in {selectedStateLabel}
                        </Button>

                        <p className="text-center text-sm text-gray-500 mt-4">
                          You'll be connected via WhatsApp with our installer
                          network. Expect a response within 24 hours.
                        </p>
                      </div>
                    )}

                    {!selectedState && (
                      <div className="text-center py-8" aria-live="polite">
                        <p className="text-gray-500 font-maven">
                          Please select a state to continue.
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {selectedState && (
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <Card className="text-center">
                    <CardContent className="p-4">
                      <Users
                        className="w-8 h-8 text-green-600 mx-auto mb-2"
                        aria-hidden="true"
                      />
                      <p className="font-semibold text-gray-900">Verified</p>
                      <p className="text-sm text-gray-600">
                        Certified professionals
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="p-4">
                      <Award
                        className="w-8 h-8 text-green-600 mx-auto mb-2"
                        aria-hidden="true"
                      />
                      <p className="font-semibold text-gray-900">Quality</p>
                      <p className="text-sm text-gray-600">
                        Professional service
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="p-4">
                      <MessageCircle
                        className="w-8 h-8 text-green-600 mx-auto mb-2"
                        aria-hidden="true"
                      />
                      <p className="font-semibold text-gray-900">Instant</p>
                      <p className="text-sm text-gray-600">Quick response</p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Our Certified Installers?
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center border-2 hover:border-green-300 transition-all">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Certified Professionals
                    </h3>
                    <p className="text-gray-600 font-maven">
                      All installers are trained, certified, and verified by us
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-2 hover:border-green-300 transition-all">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Local Expertise
                    </h3>
                    <p className="text-gray-600 font-maven">
                      Installers familiar with your area and local requirements
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-2 hover:border-green-300 transition-all">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Quick Response
                    </h3>
                    <p className="text-gray-600 font-maven">
                      Fast communication and scheduling via WhatsApp
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-green-600 to-green-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Can't Find Your State?
            </h2>
            <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto font-maven">
              Contact us directly and we'll help you find the right installer
              for your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center font-maven">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-gray-100"
                asChild
              >
                <a
                  href={`https://api.whatsapp.com/send/?text=Hi%20${encodeURIComponent(
                    COMPANY_NAME,
                  )},%20I%20need%20help%20finding%20an%20installer&phone=${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact Us on WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700"
                asChild
              >
                <Link to="/contact-us">Send Us a Message</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FindInstallersPage;
