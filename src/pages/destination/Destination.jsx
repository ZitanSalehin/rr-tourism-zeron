import CommonHero from "../commonSection/CommonHero";
import JoinUs from "../commonSection/JoinUs";
import Testimonials from "../commonSection/Testimonials";
import TrustedPartners from "../commonSection/TrustedPartners";
import DestinationTabs from "./DestinationTabs";

const Destination = () => {
  return (
    <div className="">
      <CommonHero
        title="Destinations"
        desc="Nuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore noulla pariatur ccaecat curidatat aero."
        btnText="Destinations"
      />
      <DestinationTabs />
      <JoinUs />
      <Testimonials />
      <TrustedPartners />
    </div>
  );
};

export default Destination;
