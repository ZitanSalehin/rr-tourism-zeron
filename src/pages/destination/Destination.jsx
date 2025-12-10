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
        desc="Our featured destinations offer unique beauty, culture, and adventure, giving travelers unforgettable moments to treasure."
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
