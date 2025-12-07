import CommonHero from "../commonSection/CommonHero";
import JoinUs from "../commonSection/JoinUs";
import Testimonials from "../commonSection/Testimonials";
import TrustedPartners from "../commonSection/TrustedPartners";
import WhatWeOffer from "../commonSection/WhatWeOffer";

const Services = () => {
  return (
    <div>
      <CommonHero
        title="Services"
        desc="Nuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore noulla pariatur ccaecat curidatat aero."
        btnText="Services"
      />
      <WhatWeOffer />
      <JoinUs />
      <Testimonials />
      <TrustedPartners />
    </div>
  );
};

export default Services;
