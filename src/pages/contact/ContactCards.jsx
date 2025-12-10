import { Mail, MapPin, PhoneCall } from "feather-icons-react";

export default function ContactCards() {
  const services = [
    {
      icon: <MapPin size={40} className="text-[#F16C52]" />,
      title: "Our Location",
      add1: "House-57, Road-13, Block-E, Banani,",
      add2: "Dhaka, Bangladesh",
    },
    {
      icon: <PhoneCall size={40} className="text-[#F16C52]" />,
      title: "Phone Number",
      add1: "+88 01325080270",
      add2: "+88 01907098057",
    },
    {
      icon: <Mail size={40} className="text-[#F16C52]" />,
      title: "Our Email",
      add1: "info@rrtourism.com",
      add2: "rrtourism2021@gmail.com",
    },
  ];

  return (
    <div className="py-10 lg:py-32 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h3 className="text-[#F16C52] text-lg font-semibold tracking-wide">
            Contact Info
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 playfair">
            Our Contact Information
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="px-6 py-8 bg-white rounded-2xl flex flex-col items-center text-center group shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 transform transition-transform duration-300 group-hover:-translate-y-1">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2 playfair">
                {item.title}
              </h3>

              <p className="text-gray-600">{item.add1}</p>
              <p className="text-gray-600">{item.add2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
