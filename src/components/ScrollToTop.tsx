import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Reset scroll positions for compatibility across browsers
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
      // Fallback with smooth scrolling
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
