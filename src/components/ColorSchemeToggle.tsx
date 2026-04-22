import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "colorScheme";
const MIGRATION_KEY = "colorSchemeV2";

const ColorSchemeToggle = () => {
  const [isAltScheme, setIsAltScheme] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(MIGRATION_KEY)) {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "alt") {
        localStorage.setItem(STORAGE_KEY, "default");
      }
      localStorage.setItem(MIGRATION_KEY, "1");
    }

    const savedScheme = localStorage.getItem(STORAGE_KEY);
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
      localStorage.setItem(STORAGE_KEY, "alt");
    } else {
      document.documentElement.classList.remove("color-scheme-alt");
      localStorage.setItem(STORAGE_KEY, "default");
    }
  };

  return (
    <Button
      onClick={toggleScheme}
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg bg-white hover:bg-muted"
      aria-label="Toggle color scheme"
      title={isAltScheme ? "Switch to organization colors (#253439)" : "Switch to teal accent scheme"}
    >
      <Palette className="h-5 w-5" />
    </Button>
  );
};

export default ColorSchemeToggle;
