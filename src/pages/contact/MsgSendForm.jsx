import { contactFormImage, hill } from "@/assets/index";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const MsgSendForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // ---------------------------
  // Input Validation
  // ---------------------------
  const validateField = (name, value) => {
    let error = "";

    if (name === "name" && /\d/.test(value)) {
      error = "Name cannot contain numbers.";
    }
    if (name === "phone" && !/^\d*$/.test(value)) {
      error = "Phone number must contain only digits.";
    }
    if (name === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
      error = "Invalid email address.";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // ---------------------------
  // Handle Input Change
  // ---------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    validateField(name, value);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // ---------------------------
  // Send Email
  // ---------------------------
  const sendEmail = (e) => {
    e.preventDefault();

    // check any field invalid
    const hasError = Object.values(errors).some((err) => err);
    if (hasError) return;

    emailjs
      .send(
        "service_thuislh",
        "template_leaxq17",
        formData,
        "Mf2SAv25l55Dt_Dl9"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        console.log("Email sending failed.");
      });
  };
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

            <form
              onSubmit={sendEmail}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 px-10 lg:px-0"
            >
              {/* NAME */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-white p-3 rounded-lg border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-[#F16C52] outline-none`}
                />
                {errors.name && (
                  <p className="text-white text-sm">{errors.name}</p>
                )}
              </div>

              {/* PHONE */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-white p-3 rounded-lg border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-[#F16C52] outline-none`}
                />
                {errors.phone && (
                  <p className="text-white text-sm">{errors.phone}</p>
                )}
              </div>

              {/* EMAIL */}
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-white p-3 rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-[#F16C52] outline-none`}
                />
                {errors.email && (
                  <p className="text-white text-sm">{errors.email}</p>
                )}
              </div>

              {/* SUBJECT */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F16C52] outline-none"
                />
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col lg:col-span-2">
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F16C52] outline-none"
                ></textarea>
              </div>

              {/* BUTTON */}
              <div>
                <button
                  type="submit"
                  className="bg-black hover:bg-white transition-all duration-700 py-3 px-5 rounded-lg flex items-center gap-2 text-white hover:text-black cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
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
