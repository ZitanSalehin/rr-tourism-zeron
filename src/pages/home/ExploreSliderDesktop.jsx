// components/ExploreSlider.jsx
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  homeSlider1,
  homeSlider2,
  homeSlider3,
  homeSlider4,
  homeSlider5,
} from "@/assets/index";
import { ArrowLeft, ArrowRight, MapPin } from "feather-icons-react";

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

export default function ExploreSliderDesktop() {
  const swiperRef = useRef(null);
  const [isPrevClick, setIsPrevClick] = useState(false);
  const [isNextClick, setIsNextClick] = useState(false);

  return (
    <div className="relative py-16">
      {/* Title and buttons (they remain inside the slider container) */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-lg text-[#F26D52]">Where to Go</p>
          <h2 className="text-5xl playfair font-semibold">
            Explore The World With Us
          </h2>
        </div>

        <div className="flex gap-3 absolute right-66 top-14">
          {/* Prev Button */}
          <button
            onClick={() => {
              setIsPrevClick(true);
              swiperRef.current?.slidePrev();

              setTimeout(() => {
                setIsPrevClick(false);
              }, 500);
            }}
            className={`w-14 h-14 rounded-full border flex items-center justify-center transition
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
              }, 500);
            }}
            className={`w-14 h-14 hover:bg-[#F26D52] hover:text-white rounded-full border flex items-center justify-center transition
      ${isNextClick ? "bg-[#F26D52] text-white" : "bg-white text-black"}
    `}
            aria-label="Next"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={5}
        centeredSlides={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 12 },
          480: { slidesPerView: 2, spaceBetween: 14 },
          768: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 18 },
          1280: { slidesPerView: 5, spaceBetween: 20 },
        }}
      >
        {places.map((p, i) => (
          <SwiperSlide
            key={i}
            className="rounded-xl overflow-hidden group cursor-pointer"
          >
            <div className="relative h-[380px] rounded-xl overflow-hidden">
              {/* Image */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                draggable="false"
              />

              {/* 🔥 Hover Overlay Shadow */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500"></div>

              {/* Rating */}
              <div className="absolute top-3 left-3 bg-black/10 px-2 py-1 rounded-md text-sm font-medium shadow text-white z-10">
                ⭐ {p.rating}
              </div>

              {/* Text */}
              <div className="absolute bottom-5 left-5 text-white z-10">
                <p className="playfair text-lg flex items-center gap-2 pb-2">
                  <MapPin size={16} /> {p.places}
                </p>
                <h3 className="text-2xl font-semibold drop-shadow playfair">
                  {p.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
