import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowLeft, ArrowRight, Calendar, User } from "feather-icons-react";
import { useRef, useState } from "react";

import {
  popularDestionation10,
  popularDestionation7,
  popularDestionation8,
  popularDestionation9,
} from "@/assets/index";
import { Link } from "react-router-dom";

const data = [
  {
    img: popularDestionation7,
    days: "5 Days",
    persons: "2 Person",
    title: "Kyoto, Japan",
    price: "$499",
  },
  {
    img: popularDestionation8,
    days: "7 Days",
    persons: "3 Person",
    title: "The Dolomites, Italy",
    price: "$690",
  },
  {
    img: popularDestionation9,
    days: "4 Days",
    persons: "3 Person",
    title: "Santorini, Greece",
    price: "$550",
  },
  {
    img: popularDestionation10,
    days: "6 Days",
    persons: "2 Person",
    title: "Banff National Park, Canada",
    price: "$720",
  },
  {
    img: popularDestionation7,
    days: "5 Days",
    persons: "2 Person",
    title: "Kyoto, Japan",
    price: "$499",
  },
  {
    img: popularDestionation8,
    days: "7 Days",
    persons: "3 Person",
    title: "The Dolomites, Italy",
    price: "$690",
  },
  {
    img: popularDestionation9,
    days: "4 Days",
    persons: "3 Person",
    title: "Santorini, Greece",
    price: "$550",
  },
  {
    img: popularDestionation10,
    days: "6 Days",
    persons: "2 Person",
    title: "Banff National Park, Canada",
    price: "$720",
  },
];

export default function DestinationSlider() {
  const swiperRef = useRef(null);
  const [isPrevClick, setIsPrevClick] = useState(false);
  const [isNextClick, setIsNextClick] = useState(false);

  return (
    <section className="py-10 lg:py-16 container mx-auto max-w-7xl px-5 lg:px-20">
      {/* Section Heading */}
      <div className="text-center mb-5 lg:mb-10">
        <h3 className="text-[#F16C52] text-lg font-semibold">Best Places</h3>
        <h2 className="text-4xl md:text-5xl font-bold playfair">
          Popular Destinations
        </h2>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i} className="px-2">
            <div className="mx-auto bg-gray-50 rounded-3xl p-4 border border-white hover:border-[#E55E46] transition-all duration-300 cursor-pointer">
              {/* IMAGE BOX */}
              <Link to="/booking">
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-56 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* DETAILS */}
                <div className="mt-4 px-4">
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
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ARROWS */}
      <div className="flex gap-4 justify-center mt-6">
        {/* Prev Button */}
        <button
          onClick={() => {
            setIsPrevClick(true);
            swiperRef.current?.slidePrev();

            setTimeout(() => {
              setIsPrevClick(false);
            }, 300);
          }}
          className={`w-10 h-10 lg:w-14 lg:h-14 rounded-full border flex items-center justify-center transition
    ${isPrevClick ? "bg-[#F26D52] text-white" : "bg-white text-black"}
    hover:bg-[#F26D52] hover:text-white
  `}
          aria-label="Prev"
        >
          <ArrowLeft />
        </button>

        {/* Next Button */}
        <button
          onClick={() => {
            setIsNextClick(true);
            swiperRef.current?.slideNext();
            setTimeout(() => {
              setIsNextClick(false);
            }, 300);
          }}
          className={`w-10 h-10 lg:w-14 lg:h-14 hover:bg-[#F26D52] hover:text-white rounded-full border flex items-center justify-center transition
      ${isNextClick ? "bg-[#F26D52] text-white" : "bg-white text-black"}
    `}
          aria-label="Next"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
