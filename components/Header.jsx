import { ArrowRight } from "feather-icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../src/assets/logo.png";
import Dropdown from "./Dropdown";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  //   setMenuOpen(false);
  // }, [location]);

  return (
    <nav className="bg-white text-md font-normal">
      <div className="w-full flex justify-center items-center px-6 py-4">
        <ul className="hidden lg:flex items-center justify-center gap-10">
          <img
            src={logo}
            alt="Zeron Group Logo"
            className="h-12 sm:h-14 w-12 md:w-32 object-contain mr-4"
          />

          <li>
            <Link
              to="/"
              className="hover:text-[#F26D52] transition cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-[#F26D52] transition cursor-pointer"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/companies"
              className="hover:text-[#F26D52] transition cursor-pointer"
            >
              Destinations
            </Link>
          </li>

          <Dropdown
            title="Pages"
            items={[
              { label: "Our Team", path: "/" },
              { label: "Services", path: "/" },
              { label: "FAQ", path: "/" },
              { label: "Gallery", path: "/" },
              { label: "Get A Quote", path: "/" },
              { label: "Support", path: "/" },
              { label: "Terms Of Services", path: "/" },
            ]}
          />

          <Dropdown
            title="Reviews"
            items={[
              { label: "Review 1", path: "/" },
              { label: "Review 2", path: "/" },
              { label: "Review 3", path: "/" },
            ]}
          />

          <li>
            <Link
              to="/companies"
              className="hover:text-[#F26D52] transition cursor-pointer"
            >
              Blog
            </Link>
          </li>

          <li>
            <button className="bg-[#F26D52] py-2.5 px-4.5 rounded-lg flex items-center justify-center gap-2 ml-4">
              <Link to="/contact" className="text-white">
                Contact Us
              </Link>
              <ArrowRight size={16} className="text-white " />
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
        <div className="md:hidden bg-blue-600 px-4 pb-3 space-y-2">
          <Link
            to="/"
            className="block hover:bg-blue-500 rounded px-2 py-1"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <div className="ml-2">
            <Dropdown
              title="About Us"
              items={[
                { label: "About Founder", path: "/about-founder" },
                { label: "Chairman's Message", path: "/chairman-message" },
                { label: "Corporate Directors", hash: "#board-of-directors" },
                { label: "Mission & Vision", path: "/mission-and-vision" },
                { label: "History", path: "/history" },
                { label: "About Us", path: "/about-us" },
              ]}
            />
          </div>

          <Link
            to="/companies"
            className="block hover:bg-blue-500 rounded px-2 py-1"
            onClick={() => setMenuOpen(false)}
          >
            Our Companies
          </Link>

          <Link
            to="/offices"
            className="block hover:bg-blue-500 rounded px-2 py-1"
            onClick={() => setMenuOpen(false)}
          >
            Our Offices
          </Link>

          <Link
            to="/products"
            className="block hover:bg-blue-500 rounded px-2 py-1"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>

          <div className="ml-2">
            <Dropdown
              title="Media"
              items={[
                { label: "News & Events", path: "/media/events" },
                { label: "Image Gallery", path: "/media/gallery" },
                { label: "Video", path: "/media/video" },
                { label: "Newsletter", path: "/media/newsletter" },
              ]}
            />
          </div>

          <Link
            to="/contact"
            className="block hover:bg-blue-500 rounded px-2 py-1"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
