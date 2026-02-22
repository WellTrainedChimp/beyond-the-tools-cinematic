import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ShufflerCard = () => {
    const [cards, setCards] = useState([
        { id: 1, text: "£0 Upfront Cost" },
        { id: 2, text: "Stunning Design" },
        { id: 3, text: "From £50/m Hosting" }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newArr = [...prev];
                const last = newArr.pop();
                newArr.unshift(last);
                return newArr;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-48 w-full flex items-center justify-center -mt-4">
            {cards.map((card, i) => {
                const isTop = i === 0;
                const isMiddle = i === 1;
                const isBottom = i === 2;

                return (
                    <div
                        key={card.id}
                        className={`absolute w-full max-w-[240px] bg-background border border-primary/10 rounded-[1.5rem] p-4 flex items-center justify-center text-center shadow-lg transition-all duration-[800ms] ease-spring`}
                        style={{
                            transform: `translateY(${i * 12}px) scale(${1 - i * 0.05})`,
                            zIndex: 10 - i,
                            opacity: 1 - i * 0.2
                        }}
                    >
                        <span className="font-outfit font-medium text-dark/80">{card.text}</span>
                    </div>
                );
            })}
        </div>
    );
};

const TypewriterCard = () => {
    const [text, setText] = useState("");
    const fullText = "CONVERT.BETTER.CUSTOMERS > STAND OUT.";
    const index = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setText(fullText.substring(0, index.current));
            index.current++;
            if (index.current > fullText.length + 10) { // pause at end
                index.current = 0; // reset
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full bg-[#1A1A1A] rounded-[1.5rem] p-6 shadow-inset overflow-hidden relative">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span className="text-xs font-mono text-white/50 uppercase tracking-widest">Live Feed</span>
            </div>
            <div className="font-mono text-accent text-sm md:text-base h-20 min-h-[5rem]">
                {text}
                <span className="animate-pulse inline-block w-[8px] h-[16px] bg-white ml-1 align-middle"></span>
            </div>

            {/* Background grid texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F2F0E9 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
    );
};

const SchedulerCard = () => {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            // Initial pos outside
            tl.set(cursorRef.current, { x: 0, y: 150, opacity: 0 });

            // Move to Tuesday (index 2)
            tl.to(cursorRef.current, { x: 100, y: 30, opacity: 1, duration: 1, ease: "power2.inOut" });

            // Click press
            tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
            // highlight day (this is hard to sync without refs to inner elements, let's just animate a class or do a fake highlight via GSAP)
            tl.to('.day-target', { backgroundColor: '#CC5833', color: '#fff', duration: 0.2 }, "<");
            tl.to(cursorRef.current, { scale: 1, duration: 0.1 });

            // Move to Save button
            tl.to(cursorRef.current, { x: 180, y: 100, duration: 0.8, ease: "power2.inOut", delay: 0.2 });

            // Click save
            tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
            tl.to('.save-btn-target', { scale: 0.95, duration: 0.1 }, "<");
            tl.to('.save-btn-target', { scale: 1, duration: 0.1 });
            tl.to(cursorRef.current, { scale: 1, duration: 0.1 });

            // Fade out
            tl.to(cursorRef.current, { opacity: 0, y: "+=50", duration: 0.5 });
            tl.set('.day-target', { backgroundColor: 'transparent', color: '#1A1A1A' });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full bg-background rounded-[1.5rem] p-6 border border-primary/10 flex flex-col items-center">
            <div className="flex gap-2 mb-6 w-full justify-between">
                {days.map((d, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${i === 2 ? 'day-target text-dark' : 'text-dark/40'}`}>
                        {d}
                    </div>
                ))}
            </div>
            <div className="save-btn-target bg-primary text-background text-xs px-6 py-2 rounded-full font-sans uppercase tracking-widest ml-auto">
                Process
            </div>

            <div ref={cursorRef} className="absolute top-0 left-0 z-10 pointer-events-none drop-shadow-md">
                <MousePointer2 size={24} className="text-dark fill-white" />
            </div>
        </div>
    );
};

export default function Features() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="features" className="py-32 px-6 max-w-7xl mx-auto w-full">
            <div className="text-center mb-20 max-w-2xl mx-auto">
                <h2 className="font-sans font-semibold text-accent uppercase tracking-widest text-sm mb-4">Why Beyond The Tools?</h2>
                <h3 className="font-drama italic text-5xl md:text-6xl text-primary leading-tight">Stop losing jobs to bad websites.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="feature-card bg-background rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/5 flex flex-col justify-between">
                    <div className="mb-12">
                        <h4 className="font-sans font-bold text-2xl mb-3 text-dark">Zero Setup Fees</h4>
                        <p className="font-outfit text-dark/60">We build stunning, professional websites completely for free. You only pay for hosting.</p>
                    </div>
                    <ShufflerCard />
                </div>

                {/* Card 2 */}
                <div className="feature-card bg-background rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/5 flex flex-col justify-between">
                    <div className="mb-12">
                        <h4 className="font-sans font-bold text-2xl mb-3 text-dark">Convert Better</h4>
                        <p className="font-outfit text-dark/60">Help your trades business stand out from the noise and attract higher quality customers.</p>
                    </div>
                    <TypewriterCard />
                </div>

                {/* Card 3 */}
                <div className="feature-card bg-background rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/5 flex flex-col justify-between">
                    <div className="mb-12">
                        <h4 className="font-sans font-bold text-2xl mb-3 text-dark">Take 2 Minutes</h4>
                        <p className="font-outfit text-dark/60">Complete the application form in 2 minutes. We handle everything else while you stay on the tools.</p>
                    </div>
                    <SchedulerCard />
                </div>
            </div>
        </section>
    );
}
