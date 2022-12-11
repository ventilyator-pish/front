import { useLocation } from "react-router-dom";
import {useEffect} from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return null;
}
export default ScrollToTop
