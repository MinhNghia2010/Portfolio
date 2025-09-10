import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from "../lib/utils";

function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {window.removeEventListener("scroll", handleScroll);};
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    }

    return (
        <button onClick={toggleTheme} 
        className={cn("fixed max-sm:hidden right-5 p-2 z-60 rounded-full transition-all duration-300", 
                      "focus:outline-hidden",
                      isScrolled ? "top-2 max-md:top-3" : "top-4 max-md:top-5",)}>
            {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/>: <Moon className="h-6 w-6 text-blue-900"/>}
            </button>
    );
}

export default ThemeToggle;