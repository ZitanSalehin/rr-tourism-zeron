import { ArrowRight } from "feather-icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../src/assets/logo.png";
import Dropdown from "./Dropdown";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-md font-normal fixed top-0 left-0 w-full z-99999 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-40 py-4">
        {/* Logo (always visible) */}
        <img src={logo} alt="Zeron Group Logo" className="w-36 lg:w-40" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
          <li>
            <Link to="/" className="hover:text-[#F26D52] transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about-us" className="hover:text-[#F26D52] transition">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/destination" className="hover:text-[#F26D52] transition">
              Destinations
            </Link>
          </li>

          <Dropdown
            title="Pages"
            items={[
              { label: "Our Team", path: "/our-team" },
              { label: "Services", path: "/services" },
              { label: "FAQ", path: "/faq" },
              { label: "Gallery", path: "/gallery" },
              // { label: "Get A Quote", path: "/quote" },
              // { label: "Support", path: "/support" },
              { label: "Terms Of Services", path: "/terms-service" },
            ]}
          />

          {/* <Dropdown
            title="Reviews"
            items={[
              { label: "Review 1", path: "/review-1" },
              { label: "Review 2", path: "/review-2" },
              { label: "Review 3", path: "/review-3" },
            ]}
          /> */}
          <li>
            <Link to="/reviews" className="hover:text-[#F26D52] transition">
              Reviews
            </Link>
          </li>

          <li>
            <Link to="/blog" className="hover:text-[#F26D52] transition">
              Blog
            </Link>
          </li>

          {/* Contact Button */}
          <li>
            <Link
              to="/contact"
              className="bg-[#F26D52] py-3 px-5 rounded-lg flex items-center gap-2 text-white"
            >
              Contact Us
              <ArrowRight size={16} className="text-white" />
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 pb-4 pt-2 space-y-3">
          <Link
            to="/"
            className="block hover:text-[#F26D52] transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about-us"
            className="block hover:text-[#F26D52] transition"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/destination"
            className="block hover:text-[#F26D52] transition"
            onClick={() => setMenuOpen(false)}
          >
            Designation
          </Link>
          <Dropdown
            title="Pages"
            items={[
              { label: "Our Team", path: "/our-team" },
              { label: "Services", path: "/services" },
              { label: "FAQ", path: "/faq" },
              { label: "Gallery", path: "/gallery" },
              // { label: "Get A Quote", path: "/quote" },
              // { label: "Support", path: "/support" },
              { label: "Terms Of Services", path: "/terms-service" },
            ]}
          />

          {/* <Dropdown
            title="Reviews"
            items={[
              { label: "Review 1", path: "/review-1" },
              { label: "Review 2", path: "/review-2" },
              { label: "Review 3", path: "/review-3" },
            ]}
          /> */}
          <span className="flex flex-col gap-2.5">
            <Link to="/reviews" className="hover:text-[#F26D52] transition">
              Reviews
            </Link>

            <Link to="/blog" className="hover:text-[#F26D52] transition">
              Blog
            </Link>
          </span>
        </div>
      )}
    </nav>
  );
};

export default Header;
