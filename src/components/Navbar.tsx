import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {window.removeEventListener("scroll", handleScroll);};
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={cn("fixed w-full z-50 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#home">
                    <span className="relative z-10" >
                        <span className="text-glow text-foreground" >My</span>Portfolio
                    </span>
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-8 mr-8" >
                    {navItems.map((item, index) => (
                        <a key={index} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" >{item.name}</a>
                    ))}
                </div>
                
                {/* mobile menu button */}
                <button onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden z-50 relative p-2 text-foreground"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* mobile nav overlay */}
            <div className={cn(
                "fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden transition-all duration-300",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col space-y-6 text-xl">
                    {navItems.map((item, index) => (
                        <a 
                            key={index} 
                            href={item.href} 
                            className="text-foreground/80 hover:text-primary transition-colors duration-300 text-center" 
                            onClick={handleNavClick}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;