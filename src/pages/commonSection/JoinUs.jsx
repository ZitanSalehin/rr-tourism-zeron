import { ArrowRight } from "feather-icons-react";
import { Link } from "react-router-dom";
import { joinUs2 } from "../../assets/index";

const JoinUs = () => {
  return (
    <section
      className="relative shadow-md overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center"
      style={{
        backgroundImage: `url(${joinUs2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#FCFAF5]/70"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        <h3 className="text-[#F26D52] text-base md:text-lg font-semibold tracking-wide">
          Come & Join Us
        </h3>

        <h2 className="playfair text-gray-800 font-bold mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-snug">
          Your Grand Adventure Starts Here. Unforgettable <br />
          Experiences, Unbeatable Value.
        </h2>
        <h4 className="playfair text-gray-800 font-bold mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug md:leading-snug italic">
          Stop Dreaming, Start Doing.
        </h4>

        <div className="mt-6">
          <Link
            to="/contact"
            className="bg-[#F26D52] hover:bg-black transition-all duration-700 py-3 px-5 rounded-lg flex items-center gap-2 text-white"
          >
            Book Now
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
