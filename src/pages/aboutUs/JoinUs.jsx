import { joinUs } from "@/assets/index";
import { ArrowRight } from "feather-icons-react";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <section
      className="relative shadow-md overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center"
      style={{
        backgroundImage: `url(${joinUs})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        <h3 className="text-white text-base md:text-lg font-semibold tracking-wide">
          Come & Join Us
        </h3>

        <h2 className="playfair text-white font-bold mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-snug">
          Making Adventure Tours and Activities Accessible <br />
          and Affordable for Everyone.
        </h2>

        <div className="mt-6">
          <Link
            to="/contact"
            className="bg-[#F26D52] py-3 px-5 rounded-lg flex items-center gap-2 text-white w-fit mx-auto hover:bg-[#e55e46] transition"
          >
            Book Now
            <ArrowRight size={16} className="text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
