import { commonHeroBG } from "@/assets/index";
import { ArrowRight } from "feather-icons-react";
import { Link } from "react-router-dom";

const CommonHero = ({ title, desc, btnText }) => {
  return (
    <section
      className="relative shadow-md overflow-hidden min-h-[350px] md:min-h-[450px] lg:min-h-[500px] flex items-center"
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

        <h2 className="text-white font-medium mt-6 leading-6 max-w-xl">
          {desc ? desc : ""}
        </h2>

        <div className="mt-6">
          <Link
            to="/"
            className="py-3 px-5 rounded-lg flex items-center gap-2 text-white border border-white w-fit mx-auto"
          >
            Home
            <ArrowRight
              size={16}
              className={`${btnText ? btnText : "hidden"} text-white`}
            />
            <span className="text-[#F26D52]">{btnText ? btnText : ""}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommonHero;
