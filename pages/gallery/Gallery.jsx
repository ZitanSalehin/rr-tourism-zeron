import CommonHero from "../commonSection/CommonHero";
import GridGallery from "./GridGallery";

const Gallery = () => {
  return (
    <div>
      <CommonHero title="Gallery" btnText="Gallery" />
      <GridGallery />
    </div>
  );
};

export default Gallery;
