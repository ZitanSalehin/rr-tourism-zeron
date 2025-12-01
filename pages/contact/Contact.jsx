import CommonHero from "../commonSection/CommonHero";
import ContactCards from "./ContactCards";
import LocationMap from "./LocationMap";
import MsgSendForm from "./MsgSendForm";

const Contact = () => {
  return (
    <div>
      <CommonHero
        title="Contact"
        desc="Quis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore noulla pariatur ccaecat curidatat aero."
        btnText="Contact"
      />
      <ContactCards />
      <MsgSendForm />
      <LocationMap />
    </div>
  );
};

export default Contact;
