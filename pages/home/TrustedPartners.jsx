const TrustedPartners = () => {
  const partners = [
    "https://png.pngtree.com/png-clipart/20240720/original/pngtree-silhouette-of-a-hiker-with-a-backpack-carrying-a-map-of-png-image_15595476.png",
    "https://cdn.vectorstock.com/i/1000v/23/39/adventure-logo-with-mountain-and-compass-design-vector-47732339.jpg",
    "https://png.pngtree.com/png-clipart/20230414/original/pngtree-travel-logo-design-template-png-image_9054961.png",
    "https://png.pngtree.com/png-clipart/20230821/original/pngtree-mountain-hiking-emblem-template-picture-image_8153723.png",
    "https://cdn.vectorstock.com/i/500p/18/68/mountain-camping-hiking-logo-vector-27151868.jpg",
    "https://png.pngtree.com/png-clipart/20200727/original/pngtree-travel-logo-template-simple-and-minimalist-png-image_5257827.jpg",
    "https://elements-resized.envatousercontent.com/elements-cover-images/8af3292c-8210-4c74-8660-204c9a3081cb?cf_fit=scale-down&format=auto&q=85&s=0174b39c2adea5657df00d0929e09f4fc76ea58ae78e04e778e0a137bb261693&w=433",
    "https://cdn.vectorstock.com/i/1000v/63/12/travel-logo-holiday-tourism-vector-26346312.jpg",
  ];

  const cols = 4; // sm:grid-cols-4

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Trusted Partners
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4">
          {partners.map((url, index) => {
            const isFirstRow = index < cols;
            const isFirstCol = index % cols === 0;

            return (
              <div
                key={index}
                className={`
                  flex items-center justify-center p-4 hover:shadow-lg transition
                  ${isFirstRow ? "" : "border-t border-amber-950"}
                  ${isFirstCol ? "" : "border-l border-amber-950"}
                `}
              >
                <img
                  src={url}
                  alt={`Partner ${index + 1}`}
                  className="max-h-16 md:max-h-20 object-contain"
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
