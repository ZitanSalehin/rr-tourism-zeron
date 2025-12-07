import {
  ArrowRight,
  CheckCircle,
  CloudLightning,
  Gift,
  Map,
  PhoneCall,
  Users,
} from "feather-icons-react";

export default function WhatWeOffer() {
  const services = [
    {
      icon: <CheckCircle size={30} />,
      title: "Seamless & Stress-Free Planning",
      desc: "We meticulously handle all your arrangements so you can focus purely on enjoying the joy of travel.",
    },
    {
      icon: <Map size={30} />,
      title: "Local Expertise, Global Insight",
      desc: "Travel with experienced guides who provide deep insights into local culture and hidden gems.",
    },
    {
      icon: <Gift size={30} />,
      title: "Tailor-Made Itineraries",
      desc: "Custom packages designed around your specific interests, budget, and desired timeline.",
    },
    {
      icon: <CloudLightning size={30} />,
      title: "Exclusive Off-the-Beaten Path Treks",
      desc: "Discover breathtaking, uncrowded natural trails known only by the experts.",
    },
    {
      icon: <Users size={30} />,
      title: "Multi-Generational Travel",
      desc: "Fun and safe family arrangements suitable for all ages, creating shared memories.",
    },
    {
      icon: <PhoneCall size={30} />,
      title: "24/7 Dedicated Concierge Support",
      desc: "Around-the-clock assistance for any need before, during, or after your adventure.",
    },
  ];

  return (
    <div className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
      {/* Title Section */}
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h3 className="text-[#F16C52] text-lg font-semibold tracking-wide">
            What We Offer
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 playfair">
            Best Services We Offer
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="px-6 py-10 bg-white rounded-2xl border-b-2 border-gray-50 hover:border-b-2 hover:border-[#F16C52] transition duration-500 flex flex-col items-center text-center group"
            >
              <div className="mb-4 transform transition-transform duration-300 group-hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto text-[#F16C52]">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2 playfair">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-4">{item.desc}</p>

              <button className="flex items-center text-orange-600 font-medium hover:underline">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
