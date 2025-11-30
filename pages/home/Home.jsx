import useMediaQuery from "../../src/hooks/useMediaQuery";
import ExploreSliderMobile from "../commonSection/ExploreSliderMobile";
import JoinUs from "../commonSection/JoinUs";
import Testimonials from "../commonSection/Testimonials";
import TrustedPartners from "../commonSection/TrustedPartners";
import WhatWeOffer from "../commonSection/WhatWeOffer";
// import ExploreSliderMobile from "../commonSection/ExploreSliderMobile";

// import JoinUs from "../commonSection/JoinUs";
// import Testimonials from "../commonSection/Testimonials";
// import TrustedPartners from "../commonSection/TrustedPartners";
import AboutUsHome from "./AboutUsHome";
import DestinationSlider from "./DestinationSlider";
import ExploreSliderDesktop from "./ExploreSliderDesktop";
import HeroSection from "./HeroSection";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 1600px)");
  return (
    <>
      <HeroSection />
      <div className="w-full bg-white min-h-screen">
        {isDesktop ? (
          <>
            <div className="w-full flex justify-end overflow-hidden p-8">
              {/* Adjust w-[75%] to 70/80% as you like.
            -mr-16 makes the slider extend beyond the viewport on the right so the last slide peeks.
            Use responsive negative margins to control peek amount per breakpoint. */}
              <div className="w-[80%] -mr-6 sm:-mr-10 md:-mr-14 lg:-mr-16 xl:-mr-20">
                <ExploreSliderDesktop />
              </div>
            </div>
            <AboutUsHome />
          </>
        ) : (
          <div className="w-full">
            <ExploreSliderMobile />
            <AboutUsHome />
          </div>
        )}
      </div>

      <WhatWeOffer />
      <JoinUs />
      <DestinationSlider />
      <Testimonials />
      <TrustedPartners />
    </>
  );
}
