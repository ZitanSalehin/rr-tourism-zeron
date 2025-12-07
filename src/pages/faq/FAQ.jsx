import CommonHero from "../commonSection/CommonHero";
import JoinUsTwo from "../commonSection/JoinUsTwo";
import Testimonials from "../commonSection/Testimonials";
import TrustedPartners from "../commonSection/TrustedPartners";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  return (
    <div className="bg-gray-50">
      <CommonHero
        title="FAQ"
        desc="Quis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore noulla pariatur ccaecat curidatat aero."
        btnText="FAQ"
      />
      <FAQAccordion />
      <JoinUsTwo />
      <Testimonials />
      <TrustedPartners />
    </div>
  );
};

export default FAQ;
