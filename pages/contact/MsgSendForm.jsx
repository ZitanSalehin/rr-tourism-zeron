import { contactFormImage, hill } from "../../src/assets/index";

const MsgSendForm = () => {
  return (
    <section className="relative bg-gray-100 shadow-md overflow-hidden">
      <div className="absolute inset-0 bg-[#FCFAF5]/70"></div>

      {/* FLEX CONTAINER — NO GAP */}
      <div className="relative mx-auto min-h-[550px] lg:min-h-[700px] flex flex-col lg:flex-row">
        {/* Left HALF (50% COVER IMAGE) */}
        <div
          className="w-full lg:w-1/2 h-[500px] lg:h-auto"
          style={{
            backgroundImage: `url(${contactFormImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Right HALF (50%) */}
        <div className="relative flex flex-col justify-center items-start px-6 py-12 text-gray-800 w-full lg:w-1/2">
          {/* Hill image bottom-left */}
          <div>
            <img
              src={hill}
              alt="hill"
              className="absolute bottom-0 right-0 w-36 lg:w-130 z-1 opacity-30 transform scale-x-[-1]"
            />
          </div>

          {/* Orange shadow behind hill */}
          <div className="absolute bottom-0 left-0 w-full h-full bg-[#F26D52] z-0"></div>

          {/* LEFT CONTENT */}
          <div className="relative z-10 w-full lg:max-w-md lg:ml-10">
            <p className="text-lg text-white text-center lg:text-start">
              Get In Touch
            </p>
            <h2 className="text-3xl lg:text-5xl text-white playfair font-semibold text-center lg:text-start">
              Send us a Message
            </h2>

            <form className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 px-10 lg:px-0">
              {/* Name */}
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F16C52] outline-none"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full bg-white p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F16C52] outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F16C52] outline-none"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-white p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F16C52] outline-none"
                />
              </div>

              {/* Message Textarea - full width */}
              <div className="flex flex-col lg:col-span-2">
                <textarea
                  rows="6"
                  placeholder="Message"
                  className="w-full bg-white p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F16C52] outline-none"
                ></textarea>
              </div>
              <div>
                <button className="bg-black hover:bg-white transition-all duration-700 py-3 px-5 rounded-lg flex items-center gap-2 text-white hover:text-black cursor-pointer">
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MsgSendForm;
