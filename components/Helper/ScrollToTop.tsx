"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hasRunOnce = useRef(false);

  useEffect(() => {
    if (hasRunOnce.current) return;
    hasRunOnce.current = true;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-950/60 cursor-pointer text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-900 transition-all"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
