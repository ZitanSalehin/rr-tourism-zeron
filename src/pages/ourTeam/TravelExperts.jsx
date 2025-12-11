// import { ppl10, ppl7, ppl8, ppl9 } from "@/assets/index";
import { Facebook, Instagram, Youtube } from "feather-icons-react";

const team = [
  {
    id: 1,
    name: "Ridoy Saha",
    profession: "Team Member",
    img: "https://i.pravatar.cc/150?img=68",
  },
  {
    id: 2,
    name: "Iqbal Hussain Shuvo",
    profession: "Team Member",
    img: "https://i.pravatar.cc/150?img=56",
  },
  {
    id: 3,
    name: "Nirob Hassan",
    profession: "Team Member",
    img: "https://i.pravatar.cc/150?img=57",
  },
  {
    id: 4,
    name: "Md Aminul Islam",
    profession: "Team Member",
    img: "https://i.pravatar.cc/150?img=12",
  },
];

const TravelExperts = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h3 className="text-[#F16C52] text-lg font-semibold text-center">
        Experienced Team
      </h3>
      <h2 className="text-4xl md:text-5xl font-bold playfair text-center pb-10">
        Our Team Members
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {team.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-60 h-60 rounded-full object-cover"
            />

            <h3 className="mt-4 text-md font-semibold playfair">
              {member.name}
            </h3>

            <p className="text-gray-500 text-xs">{member.profession}</p>

            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-white bg-[#F26D52] p-2 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900"
              >
                <Facebook size={16} />
              </a>

              <a
                href="#"
                className="text-white bg-[#F26D52] p-2 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900"
              >
                <Instagram size={16} />
              </a>

              <a
                href="#"
                className="text-white bg-[#F26D52] p-2 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelExperts;
