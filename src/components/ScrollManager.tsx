import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToHashWhenReady } from "@/lib/scroll";

/** Controls scroll on navigation and reload — homepage reload without hash always starts at top. */
const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (hash && pathname === "/") {
      scrollToHashWhenReady(hash);
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? ("instant" as ScrollBehavior) : "auto" });
  }, [pathname, hash, key]);

  return null;
};

export default ScrollManager;
