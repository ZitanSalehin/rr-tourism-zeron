import { contactIcon1, contactIcon2, contactIcon3 } from "@/assets/index";

export default function ContactCards() {
  const services = [
    {
      icon: contactIcon1,
      title: "Our Location",
      add1: "121 King Street, Melbourne",
      add2: "Victoria 3000 Australia",
    },
    {
      icon: contactIcon2,
      title: "Phone Number",
      add1: "(+61 3 8376 6284)",
      add2: "(+800 2345 6789)",
    },
    {
      icon: contactIcon3,
      title: "Our Email",
      add1: "info@atreves.com",
      add2: "atreves@gmail.com",
    },
  ];

  return (
    <div className="py-10 lg:py-32 px-6 md:px-12 lg:px-20 bg-gray-50">
      {/* Title Section */}
      <div className="container mx-auto max-w-7xl">
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
              className="px-6 py-8 bg-white rounded-2xl flex flex-col items-center text-center group"
            >
              <div className="mb-4 transform transition-transform duration-300 group-hover:-translate-y-1">
                <img src={item.icon} alt="" className="w-auto h-auto mx-auto" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2 playfair">
                {item.title}
              </h3>

              {/* Two-line address/phone/email */}
              <p className="text-gray-600">{item.add1}</p>
              <p className="text-gray-600">{item.add2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
