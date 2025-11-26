import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Zap,
} from "feather-icons-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#386ab1] text-white px-6 py-10 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">ZERON GROUP</h2>
          <p className="text-sm mt-2">
            The Largest Group of Company in Bangladesh
          </p>

          {/* Social Icons */}
          <div className="mt-5">
            <p className="font-semibold text-sm mb-3">
              Connect with Social Media
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="p-2 border rounded-full hover:bg-white hover:text-blue-700 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 border rounded-full hover:bg-white hover:text-blue-700 transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 border rounded-full hover:bg-white hover:text-blue-700 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 border rounded-full hover:bg-white hover:text-blue-700 transition"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span className="flex flex-col">
                <span>+880 01907-098052</span>
                <span>+880 01907-098057</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} />
              <span>zeronstudyabroad@gmail.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} />
              <span>
                F Haque Tower 107, Level-4, Bir Uttam C.R Datta Raod,
                Dhaka-1205., Dhaka, Bangladesh
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={16} />
              <span>
                Sat to Thu - 9:00am to 6:00pm (Friday Closed) Between 9:00 AM to
                5:00 PM, Except on Government Holidays
              </span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1 lg:col-span-2 grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">Important Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer">Book</li>
              <li className="cursor-pointer">Survey</li>
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Terms and Condition</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3 opacity-0 md:opacity-100">
              ‎
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about-us" className="cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="cursor-pointer">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/companies" className="cursor-pointer">
                  Our Companies
                </Link>
              </li>
              <li>
                <Link to="/offices" className="cursor-pointer">
                  Our offices
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 flex items-center gap-3 mt-5">
            <Zap size={20} />
            <p className="text-sm">Zeron Group Award 2021</p>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-500 mt-10 pt-5 text-center text-xs">
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
    </footer>
  );
};

export default Footer;
