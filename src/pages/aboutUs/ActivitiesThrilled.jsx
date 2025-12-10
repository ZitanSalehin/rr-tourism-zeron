import { activitiesThrilled, hill } from "@/assets/index";

const ActivitiesThrilled = () => {
  const stats = [
    { label: "Happy Explorers", value: "10K+" },
    { label: "Customer Satisfaction", value: "98%" },
    { label: "Unique Itineraries", value: "500+" },
  ];

  return (
    <section className="relative bg-gray-100 shadow-md overflow-hidden">
      <div className="absolute inset-0 bg-[#FCFAF5]/70"></div>

      {/* FLEX CONTAINER — NO GAP */}
      <div className="relative mx-auto min-h-[550px] lg:min-h-[700px] flex flex-col md:flex-row">
        {/* LEFT HALF (50%) */}
        <div className="relative flex flex-col justify-center items-end px-6 py-12 text-gray-800 w-full md:w-1/2">
          {/* Hill image bottom-left */}
          <div>
            <img
              src={hill}
              alt="hill"
              className="absolute bottom-0 left-0 w-36 md:w-130 z-1 opacity-30"
            />
            kj
          </div>

          {/* Orange shadow behind hill */}
          <div className="absolute bottom-0 left-0 w-full h-full bg-[#F26D52] z-0"></div>

          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-md">
            <p className="text-lg text-white text-center lg:text-start">
              About Us
            </p>
            <h2 className="text-3xl lg:text-5xl text-white playfair font-semibold text-center lg:text-start">
              Unveil Prime <br />
              Destinations With Us
            </h2>

            <p className="my-8 text-white text-center md:text-start">
              Our mission is to transform ordinary trips into extraordinary
              adventures. With local knowledge, seamless support, and attention
              to every detail, we ensure your journey is not just a vacation,
              but one of the best experiences of your life. Trust us, and we
              will unveil the world for you.
            </p>

            {/* Stats */}
            <div className="flex flex-col md:flex-row flex-wrap gap-2">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md py-8 w-full md:w-36 text-center border-b-2 border-[#F26D52]"
                >
                  <p className="text-4xl font-bold text-[#F26D52]">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 text-xs pt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT HALF (50% COVER IMAGE) */}
        <div className="relative w-full md:w-1/2 h-[350px] md:h-auto">
          <div className="absolute inset-0 bg-linear-to-b from-orange-300/70 to-orange-100/20  pointer-events-none"></div>

          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${activitiesThrilled})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesThrilled;
