export default function LocationMap() {
  return (
    <div className="container mx-auto px-10 py-32 flex justify-center items-center">
      <div className="w-[1000px] h-[500px] rounded-xl overflow-hidden shadow-lg group">
        <iframe
          title="location-map"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.918275072061!2d144.96639587620515!3d-37.81515313463607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642dffca5e77b%3A0x1b4a675add28ec92!2s180%20Flinders%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sau!4v1700000000000"
        ></iframe>
      </div>
    </div>
  );
}
