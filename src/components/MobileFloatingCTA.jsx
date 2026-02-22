import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SaveButton } from './ui/save-button';

export function MobileFloatingCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show CTA only after scrolling past the hero section (approx 100vh)
            if (window.scrollY > window.innerHeight * 0.8) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed bottom-6 left-0 w-full px-4 z-40 md:hidden flex justify-center pointer-events-none">
            <Link to="/application" className="pointer-events-auto shadow-2xl rounded-full block">
                <SaveButton
                    text={{
                        idle: "Start Application",
                        saving: "Redirecting...",
                        saved: "Success!"
                    }}
                    className="shadow-2xl py-4 px-8 text-base bg-accent hover:bg-accent/90 border border-white/10"
                />
            </Link>
        </div>
    );
}
