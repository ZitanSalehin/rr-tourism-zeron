import CommonHero from "../commonSection/CommonHero";
import ExploreSliderMobile from "../commonSection/ExploreSliderMobile";
import JoinUs from "../commonSection/JoinUs";
import Testimonials from "../commonSection/Testimonials";
import TrustedPartners from "../commonSection/TrustedPartners";
import ActivitiesThrilled from "./ActivitiesThrilled";
import DiscoverDestination from "./DiscoverDestination";

const AboutUs = () => {
  return (
    <div>
      <CommonHero
        title="About Us"
        desc="Quis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore noulla pariatur ccaecat curidatat aero."
        btnText="About Us"
      />
      <DiscoverDestination />
      <ActivitiesThrilled />
      <div className="conatiner mx-auto max-w-7xl px4 lg:px-16 py-10">
        <ExploreSliderMobile />
      </div>
      <JoinUs />
      <Testimonials />
      <TrustedPartners />
    </div>
  );
};

export default AboutUs;
