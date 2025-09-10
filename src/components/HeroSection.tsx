import { ArrowDown } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

function HeroSection() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {window.removeEventListener("scroll", handleScroll);};
    }, []);

    return (
        <RevealOnScroll>
            <section id="home"
            className="relative min-h-dvh flex flex-col items-center justify-center text-center px-4"
            >
                <div className="container max-w-4xl mx-auto text-center z-10">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                            <span className="opacity-0 text-primary animate-fade-in-delay-1"> Nghia</span>
                            <span className="opacity-0 text-gradient ml-1 animate-fade-in-delay-2"> To</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                            A student trying to learn web development.
                        </p>

                        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                            <a href="#projects" className="cosmic-button">
                                View My Work
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cn("absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce transition-all duration-500",
                                    isScrolled ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
                )}>
                    <span className="text-sm text-muted-foreground"> Scroll</span>
                    <div>
                        <a href="#about">
                            <ArrowDown className="mt-2 h-5 w-5 text-primary" />
                        </a>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
}


export default HeroSection;