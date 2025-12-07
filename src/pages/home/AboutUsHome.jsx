import { bgInHomeAboutUs, happyPeople, logoWithoutText } from "@/assets/index";

const stats = [
  { label: "Happy Explorers", value: "10K+" },
  { label: "Customer Satisfaction", value: "98%" },
  { label: "Unique Itineraries", value: "500+" },
];

const AboutUsHome = () => {
  return (
    <section
      className="relative bg-gray-100 shadow-md overflow-hidden"
      style={{
        backgroundImage: `url(${bgInHomeAboutUs})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#FCFAF5]/70"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side Image */}
        <div className="relative w-full md:w-1/2">
          <img
            src={happyPeople}
            alt="About Us"
            className="rounded-full shadow-lg w-full object-cover"
          />
          <img
            src={logoWithoutText}
            alt="Logo"
            className="absolute lg:bottom-2 -bottom-2 right-14 w-16 h-16 md:w-28 md:h-32"
          />
        </div>

        {/* Right Side Text */}
        <div className="w-full md:w-1/2 text-gray-800">
          <p className="text-lg text-[#F26D52] text-center lg:text-start">
            About Us
          </p>
          <h2 className="text-3xl lg:text-5xl playfair font-semibold text-center lg:text-start">
            Unveil Prime <br />
            Destinations With Us
          </h2>
          <p className="my-8 text-amber-950 text-center lg:text-start">
            Our mission is to transform ordinary trips into extraordinary
            adventures. With local knowledge, seamless support, and attention to
            every detail, we ensure your journey is not just a vacation, but one
            of the best experiences of your life. Trust us, and we will unveil
            the world for you.
          </p>

          {/* Stats Cards */}
          <div className="flex flex-col lg:flex-row flex-wrap gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md py-8 lg:w-40 text-center border-b-2 border-[#F26D52]"
              >
                <p className="text-4xl font-bold text-[#F26D52]">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm pt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;
