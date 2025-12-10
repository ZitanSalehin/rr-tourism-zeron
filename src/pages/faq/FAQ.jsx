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
        desc="Our FAQ covers common questions to help you understand booking, destinations, policies, and what to expect during travel."
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
