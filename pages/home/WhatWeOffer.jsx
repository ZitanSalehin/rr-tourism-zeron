import { ArrowRight } from "feather-icons-react";
import { s1, s2, s3, s4, s5, s6 } from "../../src/assets/index";

export default function WhatWeOffer() {
  const services = [
    {
      icon: s1,
      title: "Exciting Journeys",
      desc: "Embark on thrilling expeditions and immerse yourself in unforgettable experiences.",
    },
    {
      icon: s2,
      title: "Expert Guides",
      desc: "Our seasoned guides ensure a safe and enriching adventure, tailored to your needs.",
    },
    {
      icon: s3,
      title: "Personalized Packages",
      desc: "Choose from a variety of custom packages designed to suit every traveler.",
    },
    {
      icon: s4,
      title: "Scenic Trails",
      desc: "Explore breathtaking trails and discover the beauty of untouched nature.",
    },
    {
      icon: s5,
      title: "Family Adventures",
      desc: "Create lasting memories with family trips that are fun and suitable for all ages.",
    },
    {
      icon: s6,
      title: "Comprehensive Support",
      desc: "Receive a complete guide to make your adventure seamless and worry-free.",
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
                <img src={item.icon} alt="" className="w-12 h-12 mx-auto" />
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
