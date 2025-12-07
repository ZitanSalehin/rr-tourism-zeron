import { discover, logoWithoutText } from "@/assets/index";
import { ArrowRight } from "feather-icons-react";
import { Link } from "react-router-dom";

const tickList = [
  "Excepteur sint occaecat cupidatat noru even.",
  "Duis aute irure dolor in reprehenderit in voluta facis.",
  "Rerum hic tenetur a sapiente delectus au occae.",
];

const DiscoverDestination = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side Image */}
        <div className="relative w-full md:w-1/2">
          <img
            src={discover}
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
            Discover Top <br />
            Destinations With Us
          </h2>
          <p className="my-8 text-amber-950 text-center lg:text-start">
            Our mission is to transform ordinary trips into extraordinary
            adventures. With local knowledge, seamless support, and attention to
            every detail, we ensure your journey is not just a vacation, but one
            of the best experiences of your life. Trust us, and we will unveil
            the world for you.
          </p>
          <ul className="space-y-3 w-full">
            {tickList.map((text, i) => (
              <li key={i} className="flex items-center gap-3">
                {/* circle with tick — using inline style for exact hex */}
                <span
                  className="shrink-0 rounded-full w-5 h-5 flex items-center justify-center"
                  style={{ backgroundColor: "#F26D52" }}
                  aria-hidden="true"
                >
                  {/* SVG tick — crisp and accessible */}
                  <svg
                    width="12"
                    height="9"
                    viewBox="0 0 12 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 4.5L4.2 7.6L11 1"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span className="text-gray-800">{text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 w-full flex justify-center lg:justify-start">
            <Link
              to="/contact"
              className="bg-[#F26D52] py-3 px-5 rounded-lg flex items-center gap-2 text-white w-fit mx-auto lg:mx-0 hover:bg-[#e55e46] transition"
            >
              Book Now
              <ArrowRight size={16} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverDestination;
