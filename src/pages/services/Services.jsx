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
        desc="We provide carefully planned travel services designed to offer comfort, safety, and value for every guest on every trip."
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
