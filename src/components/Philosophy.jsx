import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const sectionRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // SplitText alternative using simple opacity reveal
            gsap.fromTo(text1Ref.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                    }
                }
            );

            gsap.fromTo(text2Ref.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: 'power3.out',
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 50%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="philosophy" className="relative w-full py-40 bg-dark text-background overflow-hidden flex items-center justify-center">
            {/* Background Parallax Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03]">
                <img
                    src="https://images.unsplash.com/photo-1542273917363-3b1817bea28b?q=80&w=2674&auto=format&fit=crop"
                    alt="Texture"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-16">
                <h2 className="sr-only">Our Philosophy</h2>

                <div ref={text1Ref} className="max-w-3xl">
                    <p className="font-outfit text-xl md:text-2xl text-background/60 leading-relaxed font-light">
                        Most agencies focus on: <span className="text-background/90">charging thousands upfront for basic, slow templates.</span>
                    </p>
                </div>

                <div ref={text2Ref} className="max-w-4xl">
                    <p className="font-sans text-3xl md:text-5xl leading-tight">
                        We focus on: <br />
                        <span className="font-drama italic text-6xl md:text-8xl mt-4 block text-accent">building stunning instruments for free.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
