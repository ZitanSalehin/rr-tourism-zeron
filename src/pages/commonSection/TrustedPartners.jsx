import { tp1, tp2, tp3, tp4 } from "@/assets/index";
import useMediaQuery from "@/hooks/useMediaQuery";

const TrustedPartners = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const partners = [
    { img: tp1, name: "ZERON ACADEMY" },
    { img: tp2, name: "THE MIGRATION" },
    { img: tp3, name: "ZERON STUDY ABROAD" },
    { img: tp4, name: "ZERON TOURISM" },
  ];

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
        <div className="grid grid-cols-2 md:grid-cols-4">
          {partners.map((p, index) => {
            let borderClass = "";

            if (isDesktop) {
              // DESKTOP MODE (4 columns)
              const isLastCol = index === 3;
              const isFirstRow = index < 4;

              borderClass += !isLastCol ? " border-r border-gray-200" : "";
              borderClass += !isFirstRow ? " border-t border-gray-200" : "";
            } else {
              // MOBILE MODE (2×2 grid)
              const isTopRow = index < 2; // 0,1
              const isLeftCol = index % 2 === 0; // 0,2

              borderClass += isTopRow ? " border-b border-gray-200" : "";
              borderClass += isLeftCol ? " border-r border-gray-200" : "";
            }

            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-8 transition ${borderClass}`}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="max-h-16 md:max-h-24 object-contain hover:scale-110 transition duration-700 cursor-pointer"
                />

                <p className="mt-4 text-sm md:text-base font-semibold text-gray-700 text-center">
                  {p.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
