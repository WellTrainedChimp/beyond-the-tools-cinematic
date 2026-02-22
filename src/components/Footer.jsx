export default function Footer() {
    return (
        <footer className="relative bg-dark text-background pt-32 pb-12 px-6 rounded-t-[4rem] mt-[-4rem] z-10 flex flex-col items-center overflow-hidden">
            {/* Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1542273917363-3b1817bea28b?q=80&w=2674&auto=format&fit=crop"
                    alt="Texture"
                    className="w-full h-full object-cover grayscale"
                />
            </div>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24 relative z-10">
                <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
                    <h2 className="font-sans font-bold text-3xl tracking-tight text-background">
                        Beyond the Tools
                    </h2>
                    <p className="font-outfit text-background/60 max-w-sm font-light leading-relaxed">
                        Stunning websites for trades. We build your digital instrument for free. You only pay for hosting. Convert better customers and stand out.
                    </p>

                    <div className="flex items-center gap-3 mt-4 bg-background/10 px-4 py-2 rounded-full w-max">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="font-mono text-xs uppercase tracking-widest text-background/80">System Operational</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4 font-outfit text-background/70 font-light">
                    <span className="font-sans font-bold text-background mb-2">Navigation</span>
                    <a href="#features" className="hover:text-accent transition-colors w-max">Features</a>
                    <a href="#philosophy" className="hover:text-accent transition-colors w-max">Philosophy</a>
                    <a href="#process" className="hover:text-accent transition-colors w-max">Process</a>
                    <a href="#pricing" className="hover:text-accent transition-colors w-max">Pricing</a>
                </div>

                <div className="flex flex-col gap-4 font-outfit text-background/70 font-light">
                    <span className="font-sans font-bold text-background mb-2">Legal</span>
                    <a href="#" className="hover:text-background transition-colors w-max">Terms of Service</a>
                    <a href="#" className="hover:text-background transition-colors w-max">Privacy Policy</a>
                    <a href="#" className="hover:text-background transition-colors w-max">Cookie Protocol</a>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
                <p className="font-mono text-xs text-background/40">© {new Date().getFullYear()} Beyond the Tools. All rights reserved.</p>
                <p className="font-mono text-xs text-background/40 flex items-center gap-2">Built with <span className="text-accent">Precision</span></p>
            </div>
        </footer>
    );
}
