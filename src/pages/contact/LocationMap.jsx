export default function LocationMap() {
  return (
    <div className="container mx-auto px-10 py-20 lg:py-32 flex justify-center items-center">
      <div className="w-[1000px] h-[500px] rounded-xl overflow-hidden shadow-lg group">
        <iframe
          title="location-map"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
          src="https://www.google.com/maps/embed/v1/place?q=F%20Haque%20Tower%20107%2C%20Level-4%2C%20Bir%20Uttam%20C.R%20Datta%20Raod%2C%20Dhaka-1205.%2C%20Dhaka%2C%20Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
    </div>
  );
}
