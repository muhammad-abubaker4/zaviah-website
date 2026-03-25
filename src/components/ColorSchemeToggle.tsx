import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const ColorSchemeToggle = () => {
  const [isAltScheme, setIsAltScheme] = useState(false);

  useEffect(() => {
    // Check localStorage for saved preference
    const savedScheme = localStorage.getItem("colorScheme");
    if (savedScheme === "alt") {
      setIsAltScheme(true);
      document.documentElement.classList.add("color-scheme-alt");
    }
  }, []);

  const toggleScheme = () => {
    const newScheme = !isAltScheme;
    setIsAltScheme(newScheme);

    if (newScheme) {
      document.documentElement.classList.add("color-scheme-alt");
      localStorage.setItem("colorScheme", "alt");
    } else {
      document.documentElement.classList.remove("color-scheme-alt");
      localStorage.setItem("colorScheme", "default");
    }
  };

  return (
    <Button
      onClick={toggleScheme}
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg bg-white hover:bg-muted"
      aria-label="Toggle color scheme"
      title={isAltScheme ? "Switch to Teal Scheme" : "Switch to Dark Teal Scheme (#253439)"}
    >
      <Palette className="h-5 w-5" />
    </Button>
  );
};

export default ColorSchemeToggle;

