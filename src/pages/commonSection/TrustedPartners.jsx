import { tp1, tp2, tp3, tp4, tp5, tp6, tp7, tp8 } from "@/assets/index";
import useMediaQuery from "@/hooks/useMediaQuery";

const TrustedPartners = () => {
  const isDesktop = useMediaQuery("(min-width: 500px)");
  const partners = [tp1, tp2, tp3, tp4, tp5, tp6, tp7, tp8];

  // Determine columns based on screen size
  const cols = isDesktop ? 4 : 2;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Heading */}
        <div className="text-center mb-6">
          <p className="text-lg text-[#F26D52]">Partners</p>
          <h2 className="text-3xl lg:text-5xl playfair font-semibold">
            Our Trusted Partners
          </h2>
        </div>

        {/* Grid */}
        <div
          className={`grid grid-cols-2 ${isDesktop ? "sm:grid-cols-4" : ""}`}
        >
          {partners.map((url, index) => {
            const isFirstRow = index < cols;
            const isFirstCol = index % cols === 0;

            // Calculate total rows
            const totalRows = Math.ceil(partners.length / cols);
            const currentRow = Math.floor(index / cols) + 1;
            const isLastRow = currentRow === totalRows;

            return (
              <div
                key={index}
                className={`flex items-center justify-center p-8 transition
                  ${
                    isDesktop
                      ? `${isFirstRow ? "" : "border-t border-gray-200"} ${
                          isFirstCol ? "" : "border-l border-gray-200"
                        }`
                      : `${isLastRow ? "" : "border-b border-gray-200"} ${
                          isFirstCol ? "" : "border-l border-gray-200"
                        }`
                  }`}
              >
                <img
                  src={url}
                  alt={`Partner ${index + 1}`}
                  className="max-h-16 md:max-h-24 object-contain hover:scale-110 transition duration-700 cursor-pointer"
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
