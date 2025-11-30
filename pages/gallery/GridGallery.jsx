import {
  popularDestionation1,
  popularDestionation2,
  popularDestionation3,
  popularDestionation4,
  popularDestionation5,
  popularDestionation6,
} from "../../src/assets/index";

const GridGallery = () => {
  const images = [
    popularDestionation1,
    popularDestionation2,
    popularDestionation3,
    popularDestionation4,
    popularDestionation5,
    popularDestionation6,
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
