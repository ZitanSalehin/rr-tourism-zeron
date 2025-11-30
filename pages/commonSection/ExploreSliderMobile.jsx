// components/ExploreSlider.jsx
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowLeft, ArrowRight, MapPin } from "feather-icons-react";
import {
  homeSlider1,
  homeSlider2,
  homeSlider3,
  homeSlider4,
  homeSlider5,
} from "../../src/assets/index";

const places = [
  {
    img: homeSlider1,
    title: "Spain",
    rating: "3.9",
    places: 32,
  },
  {
    img: homeSlider2,
    title: "Venice",
    rating: "4.5",
    places: 15,
  },
  {
    img: homeSlider3,
    title: "London",
    rating: "4.8",
    places: 18,
  },
  {
    img: homeSlider4,
    title: "Chicago",
    rating: "4.7",
    places: 24,
  },
  {
    img: homeSlider5,
    title: "Mumbai",
    rating: "3.8",
    places: 17,
  },
  {
    img: homeSlider3,
    title: "Tokyo",
    rating: "4.5",
    places: 16,
  },
];

const ExploreSliderMobile = () => {
  const swiperRef = useRef(null);
  return (
    <div className="flex flex-col py-5 lg:py-20 px-5">
      {/* Title and Navigation Buttons */}
      <div className="flex items-center justify-center mb-6 relative">
        <div>
          <p className="text-lg text-[#F26D52] text-center">Where to Go</p>
          <h2 className="text-2xl lg:text-5xl playfair font-bold text-center mb-0 lg:mb-4">
            Explore The World With Us
          </h2>
        </div>
      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={3} // Default desktop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 14 }, // Mobile
          640: { slidesPerView: 1, spaceBetween: 16 }, // Large phones
          768: { slidesPerView: 2, spaceBetween: 18 }, // Tablets
          1024: { slidesPerView: 3, spaceBetween: 20 }, // Desktop
        }}
      >
        {places.map((p, i) => (
          <SwiperSlide
            key={i}
            className="rounded-xl overflow-hidden group cursor-pointer"
          >
            <div className="relative h-[340px] rounded-xl overflow-hidden">
              {/* Image */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                draggable="false"
              />

              {/* Shadow on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500"></div>

              {/* Rating */}
              <div className="absolute top-3 left-3 bg-black/20 px-2 py-1 rounded-md text-sm text-white z-10">
                ⭐ {p.rating}
              </div>

              {/* Text */}
              <div className="absolute bottom-5 left-5 text-white z-10">
                <p className="playfair text-lg flex items-center gap-2 pb-2">
                  <MapPin size={16} /> {p.places}
                </p>
                <h3 className="text-2xl font-semibold">{p.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-center mt-5">
        <button
          onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
          className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#F26D52] hover:text-white transition"
          aria-label="Prev"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => swiperRef.current && swiperRef.current.slideNext()}
          className="w-10 h-10 rounded-full border flex items-center justify-center transition"
          aria-label="Next"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ExploreSliderMobile;
