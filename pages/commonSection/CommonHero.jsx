import { ArrowRight } from "feather-icons-react";
import { Link } from "react-router-dom";
import { commonHeroBG } from "../../src/assets/index";

const CommonHero = ({ title, desc, btnText }) => {
  return (
    <section
      className="relative shadow-md overflow-hidden min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center"
      style={{
        backgroundImage: `url(${commonHeroBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        <h3 className="text-white text-4xl md:text-7xl playfair font-semibold tracking-wide">
          {title ? title : ""}
        </h3>

        <h2 className="text-white font-medium mt-6 leading-6">
          {desc ? (
            desc
          ) : (
            <span>
              Quis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore <br /> noulla pariatur ccaecat curidatat aero
            </span>
          )}
        </h2>

        <div className="mt-6">
          <Link
            to="/contact"
            className="py-3 px-5 rounded-lg flex items-center gap-2 text-white border border-white w-fit mx-auto"
          >
            Home
            <ArrowRight size={16} className="text-white" />
            <span className="text-[#F26D52]">{btnText ? btnText : ""}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommonHero;
