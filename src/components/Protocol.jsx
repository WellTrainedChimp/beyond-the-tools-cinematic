import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const protocols = [
    {
        step: "01",
        title: "Apply",
        desc: "Complete our 2-minute application. We review your trades business to ensure a perfect fit for a high quality build.",
        animation: "motif"
    },
    {
        step: "02",
        title: "Build",
        desc: "We design and develop a stunning website tailored to your brand, completely free of charge.",
        animation: "laser"
    },
    {
        step: "03",
        title: "Launch",
        desc: "Go live. You only pay for premium reliable hosting and lightning-fast management starting from £50/month.",
        animation: "pulse"
    }
];

export default function Protocol() {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);
    cardsRef.current = [];

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stacking Archive Logic
            cardsRef.current.forEach((card, i) => {
                if (i === cardsRef.current.length - 1) return; // Last card doesn't shrink

                ScrollTrigger.create({
                    trigger: cardsRef.current[i + 1],
                    start: "top center",
                    end: "top top",
                    scrub: 1,
                    animation: gsap.to(card, {
                        scale: 0.9,
                        opacity: 0.5,
                        filter: "blur(20px)",
                        transformOrigin: "top center",
                        ease: "none"
                    })
                });
            });

            // Motif Animation Setup
            gsap.to('.anim-motif', { rotation: 360, duration: 20, repeat: -1, ease: 'linear' });

            // Laser Animation Setup
            gsap.to('.anim-laser', { y: '100%', duration: 2, repeat: -1, yoyo: true, ease: 'power1.inOut' });

            // Pulse Animation Setup
            gsap.to('.anim-pulse', {
                strokeDashoffset: 0,
                repeat: -1,
                duration: 3,
                ease: 'power2.inOut'
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="process" className="relative w-full bg-background pt-20 pb-40 px-6 max-w-7xl mx-auto flex flex-col gap-24">
            <div className="text-center sticky top-24 z-10 mb-[-12vh] pointer-events-none">
                <h2 className="font-sans font-semibold text-accent uppercase tracking-widest text-sm mb-4 bg-background/80 inline-block px-4 py-1 rounded-full backdrop-blur-md border border-primary/5">Protocol</h2>
                <h3 className="font-drama italic text-5xl md:text-7xl text-primary bg-background/80 inline-block px-4 rounded-3xl backdrop-blur-md">The Blueprint</h3>
            </div>

            <div className="relative flex flex-col items-center w-full min-h-[50vh]">
                {protocols.map((p, i) => (
                    <div
                        key={i}
                        ref={addToRefs}
                        className="sticky top-40 w-full max-w-4xl h-[60vh] md:h-[50vh] bg-background border border-primary/10 rounded-[2.5rem] shadow-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden z-20"
                        style={{ top: `${160 + i * 20}px` }}
                    >
                        {/* Background Texture inside card */}
                        <div className="absolute inset-0 bg-[#F5F3EE] opacity-50 z-0 pointer-events-none"></div>

                        {/* Animation Canvas Wrapper */}
                        <div className="relative z-10 w-full md:w-5/12 aspect-square bg-[#E8E6E0] rounded-[1.5rem] flex items-center justify-center overflow-hidden border border-primary/5 shadow-inner">
                            {p.animation === "motif" && (
                                <svg className="anim-motif w-2/3 h-2/3" viewBox="0 0 100 100" fill="none" stroke="#CC5833" strokeWidth="2">
                                    <circle cx="50" cy="50" r="40" strokeOpacity="0.2" />
                                    <circle cx="50" cy="50" r="30" strokeDasharray="4 4" strokeOpacity="0.5" />
                                    <path d="M50 10 L50 90 M10 50 L90 50 M21.7 21.7 L78.3 78.3 M21.7 78.3 L78.3 21.7" strokeOpacity="0.3" />
                                    <circle cx="50" cy="50" r="15" />
                                </svg>
                            )}
                            {p.animation === "laser" && (
                                <div className="w-full h-full relative" style={{ backgroundImage: 'radial-gradient(#2E4036 1px, transparent 1px)', backgroundSize: '16px 16px', backgroundPosition: '-8px -8px' }}>
                                    <div className="anim-laser absolute top-[-5px] left-0 w-full h-[10px] bg-accent/80 blur-[2px] shadow-[0_0_15px_#CC5833]"></div>
                                </div>
                            )}
                            {p.animation === "pulse" && (
                                <svg className="w-[120%] h-full" viewBox="0 0 200 100" fill="none" stroke="#2E4036" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path
                                        className="anim-pulse"
                                        d="M 0 50 L 50 50 L 60 20 L 75 80 L 90 50 L 110 50 L 125 10 L 140 90 L 155 50 L 200 50"
                                        strokeDasharray="400"
                                        strokeDashoffset="400"
                                    />
                                    <path d="M 0 50 L 200 50" strokeOpacity="0.1" strokeWidth="1" />
                                </svg>
                            )}
                        </div>

                        {/* Content */}
                        <div className="relative z-10 w-full md:w-7/12 flex flex-col gap-6">
                            <span className="font-mono text-accent text-lg font-bold">Protocol // {p.step}</span>
                            <h4 className="font-sans font-bold text-4xl md:text-5xl text-dark tracking-tight">{p.title}</h4>
                            <p className="font-outfit text-xl text-dark/70 leading-relaxed font-light">{p.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
