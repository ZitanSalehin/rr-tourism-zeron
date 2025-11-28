import useMediaQuery from "../../src/hooks/useMediaQuery";
import AboutUsHome from "./AboutUsHome";
import ExploreSliderDesktop from "./ExploreSliderDesktop";
import ExploreSliderMobile from "./ExploreSliderMobile";
import HeroSection from "./HeroSection";
import TrustedPartners from "./TrustedPartners";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 1600px)");
  return (
    <>
      <HeroSection />
      <div className="w-full bg-white min-h-screen p-8">
        {isDesktop ? (
          <div className="w-full flex justify-end overflow-hidden">
            {/* Adjust w-[75%] to 70/80% as you like.
            -mr-16 makes the slider extend beyond the viewport on the right so the last slide peeks.
            Use responsive negative margins to control peek amount per breakpoint. */}
            <div className="w-[80%] -mr-6 sm:-mr-10 md:-mr-14 lg:-mr-16 xl:-mr-20">
              <ExploreSliderDesktop />
            </div>
          </div>
        ) : (
          <div className="w-full">
            <ExploreSliderMobile />
          </div>
        )}
      </div>
      <AboutUsHome />
      <TrustedPartners />
    </>
  );
}
