import CommonHero from "../commonSection/CommonHero";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  return (
    <div>
      <CommonHero
        title="Reviews"
        desc="Guests appreciate the care and support our team provides, making every trip memorable from start to finish with comfort."
        btnText="Reviews"
      />
      <ReviewSlider />
    </div>
  );
};

export default Reviews;
