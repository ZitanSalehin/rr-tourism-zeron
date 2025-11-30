import CommonHero from "../commonSection/CommonHero";
import JoinUs from "../commonSection/JoinUs";
import TrustedPartners from "../commonSection/TrustedPartners";
import TravelExperts from "./TravelExperts";

const OurTeam = () => {
  return (
    <div>
      <CommonHero
        title="Our Team"
        desc="Nuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore noulla pariatur ccaecat curidatat aero."
        btnText="Our Team"
      />
      <TravelExperts />
      <JoinUs />
      <TrustedPartners />
    </div>
  );
};

export default OurTeam;
