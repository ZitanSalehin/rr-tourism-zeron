import { tp1, tp2, tp3, tp4, tp5, tp6, tp7, tp8 } from "../../src/assets/index";

const TrustedPartners = () => {
  const partners = [tp1, tp2, tp3, tp4, tp5, tp6, tp7, tp8];
  const cols = 4;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex items-center justify-center mb-6 relative">
          <div>
            <p className="text-lg text-[#F26D52] text-center">Partners</p>
            <h2 className="text-5xl playfair font-semibold text-center">
              Our Trusted Partners
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {partners.map((url, index) => {
            const isFirstRow = index < cols;
            const isFirstCol = index % cols === 0;
            return (
              <div
                key={index}
                className={`flex items-center justify-center p-8 transition
                  ${isFirstRow ? "" : "border-t border-gray-200"}
                  ${isFirstCol ? "" : "border-l border-gray-200"}`}
              >
                <img
                  src={url}
                  alt={`Partner ${index + 1}`}
                  className="max-h-16 md:max-h-24 object-contain hover:scale-120 transition duration-700 cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
