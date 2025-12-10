import "swiper/css";
import "swiper/css/navigation";

import { ArrowRight, Calendar, User } from "feather-icons-react";
import { useState } from "react";

import {
  homeSlider1,
  homeSlider2,
  homeSlider3,
  homeSlider4,
  homeSlider5,
  popularDestionation4,
  popularDestionation5,
  popularDestionation6,
  popularDestionation7,
  popularDestionation8,
  popularDestionation9,
} from "@/assets/index";

const data = [
  {
    img: popularDestionation9,
    days: "7 Days",
    persons: "2 Person",
    title: "Greece",
    price: "$128",
    category: "Europe",
  },
  {
    img: popularDestionation7,
    days: "4 Days",
    persons: "3 Person",
    title: "Japan",
    price: "$390",
    category: "Asia",
  },
  {
    img: popularDestionation8,
    days: "5 Days",
    persons: "4 Person",
    title: "Norway",
    price: "$430",
    category: "Europe",
  },
  {
    img: popularDestionation4,
    days: "7 Days",
    persons: "2 Person",
    title: "Chine",
    price: "$128",
    category: "Asia",
  },
  {
    img: popularDestionation5,
    days: "4 Days",
    persons: "3 Person",
    title: "Poland",
    price: "$390",
    category: "Europe",
  },
  {
    img: popularDestionation6,
    days: "5 Days",
    persons: "4 Person",
    title: "Jamaika",
    price: "$430",
    category: "Africa",
  },
  {
    img: homeSlider1,
    days: "6 Days",
    persons: "2 Person",
    title: "Korea",
    price: "$520",
    category: "Asia",
  },
  {
    img: homeSlider2,
    days: "5 Days",
    persons: "4 Person",
    title: "Denmark",
    price: "$760",
    category: "Europe",
  },
  {
    img: homeSlider3,
    days: "3 Days",
    persons: "2 Person",
    title: "Nepal",
    price: "$410",
    category: "Asia",
  },
  {
    img: homeSlider4,
    days: "7 Days",
    persons: "3 Person",
    title: "Italy",
    price: "$620",
    category: "Europ",
  },
  {
    img: homeSlider5,
    days: "4 Days",
    persons: "2 Person",
    title: "Egypt",
    price: "$580",
    category: "Africa",
  },
];

export default function DestinationTabs() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Asia", "Europe", "Africa"];

  const filteredData =
    activeTab === "All"
      ? data
      : data.filter((item) => item.category === activeTab);

  return (
    <section className="py-10 lg:py-16 container mx-auto px-4 md:px-10 lg:px-20 max-w-7xl">
      {/* Section Heading */}
      <div className="text-center mb-5 lg:mb-10">
        <h3 className="text-[#F16C52] text-lg font-semibold">
          Benefits We Provide
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold playfair">
          Why You Should Choose Us
        </h2>
      </div>

      {/* TAB BUTTONS */}
      <div className="flex justify-center gap-2 md:gap-6 mb-10 border-b-2 border-gray-200 w-full overflow-x-auto scrollbar-hide pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-base md:text-lg whitespace-nowrap transition-all duration-300 
              ${
                activeTab === tab
                  ? "text-[#F16C52] border-b-2 border-b-[#F16C52]"
                  : "text-gray-700 border-b-2 border-transparent"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* GRID LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredData.map((item, i) => (
          <div
            key={i}
            className="mx-auto bg-gray-50 rounded-3xl p-4 border border-white hover:border-[#E55E46] transition-all duration-300 w-full"
          >
            {/* IMAGE BOX */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src={item.img}
                alt=""
                className="w-full h-56 md:h-64 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* DETAILS */}
            <div className="mt-4 px-1 md:px-2">
              <div className="flex items-center gap-4 text-gray-600 text-sm">
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#F16C52]" />
                  {item.days}
                </span>

                <span className="h-4 w-px bg-gray-300"></span>

                <span className="flex items-center gap-2">
                  <User size={14} className="text-[#F16C52]" />
                  {item.persons}
                </span>
              </div>

              <h3 className="mt-2 text-xl font-semibold text-gray-900 playfair">
                {item.title}
              </h3>

              <div className="mt-4 flex items-center justify-between border-t border-gray-300 pt-3">
                <span className="text-2xl font-bold text-[#F16C52]">
                  {item.price}
                </span>

                <button className="flex items-center gap-1 text-gray-900 hover:text-[#F16C52] transition text-sm">
                  Book Now <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
