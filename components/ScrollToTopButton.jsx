import { ArrowUp } from "feather-icons-react";
import { useEffect, useState } from "react";
import useMediaQuery from "../src/hooks/useMediaQuery";

export default function ScrollToTopButton() {
  const isDesktop = useMediaQuery("(min-width: 500px)");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <>
        {isDesktop ? (
          <button
            onClick={scrollToTop}
            className="
          fixed bottom-6 right-6 z-999999
          bg-[#F26D52] text-white p-3
          rounded-full shadow-lg
          hover:bg-[#ff836c]
          transition-all duration-300 cursor-pointer
          animate-pulse-custom
        "
          >
            <ArrowUp size={30} />
          </button>
        ) : (
          <button
            onClick={scrollToTop}
            className="
          fixed bottom-6 right-6 z-999999
          bg-[#F26D52] text-white p-3
          rounded-full shadow-lg
          hover:bg-[#ff836c]
          transition-all duration-300 cursor-pointer
          animate-pulse-custom
        "
          >
            <ArrowUp size={20} />
          </button>
        )}
      </>
    )
  );
}
