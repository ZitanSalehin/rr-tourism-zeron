import CommonHero from "../commonSection/CommonHero";
import ContactCards from "./ContactCards";
import LocationMap from "./LocationMap";
import MsgSendForm from "./MsgSendForm";

const Contact = () => {
  return (
    <div>
      <CommonHero
        title="Contact"
        desc="Our team is always ready to assist with any inquiries, ensuring you receive quick support and clear guidance whenever needed."
        btnText="Contact"
      />
      <ContactCards />
      <MsgSendForm />
      <LocationMap />
    </div>
  );
};

export default Contact;
