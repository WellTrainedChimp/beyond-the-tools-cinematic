import { Link } from 'react-router-dom';

export default function Pricing() {
    return (
        <section id="pricing" className="relative w-full py-32 px-6 bg-[#E8E6E0] rounded-b-[4rem] z-20 shadow-[-10px_-10px_30px_rgba(0,0,0,0.02)]">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-12">
                <div className="mb-4">
                    <h2 className="font-sans font-semibold text-accent uppercase tracking-widest text-sm mb-4 bg-background/50 inline-block px-4 py-1 rounded-full">Investment</h2>
                    <h3 className="font-drama italic text-5xl md:text-7xl text-dark">Zero Upfront.</h3>
                </div>

                <p className="font-outfit text-xl text-dark/70 leading-relaxed font-light max-w-2xl">
                    We build your stunning digital instrument entirely for free. You simply cover the premium hosting and management foundation. No hidden costs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
                    {/* Core Tier */}
                    <div className="bg-background rounded-[2.5rem] p-8 md:p-10 border border-primary/10 shadow-lg flex flex-col justify-between transform hover:translate-y-[-4px] transition-transform duration-500 text-left">
                        <div>
                            <span className="font-mono text-dark/60 text-sm font-bold uppercase tracking-widest mb-4 block">Core</span>
                            <div className="flex items-end gap-1 mb-6">
                                <span className="font-sans font-bold text-4xl text-dark">£50</span>
                                <span className="font-outfit text-dark/50 mb-1">/ mo</span>
                            </div>
                            <p className="font-outfit text-sm text-dark/80 mb-6 min-h-[3rem]">
                                5-page cinematic website. Ideal for sole traders establishing a professional presence.
                            </p>
                            <ul className="space-y-3 font-outfit text-sm text-dark/70">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-0.5">•</span> Free custom build
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-0.5">•</span> Lightning fast UK hosting
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-0.5">•</span> Domain maintenance
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Growth Tier - Highlighted */}
                    <div className="bg-primary rounded-[2.5rem] p-8 md:p-10 border border-primary/20 shadow-2xl flex flex-col justify-between transform md:-translate-y-4 hover:-translate-y-6 transition-transform duration-500 text-left relative overflow-hidden">
                        <div className="absolute top-0 right-8 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-b-lg">
                            Most Popular
                        </div>
                        <div>
                            <span className="font-mono text-background/80 text-sm font-bold uppercase tracking-widest mb-4 block">Growth</span>
                            <div className="flex items-end gap-1 mb-6 text-background">
                                <span className="font-sans font-bold text-5xl">£100</span>
                                <span className="font-outfit text-background/60 mb-1">/ mo</span>
                            </div>
                            <p className="font-outfit text-sm text-background/90 mb-6 min-h-[3rem]">
                                10-page site built specifically for optimized SEO and dominating local AI search results.
                            </p>
                            <ul className="space-y-3 font-outfit text-sm text-background/70">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-0.5">•</span> Everything in Core
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-0.5">•</span> 10 custom pages
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-0.5">•</span> Advanced SEO optimization
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-0.5">•</span> AI search readiness
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Pro Tier */}
                    <div className="bg-background rounded-[2.5rem] p-8 md:p-10 border border-primary/10 shadow-lg flex flex-col justify-between transform hover:translate-y-[-4px] transition-transform duration-500 text-left relative opacity-90">
                        <div className="absolute top-0 right-8 bg-dark/10 text-dark/60 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-b-lg">
                            Coming Soon
                        </div>
                        <div>
                            <span className="font-mono text-dark/60 text-sm font-bold uppercase tracking-widest mb-4 block">Pro</span>
                            <div className="flex items-end gap-1 mb-6">
                                <span className="font-sans font-bold text-4xl text-dark">£250</span>
                                <span className="font-outfit text-dark/50 mb-1">/ mo</span>
                            </div>
                            <p className="font-outfit text-sm text-dark/80 mb-6 min-h-[3rem]">
                                Full brand package. Maximum authority for established trades scaling up.
                            </p>
                            <ul className="space-y-3 font-outfit text-sm text-dark/70">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-0.5">•</span> Everything in Growth
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-0.5">•</span> Monthly blog articles
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-0.5">•</span> Social media management
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-0.5">•</span> Full brand package
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center w-full">
                    <Link to="/application">
                        <button className="magnetic-btn bg-accent text-white px-12 py-5 rounded-full font-bold text-lg flex items-center gap-3">
                            <span className="relative z-10">Start Application</span>
                            <span className="hover-bg bg-primary"></span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
