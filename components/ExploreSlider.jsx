// components/ExploreSlider.jsx
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowLeft, ArrowRight, MapPin } from "feather-icons-react";

const places = [
  {
    img: "https://images.pexels.com/photos/461755/pexels-photo-461755.jpeg",
    title: "Spain",
    rating: "3.9",
    places: 32,
  },
  {
    img: "https://images.pexels.com/photos/461755/pexels-photo-461755.jpeg",
    title: "Venice",
    rating: "4.5",
    places: 15,
  },
  {
    img: "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg",
    title: "London",
    rating: "4.8",
    places: 18,
  },
  {
    img: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg",
    title: "Chicago",
    rating: "4.7",
    places: 24,
  },
  {
    img: "https://images.pexels.com/photos/461755/pexels-photo-461755.jpeg",
    title: "Mumbai",
    rating: "3.8",
    places: 17,
  },
  {
    img: "https://images.pexels.com/photos/461755/pexels-photo-461755.jpeg",
    title: "Tokyo",
    rating: "4.5",
    places: 16,
  },
];

export default function ExploreSlider() {
  const swiperRef = useRef(null);

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
          <button
            onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
            className="w-14 h-14 rounded-full border flex items-center justify-center hover:bg-[#F26D52] hover:text-white transition"
            aria-label="Prev"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => swiperRef.current && swiperRef.current.slideNext()}
            className="w-14 h-14 rounded-full border flex items-center justify-center hover:text-white hover:bg-[#F26D52] transition"
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
          <SwiperSlide key={i} className="rounded-xl overflow-hidden">
            <div className="relative h-[380px] rounded-xl shadow">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover"
                draggable="false"
              />

              <div className="absolute top-3 left-3 bg-black/10 px-2 py-1 rounded-md text-sm font-medium shadow text-white">
                ⭐ {p.rating}
              </div>

              <div className="absolute bottom-5 left-5 text-white">
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
