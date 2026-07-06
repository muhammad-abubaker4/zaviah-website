import { useEffect } from "react";

/** Loads Plausible analytics when VITE_PLAUSIBLE_DOMAIN is set at build time. */
const Analytics = () => {
  useEffect(() => {
    const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
    if (!domain || document.querySelector('script[data-plausible]')) return;

    const script = document.createElement("script");
    script.defer = true;
    script.dataset.plausible = "true";
    script.dataset.domain = domain;
    script.src = "https://plausible.io/js/script.js";
    document.head.appendChild(script);
  }, []);

  return null;
};

export default Analytics;
