import NoiseOverlay from './components/NoiseOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { MobileFloatingCTA } from './components/MobileFloatingCTA';

function App() {
    return (
        <div className="relative w-full min-h-screen font-sans selection:bg-accent selection:text-white pb-20 md:pb-0">
            {/* Global CSS noise overlay via SVG filter */}
            <NoiseOverlay />

            <Navbar />
            <MobileFloatingCTA />

            <main className="flex flex-col w-full relative">
                <Hero />
                <Features />
                <Philosophy />
                <Protocol />
                <Pricing />
            </main>

            <Footer />
        </div>
    );
}

export default App;
