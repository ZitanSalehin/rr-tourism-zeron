import { useRef, useState } from "react";

const Dropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    // Small delay to prevent flickering
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

      <div
        className={`
          absolute left-0 top-6 w-44 bg-white shadow-xl rounded-xl
          transition-all duration-500 ease-[cubic-bezier(0.22, 1, 0.36, 1)]
          ${
            open
              ? "opacity-100 translate-y-2"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
        style={{ zIndex: 9999 }}
      >
        {/* 🔥 Fix: Extra padding area to prevent flicker when moving mouse */}
        <div className="absolute -top-3 left-0 w-full h-3" />

        {items.map((item, i) => (
          <div
            key={i}
            className={`px-4 py-2 transition-all hover:bg-[#F26D52] hover:text-white cursor-pointer ${
              i === items.length - 1 ? "rounded-b-xl" : ""
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
