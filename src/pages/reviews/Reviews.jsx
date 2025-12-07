import CommonHero from "../commonSection/CommonHero";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  return (
    <div>
      <CommonHero
        title="Reviews"
        desc="Quis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore noulla pariatur ccaecat curidatat aero."
        btnText="Reviews"
      />
      <ReviewSlider />
    </div>
  );
};

export default Reviews;
