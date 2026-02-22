import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

export default function Hero() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered fade-up
            gsap.fromTo('.hero-reveal',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: 'power3.out',
                    delay: 0.2
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-[100dvh] flex flex-col justify-end overflow-hidden">
            {/* Background Video & Overlay */}
            <div className="absolute inset-0 z-0 bg-dark">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105 opacity-60"
                >
                    <source src="/media/hero.bg.mp4" type="video/mp4" />
                </video>
                {/* Gradient overlay: primary to very dark */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-primary/90 to-transparent mix-blend-multiply opacity-90"></div>
                <div className="absolute inset-0 bg-dark/50"></div>
            </div>

            {/* Content Bottom Left Third */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32 flex flex-col items-start gap-6">
                <div className="text-background max-w-3xl">
                    <h1 className="flex flex-col gap-2">
                        <span className="hero-reveal font-sans font-bold text-3xl md:text-5xl uppercase tracking-widest text-[#F2F0E9]/80">
                            Premium trade websites.
                        </span>
                        <span className="hero-reveal font-drama italic text-7xl md:text-[8rem] leading-none text-accent">
                            Built For Free.
                        </span>
                    </h1>
                    <p className="hero-reveal mt-8 text-xl md:text-2xl font-outfit font-light text-[#F2F0E9]/80 max-w-xl">
                        We design and build your digital presence completely free. You only pay for reliable, lightning-fast hosting and management.
                    </p>
                </div>

                <Link to="/application">
                    <button className="hero-reveal magnetic-btn bg-accent text-white px-8 py-4 rounded-full font-bold text-lg mt-4 flex items-center gap-3">
                        <span className="relative z-10">Complete the application</span>
                        <span className="hover-bg"></span>
                    </button>
                </Link>
            </div>
        </section>
    );
}
