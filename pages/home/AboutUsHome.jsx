import {
  bgInHomeAboutUs,
  happyPeople,
  logoWithoutText,
} from "../../src/assets/index";

const stats = [
  { label: "Success Journey", value: "15k" },
  { label: "Award Wins", value: "26+" },
  { label: "Years of Experience", value: "30+" },
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
      <div className="absolute inset-0 bg-white/60"></div>
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
            className="absolute bottom-2 right-14 w-16 h-16 md:w-28 md:h-32"
          />
        </div>

        {/* Right Side Text */}
        <div className="w-full md:w-1/2 text-gray-800">
          <p className="text-lg text-[#F26D52]">About Us</p>
          <h2 className="text-5xl playfair font-semibold">
            Unveil Prime <br />
            Destinations With Us
          </h2>
          <p className="my-8 text-amber-950">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </p>

          {/* Stats Cards */}
          <div className="flex flex-wrap gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md py-8 w-40 text-center border-b-2 border-[#F26D52]"
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
