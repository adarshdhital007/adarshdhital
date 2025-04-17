"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { flushSync } from "react-dom";

const storageKey = "theme-preference";

export const ThemeSwitch: React.FC = () => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState<"light" | "dark">(
    "light"
  );
  const buttonRef = React.useRef<HTMLButtonElement>(null); // Use a ref for the button for the transition

  const getColorPreference = (): "light" | "dark" => {
    if (typeof window !== "undefined") {
      const storedPreference = localStorage.getItem(storageKey);
      if (storedPreference) {
        return storedPreference as "light" | "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  };

  const reflectPreference = (theme: "light" | "dark") => {
    document.documentElement.classList.remove("bg-light", "bg-dark");
    document.documentElement.classList.add(`bg-${theme}`);
    setCurrentTheme(theme);
    setTheme(theme);
  };

  React.useEffect(() => {
    setMounted(true);
    const initTheme = getColorPreference();
    reflectPreference(initTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? "dark" : "light";
      localStorage.setItem(storageKey, newTheme);
      reflectPreference(newTheme);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [setTheme]);

  const toggleTheme = async () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem(storageKey, newTheme);

    // Check if View Transition API is supported
    if (
      !buttonRef.current ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      reflectPreference(newTheme);
      return;
    }

    // Start View Transition
    await document.startViewTransition(() => {
      flushSync(() => {
        reflectPreference(newTheme);
      });
    }).ready;

    // Perform a vertical transition effect
    const clipPathValue =
      newTheme === "dark" ? `inset(0% 0% 100% 0%)` : `inset(100% 0% 0% 0%)`;

    document.documentElement.animate(
      {
        clipPath: [clipPathValue, `inset(0% 0% 0% 0%)`],
      },
      {
        duration: 900,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  if (!mounted) {
    return (
      <FaCircleHalfStroke
        className="h-[14px] w-[14px] text-[#1c1c1c]"
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      id="theme-toggle"
      aria-label={`${currentTheme} mode`}
      onClick={toggleTheme}
      ref={buttonRef}
      className="flex transition-opacity duration-300 hover:opacity-90"
    >
      <FaCircleHalfStroke
        className={`h-[18px] w-[18px] ${
          currentTheme === "dark" ? "text-[#D4D4D4]" : "text-[#1c1c1c]"
        }`}
      />
    </button>
  );
};
