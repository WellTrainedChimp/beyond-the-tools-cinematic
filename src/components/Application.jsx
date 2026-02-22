import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import NoiseOverlay from './NoiseOverlay';

export default function Application() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on mount
    }, []);

    return (
        <div className="relative w-full min-h-screen font-sans selection:bg-accent selection:text-white flex flex-col">
            <NoiseOverlay />

            {/* 
        We use a slightly different prop or state for Navbar 
        to ensure it displays clearly over a light background, 
        or we just let it use its scroll logic. 
      */}
            <Navbar />

            <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-4">
                <div className="w-full max-w-4xl flex justify-start mb-8">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-dark/60 hover:text-accent font-outfit font-medium transition-colors bg-white/50 px-4 py-2 rounded-full border border-primary/5 shadow-sm backdrop-blur-md"
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                </div>

                <div className="w-full max-w-3xl text-center mb-12">
                    <h1 className="font-drama italic text-5xl md:text-7xl text-dark mb-4">
                        The Application.
                    </h1>
                    <p className="font-outfit text-xl text-dark/60 font-light">
                        Complete the details below to claim your spot. We build standard-setting websites for trades completely free.
                    </p>
                </div>

                <div className="w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-primary/10">
                    <iframe
                        className="airtable-embed"
                        src="https://airtable.com/embed/appJzTBUqps0c3E8L/paga9lzan74LMV92M/form"
                        frameBorder="0"
                        onMouseWheel=""
                        width="100%"
                        height="1000"
                        style={{ background: 'transparent' }}
                    ></iframe>
                </div>
            </main>

            <Footer />
        </div>
    );
}
