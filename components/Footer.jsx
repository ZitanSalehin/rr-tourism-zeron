import {
  ArrowRight,
  AtSign,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "feather-icons-react";
import logo from "../src/assets/logoForDark.png";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {
  return (
    <footer className="bg-[#251c1c] text-white">
      {/* Newsletter Section - Full Width */}
      <div className="w-full bg-[#1a1313] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Zeron Group Logo" className="h-auto" />
          <div className="playfair text-lg font-semibold text-center md:text-left">
            Sign up for the newsletter:
          </div>
          <div className="relative w-full md:w-1/3">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full bg-white py-3 px-4 pr-12 rounded-lg text-black 
               focus:outline-none focus:border-[#F26D52] focus:ring-2 focus:ring-[#F26D52]"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#F26D52] p-2.5 rounded-md hover:bg-blue-700 transition">
              <Send size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-white/20">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-3">About Us</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Quia voluptas sit asper aut odit aut fugit quia consequuntur magni
            nesciunt.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm opacity-90">
            {["Home", "About Us", "Destinations", "Blog", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 hover:opacity-80 cursor-pointer transition"
                >
                  <ArrowRight size={14} /> {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm opacity-90">
            {[
              "Services",
              "What We Offer",
              "Our Story",
              "Latest Posts",
              "Help Center",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 hover:opacity-80 cursor-pointer transition"
              >
                <ArrowRight size={14} /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +61 8376 6284
            </li>
            <li className="flex items-center gap-2">
              <AtSign size={16} /> info@atreves.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> 121 King Street Melbourne, Australia
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm opacity-70 py-6">
        Copyright © 2025 Zeron Group. All right reserved. <br />
        Developed by{" "}
        <span className="font-semibold text-amber-300">
          <a
            href="https://axiadigitech.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Axia Digitech
          </a>
        </span>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
