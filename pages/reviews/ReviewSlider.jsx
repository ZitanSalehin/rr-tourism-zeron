import { ArrowLeft, ArrowRight } from "feather-icons-react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ppl1,
  ppl2,
  ppl3,
  ppl4,
  ppl5,
  sixtySixOrange,
} from "../../src/assets/index";

const testimonials = [
  {
    img: ppl1,
    name: "John Smith",
    stars: 5,
    text: "Amazing experience! The team was very professional and supportive",
  },
  {
    img: ppl2,
    name: "Sophia Brown",
    stars: 4,
    text: "Wonderful service and great attention to detail. Highly recommended!",
  },
  {
    img: ppl3,
    name: "Michael Lee",
    stars: 5,
    text: "Everything was smooth and well organized. Loved the entire experience!",
  },
  {
    img: ppl4,
    name: "Emma Wilson",
    stars: 5,
    text: "A memorable trip! Exceptional team coordination. Will join again for sure.",
  },
  {
    img: ppl5,
    name: "David Parker",
    stars: 4,
    text: "Great value for money. Friendly staff and excellent service!",
  },
];

const ReviewSlider = () => {
  const swiperRef = useRef(null);
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 lg:py-18">
      <h3 className="text-[#F16C52] text-lg font-semibold text-center mb-2">
        Testimonials
      </h3>
      <h2 className="text-4xl md:text-5xl font-bold playfair text-center mb-10">
        What Our Clients are Saying
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-gray-50 rounded-2xl border-b-2 border-[#F16C52] transition duration-500 px-6 py-8 h-full">
              {/* Top Icon */}
              <div className="w-12 h-12 flex items-center justify-center text-[#F26D52] mb-4">
                <img src={sixtySixOrange} alt="" srcset="" />
              </div>

              <p className="text-gray-600 mb-5">{item.text}</p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={item.img}
                  alt=""
                  className="w-14 h-14 rounded-full object-cover border border-gray-200"
                />

                <div>
                  <div className="flex text-yellow-400 mb-1">
                    {Array.from({ length: item.stars }).map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>

                  <p className="font-semibold text-lg text-gray-800 playfair">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">Happy Client</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* ARROWS */}
      <div className="flex gap-4 justify-center mt-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-12 lg:w-14 h-12 lg:h-14 rounded-full border flex items-center justify-center hover:bg-[#F26D52] hover:text-white transition"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-12 lg:w-14 h-12 lg:h-14 rounded-full border flex items-center justify-center hover:bg-[#F26D52] hover:text-white transition"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ReviewSlider;
