import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const DropdownDesktop = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 cursor-pointer transition hover:text-[#F26D52]">
        {title}
        <span
          className={`transition-all duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          ▾
        </span>
      </button>

      {/* Dropdown Box */}
      <div
        className={`absolute -left-10 top-10 w-44 bg-white shadow-xl rounded-xl
          transition-all duration-500 ease-[cubic-bezier(0.22, 1, 0.36, 1)]
          ${
            open
              ? "opacity-100 translate-y-2"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
        style={{ zIndex: 9999 }}
      >
        {/* Anti-flicker padding */}
        <div className="absolute -top-3 left-0 w-full h-3" />

        {items.map((item, i) => (
          <Link
            key={i}
            to={item.path || "#"}
            className={`block px-4 py-2 transition-all hover:bg-[#F26D52] hover:text-white 
              cursor-pointer ${i === items.length - 1 ? "rounded-b-xl" : ""} ${
              i === 0 ? "rounded-t-xl" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownDesktop;
