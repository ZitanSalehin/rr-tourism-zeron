import banner from "@/assets/banner.jpeg";
import useMediaQuery from "@/hooks/useMediaQuery";
import emailjs from "@emailjs/browser";
import { Clock, Feather, MapPin, Phone, Users } from "feather-icons-react";
import { useState } from "react";

const BookingPage = () => {
  const isDesktop = useMediaQuery("(min-width: 500px)");

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    destination: "",
    date: "",
    people: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    contact: "",
    destination: "",
    people: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newErrors = { ...errors };

    // Letters only
    if (name === "name") {
      if (/[^a-zA-Z\s]/.test(value)) {
        newErrors[name] = "Only letters are allowed";
      } else {
        newErrors[name] = "";
      }
    }

    // Numbers only
    if (name === "contact" || name === "people") {
      if (/[^0-9]/.test(value)) {
        newErrors[name] = "Only numbers are allowed";
      } else {
        newErrors[name] = "";
      }
    }

    setErrors(newErrors);
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    for (let key in errors) {
      if (errors[key]) return;
    }
    // service_id
    // template_id
    // public_key
    emailjs
      .send(
        "service_dbs42vh",
        "template_falf2nc",
        formData,
        "tzbyl9sRxSz_XgjdG"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            contact: "",
            destination: "",
            date: "",
            people: "",
          });
        },
        () => {
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  const inputClass = (field) =>
    `w-full bg-white p-2 mt-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26D52] transition placeholder-gray-800 ${
      errors[field] ? "border border-red-600" : ""
    }`;

  return (
    <div
      className={`w-full ${
        isDesktop ? "h-screen" : "h-fit py-20"
      } bg-cover bg-center flex items-center justify-center relative`}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-amber-900/30"></div>

      <div className="relative z-999">
        {/* --------------- TEXT AREA ---------------- */}
        {isDesktop ? (
          <>
            <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-8">
              <div className="flex items-center justify-center my-4">
                <div className="h-0.5 bg-[#F26D52] w-10 sm:w-14"></div>
                <span className="playfair text-white text-lg sm:text-xl md:text-2xl font-semibold mx-2 sm:mx-4">
                  Explore the Unseen. Experience the Exceptional.
                </span>
                <div className="h-0.5 bg-[#F26D52] w-10 sm:w-14"></div>
              </div>

              <p className="playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight">
                Unlock Extraordinary Journeys: Your Next <br />
                <span className="block">Epic Adventure Awaits</span>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center h-full text-center px-4 sm:px-6 md:px-8">
              <div className="flex items-center justify-center mb-4">
                <div className="h-0.5 bg-[#F26D52] w-10 sm:w-14"></div>
                <span className="playfair text-white text-xl font-semibold mx-2 sm:mx-4">
                  Explore the Unseen. Experience the Exceptional.
                </span>
                <div className="h-0.5 bg-[#F26D52] w-10 sm:w-14"></div>
              </div>

              <p className="playfair text-3xl text-white font-semibold leading-12">
                Unlock Extraordinary Journeys: <br />
                <span className="block">Your Next Epic Adventure Awaits</span>
              </p>
            </div>
          </>
        )}

        {/* ------------- FORM AREA ----------------- */}
        <div className="p-6 mx-auto mt-6 bg-[#F5F4F1] rounded-2xl w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw]">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Design Your Dream Escape
          </h2>

          <form
            onSubmit={sendEmail}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* NAME */}
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-2">
                <Feather
                  size={30}
                  className="text-white bg-[#F26D52] rounded-full p-1.5"
                />
                <p>Name</p>
              </span>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass("name")}
                required
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>

            {/* CONTACT */}
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-2">
                <Phone
                  size={30}
                  className="text-white bg-[#F26D52] rounded-full p-1.5"
                />
                <p>Contact Number</p>
              </span>
              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                className={inputClass("contact")}
                required
              />
              {errors.contact && (
                <span className="text-red-500 text-sm">{errors.contact}</span>
              )}
            </div>

            {/* DESTINATION */}
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-2">
                <MapPin
                  size={30}
                  className="text-white bg-[#F26D52] rounded-full p-1.5"
                />
                <p>Destination</p>
              </span>
              <input
                type="text"
                name="destination"
                placeholder="Enter Destination"
                value={formData.destination}
                onChange={handleChange}
                className={inputClass("destination")}
                required
              />
              {errors.destination && (
                <span className="text-red-500 text-sm">
                  {errors.destination}
                </span>
              )}
            </div>

            {/* DATE */}
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-2">
                <Clock
                  size={30}
                  className="text-white bg-[#F26D52] rounded-full p-1.5"
                />
                <p>Date</p>
              </span>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26D52] transition text-gray-700"
                required
              />
            </div>

            {/* PEOPLE */}
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-2">
                <Users
                  size={30}
                  className="text-white bg-[#F26D52] rounded-full p-1.5"
                />
                <p>People</p>
              </span>
              <input
                type="number"
                name="people"
                placeholder="Number of People"
                value={formData.people}
                onChange={handleChange}
                className={inputClass("people")}
                required
              />
              {errors.people && (
                <span className="text-red-500 text-sm">{errors.people}</span>
              )}
            </div>

            {/* BUTTON */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-[#F26D52] text-white rounded-lg font-medium hover:bg-[#e85c42] transition px-3 py-2"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
