import {
  homeSlider1,
  homeSlider2,
  homeSlider3,
  homeSlider4,
  homeSlider5,
  popularDestionation10,
  popularDestionation7,
  popularDestionation8,
  popularDestionation9,
} from "@/assets/index";

const GridGallery = () => {
  const images = [
    homeSlider1,
    homeSlider2,
    homeSlider3,
    homeSlider4,
    homeSlider5,
    popularDestionation10,
    popularDestionation7,
    popularDestionation8,
    popularDestionation9,
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10 lg:py-20">
      <h2 className="text-3xl lg:text-4xl playfair font-bold text-center mb-2">
        Explore Our Gallery
      </h2>
      <p className="text-orange-950 text-center mb-10 text-lg">
        Welcome to our gallery, where we showcase the visual essence.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md group"
          >
            <img
              src={img}
              alt=""
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridGallery;
