import { ArrowLeft, ArrowRight } from "feather-icons-react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  ppl1,
  ppl2,
  ppl3,
  ppl4,
  ppl5,
  sixtySix,
  testimonialBG,
} from "../../assets/index";

const testimonials = [
  {
    id: 1,
    text: "The trip was completely hassle-free, and the experience was truly unforgettable. The guides were professional, and their knowledge of the local culture was outstanding. I would definitely book with RR TOURISM again!",
    name: "Rahat Khan",
    title: "Happy Explorer",
    image: sixtySix,
  },
  {
    id: 2,
    text: "From start to finish, everything was perfectly organized. The team made sure we were comfortable throughout the journey, and every destination felt magical. RR TOURISM exceeded my expectations — highly recommended!",
    name: "Aminul Chowdhury",
    title: "Happy Explorer",
    image: sixtySix,
  },
  {
    id: 3,
    text: "An absolutely wonderful experience! The arrangements were smooth, the service was exceptional, and every moment felt special. Thanks to RR TOURISM, we created memories that will last a lifetime!",
    name: "Milon Ali",
    title: "Happy Explorer",
    image: sixtySix,
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${testimonialBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FCFAF5]/80"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 lg:py-32 flex flex-col md:flex-row items-center gap-16 md:gap-24 lg:gap-40">
        {/* ============== Left Circle Images ============== */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[#F5F0E5] rounded-full shrink-0 mx-auto">
          <img
            src={ppl1}
            className="absolute top-2 left-0 w-20 sm:w-24 lg:w-28 rounded-full"
          />
          <img
            src={ppl2}
            className="absolute -top-5 right-0 w-20 sm:w-24 lg:w-28 rounded-full"
          />
          <img
            src={ppl3}
            className="absolute -bottom-5 left-2 w-20 sm:w-24 lg:w-28 rounded-full"
          />
          <img
            src={ppl4}
            className="absolute bottom-5 right-0 w-20 sm:w-24 lg:w-28 rounded-full"
          />
          <img
            src={ppl5}
            className="absolute top-1/2 left-1/2 w-28 sm:w-32 lg:w-40 -translate-x-1/2 -translate-y-1/2 
            bg-white p-6 sm:p-8 lg:p-10 rounded-full"
          />
        </div>

        {/* ============== Right Text + Slider ============== */}
        <div className="w-full md:w-1/2 text-gray-800">
          {/* Title */}
          <p className="text-lg text-[#F26D52] text-center lg:text-start">
            Testimonials
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl playfair font-semibold leading-snug text-center lg:text-start">
            Voices of Our Happy Travelers: Your Next Journey, Inspired by Them
          </h2>

          {/* Slider */}
          <div className="w-full mt-6 md:mt-6">
            <Swiper
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              loop={true}
              modules={[Navigation]}
              slidesPerView={1}
              speed={900}
              className=""
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <p className="my-6 text-amber-950 text-base sm:text-lg leading-relaxed">
                    “{item.text}”
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full p-2 bg-[#F26D52] object-contain"
                    />
                    <div>
                      <h2 className="text-lg sm:text-xl font-semibold">
                        {item.name}
                      </h2>
                      <p className="text-gray-500 text-sm">{item.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Arrows */}
            <div className="flex items-center gap-6 mt-6">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="custom-prev cursor-pointer"
              >
                <ArrowLeft size={28} />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="custom-next cursor-pointer"
              >
                <ArrowRight size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
