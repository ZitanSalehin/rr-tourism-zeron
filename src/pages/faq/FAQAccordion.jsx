import { ArrowRight, ArrowUp } from "feather-icons-react";
import { useState } from "react";

const faqData = [
  {
    q: "What types of adventure tours do you offer?",
    a: "We offer trekking, hiking, camping, jungle safaris, mountain biking, river rafting, and more adventure experiences.",
  },
  {
    q: "Are the tours suitable for beginners?",
    a: "Yes! We have beginner-friendly tours with expert guides to ensure safety and fun for all skill levels.",
  },
  {
    q: "How can I prepare physically for an adventure tour?",
    a: "Light cardio, stretching, and regular walking or jogging are great ways to prepare for most tours.",
  },
  {
    q: "What safety measures are in place?",
    a: "Our guides are certified, routes are pre-checked, first-aid kits are provided, and safety briefings are mandatory.",
  },
  {
    q: "How do I book a tour?",
    a: "You can book through our website, contact form, or by calling our customer support team.",
  },
  {
    q: "What should I bring on an adventure tour?",
    a: "Comfortable clothing, strong shoes, water bottle, sunscreen, and a small backpack are recommended.",
  },
  {
    q: "Are meals included in the tour packages?",
    a: "Meals are included in selected packages. Please check the itinerary before booking.",
  },
  {
    q: "Is travel insurance included?",
    a: "Travel insurance is optional. We recommend adding it for extra safety and peace of mind.",
  },
];

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState(Array(faqData.length).fill(false));

  const toggle = (index) => {
    setOpenItems((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h3 className="text-[#F16C52] text-lg font-semibold text-center">
        Faq's
      </h3>
      <h2 className="text-4xl md:text-5xl font-bold playfair text-center pb-10">
        Frequently Asked Questions
      </h2>

      {/* 2 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqData.map((item, index) => (
          <button
            onClick={() => toggle(index)}
            key={index}
            className="bg-white rounded-xl p-5 h-fit border border-white hover:border-[#F16C52] cursor-pointer"
          >
            {/* Header */}
            <div className="w-full flex justify-between items-center text-left">
              <span
                className={`font-semibold text-lg playfair ${
                  openItems[index] ? "text-[#F16C52]" : "text-gray-900"
                }`}
              >
                {item.q}
              </span>

              <span className="text-gray-700">
                {openItems[index] ? <ArrowUp /> : <ArrowRight />}
              </span>
            </div>

            {/* Content */}
            <div
              className={`transition-all duration-700 overflow-hidden text-left ${
                openItems[index] ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
