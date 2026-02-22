import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SaveButton } from './ui/save-button';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-center mt-6 px-4">
            <div
                className={`relative flex items-center justify-between px-6 py-3 w-full max-w-5xl rounded-full transition-all duration-500 ease-magnetic ${scrolled
                    ? 'bg-background/60 backdrop-blur-xl border border-primary/10 shadow-lg text-primary'
                    : 'bg-transparent text-background/90'
                    }`}
            >
                <Link to="/" onClick={() => setMenuOpen(false)} className="font-sans font-bold text-xl tracking-tight z-10 select-none hover:text-accent transition-colors">
                    Beyond the Tools
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 font-outfit text-sm font-medium">
                    <a href="#features" className="interactive-link hover:text-accent transition-colors">Features</a>
                    <a href="#philosophy" className="interactive-link hover:text-accent transition-colors">Philosophy</a>
                    <a href="#process" className="interactive-link hover:text-accent transition-colors">Process</a>

                    <Link to="/application">
                        <button className="magnetic-btn bg-accent text-white px-6 py-2.5 rounded-full font-bold ml-4">
                            <span className="relative z-10 flex items-center gap-2">
                                Apply Now
                            </span>
                            <span className="hover-bg"></span>
                        </button>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-10 p-2 -mr-2 text-current"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <div className={`absolute top-full left-0 w-full mt-4 p-4 rounded-3xl backdrop-blur-3xl bg-background/90 border border-primary/10 transition-all duration-500 origin-top shadow-2xl flex flex-col items-center gap-6 py-8 md:hidden text-primary ${menuOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-4 invisible'
                    }`}
                >
                    <a href="#features" onClick={() => setMenuOpen(false)} className="text-xl font-outfit font-medium">Features</a>
                    <a href="#philosophy" onClick={() => setMenuOpen(false)} className="text-xl font-outfit font-medium">Philosophy</a>
                    <a href="#process" onClick={() => setMenuOpen(false)} className="text-xl font-outfit font-medium">Process</a>
                    <div className="mt-4 w-full flex justify-center">
                        <Link to="/application" className="w-full max-w-[280px]">
                            <SaveButton
                                text={{
                                    idle: "Complete Application",
                                    saving: "Submitting...",
                                    saved: "Application Sent!"
                                }}
                                className="py-6 px-8 text-lg w-full"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
