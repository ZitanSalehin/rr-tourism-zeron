import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const DropdownMobile = ({ title, items, closeMenu }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      className="w-full"
      ref={ref}
      //   onClick={(e) => e.stopPropagation()} // ← crucial fix
    >
      <button
        className="w-full flex justify-between items-center text-left transition"
        onClick={() => setOpen(!open)}
      >
        {title}
        <span className={`transition ${open ? "rotate-180" : "rotate-0"}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="mt-1 bg-white px-3 py-2">
          <ul className="list-disc list-inside space-y-2">
            {items.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="hover:text-[#F26D52] transition"
                  onClick={() => {
                    setOpen(false);
                    closeMenu();
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMobile;
