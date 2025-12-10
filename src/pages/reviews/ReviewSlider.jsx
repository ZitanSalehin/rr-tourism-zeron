import { ppl1, ppl2, ppl3, ppl4, ppl5, zeron } from "@/assets/index";
import { ArrowLeft, ArrowRight } from "feather-icons-react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    img: ppl1,
    name: "Jara Chowdhury",
    stars: 5,
    text: (
      <>
        Amazing experience! <strong>RR Tourism</strong> handled every detail
        with such professionalism and care. Their support throughout the entire
        trip made everything incredibly smooth and enjoyable. I truly appreciate
        their dedication to customer satisfaction.
      </>
    ),
  },
  {
    img: ppl2,
    name: "Selina Rahman",
    stars: 4,
    text: (
      <>
        Wonderful service and impressive attention to detail.{" "}
        <strong>RR Tourism</strong> ensured that every moment of the journey was
        comfortable and well-organized. Their team was responsive, friendly, and
        genuinely committed to providing a memorable travel experience.
      </>
    ),
  },
  {
    img: ppl3,
    name: "Arnab Islam",
    stars: 5,
    text: (
      <>
        From start to finish, everything was flawlessly executed.{" "}
        <strong>RR Tourism</strong>’s planning, communication, and coordination
        made the trip incredibly enjoyable. I’m grateful for their efforts to
        deliver such a smooth and stress-free travel experience.
      </>
    ),
  },
  {
    img: ppl4,
    name: "Shumi Akhtar",
    stars: 5,
    text: (
      <>
        A truly memorable trip! <strong>RR Tourism</strong> went above and
        beyond to ensure our comfort, safety, and overall satisfaction. Their
        exceptional organization and warm hospitality made the entire tour
        special. I look forward to traveling with them again.
      </>
    ),
  },
  {
    img: ppl5,
    name: "Mahfuza Khatun",
    stars: 4,
    text: (
      <>
        Great value for money with outstanding service!{" "}
        <strong>RR Tourism</strong>’s team was friendly, cooperative, and always
        ready to assist. Their well-managed schedules and thoughtful
        arrangements added so much convenience and joy to the whole experience.
      </>
    ),
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
                <img src={zeron} alt="" srcset="" />
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
