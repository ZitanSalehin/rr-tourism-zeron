import CommonHero from "../commonSection/CommonHero";
import JoinUs from "../commonSection/JoinUs";
import TrustedPartners from "../commonSection/TrustedPartners";
import TravelExperts from "./TravelExperts";

const OurTeam = () => {
  return (
    <div>
      <CommonHero
        title="Our Team"
        desc="Our dedicated team works with passion and precision, ensuring every detail is managed to give you confidence and peace of mind."
        btnText="Our Team"
      />
      <TravelExperts />
      <JoinUs />
      <TrustedPartners />
    </div>
  );
};

export default OurTeam;
