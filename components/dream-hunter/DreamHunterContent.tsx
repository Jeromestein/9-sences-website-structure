import Link from "next/link";
import { ArrowRight, Twitter, Instagram } from "lucide-react";

export default function DreamHunterContent() {
    return (
        <div className="w-full relative z-10">
            {/* What Is Dream Hunter */}
            <section className="w-full py-24 px-8 md:px-16 lg:px-24">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="text-3xl md:text-5xl font-serif italic text-stone-200">What Is Dream Hunter</h2>
                    <div className="readable-panel space-y-6 text-lg md:text-xl text-stone-300 leading-relaxed font-light p-8 md:p-12">
                        <p>
                            We believe dreams are not an escape from reality,<br className="hidden md:block" />
                            but a preview of the future forming within the subconscious.
                        </p>
                        <p>
                            Through dreams, narrative, and embodied experience,<br className="hidden md:block" />
                            Dream Hunter guides individuals through a living process:
                        </p>
                        <p className="text-amber-100/80 pt-4 tracking-wide font-normal">
                            Self-awareness → Inner transformation → Real-world action
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="w-full py-24 px-8 border-t border-stone-800/30 bg-neutral-900/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif italic text-center mb-16 text-stone-200">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="space-y-6 group">
                            <span className="inline-block text-xs font-mono border border-stone-700 rounded-full px-3 py-1 text-stone-500 group-hover:border-amber-500/50 group-hover:text-amber-500/80 transition-colors">STEP 01</span>
                            <h3 className="text-2xl font-serif text-stone-100">Awaken</h3>
                            <p className="text-stone-400 leading-relaxed">
                                Enter your true inner structure through dream-based awareness.
                            </p>
                        </div>
                        <div className="space-y-6 group">
                            <span className="inline-block text-xs font-mono border border-stone-700 rounded-full px-3 py-1 text-stone-500 group-hover:border-amber-500/50 group-hover:text-amber-500/80 transition-colors">STEP 02</span>
                            <h3 className="text-2xl font-serif text-stone-100">Shape</h3>
                            <p className="text-stone-400 leading-relaxed">
                                Translate the subconscious into visible future imagery
                                through AI and artistic expression.
                            </p>
                        </div>
                        <div className="space-y-6 group">
                            <span className="inline-block text-xs font-mono border border-stone-700 rounded-full px-3 py-1 text-stone-500 group-hover:border-amber-500/50 group-hover:text-amber-500/80 transition-colors">STEP 03</span>
                            <h3 className="text-2xl font-serif text-stone-100">Act</h3>
                            <p className="text-stone-400 leading-relaxed">
                                Return to reality and allow dreams to begin taking form.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Experience */}
            <section className="w-full py-24 px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif italic text-center mb-20 text-stone-200">The Experience</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Youniverse */}
                        <div className="space-y-8 p-10 border border-stone-800 bg-neutral-900/40 hover:bg-neutral-800/40 transition-colors duration-500 rounded-2xl readable-panel">
                            <h3 className="text-2xl font-serif text-amber-100/90">Youniverse Dream Hunter</h3>
                            <p className="text-stone-300 leading-relaxed">
                                Explore the Youniverse, a dedicated space for dream exploration and narrative weaving. Here, your subconscious finds its voice.
                            </p>
                            <div className="pt-4">
                                <button className="group relative inline-flex items-center gap-3 px-6 py-3 bg-neutral-800 text-stone-300 hover:text-stone-100 hover:bg-neutral-700 transition-all duration-300 border border-stone-700 hover:border-stone-500 rounded-sm">
                                    <span className="uppercase tracking-widest text-xs">Enter Youniverse</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Genesis Program */}
                        <div className="space-y-8 readable-panel p-10">
                            <h3 className="text-2xl font-serif text-amber-100/90">Genesis Program</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-stone-600/60 shrink-0" />
                                    <span className="text-stone-300">
                                        <strong className="text-stone-100 block mb-1">Global Online</strong>
                                        Dream-oriented awakening entry
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-stone-600/60 shrink-0" />
                                    <span className="text-stone-300">
                                        <strong className="text-stone-100 block mb-1">Dream Pool</strong>
                                        A system for collective dream co-creation and support
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-stone-600/60 shrink-0" />
                                    <span className="text-stone-300">
                                        <strong className="text-stone-100 block mb-1">AI × Art</strong>
                                        Personalized dream creation
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-stone-600/60 shrink-0" />
                                    <span className="text-stone-300">
                                        <strong className="text-stone-100 block mb-1">Multi-city Pop-ups</strong>
                                        Museum pop-ups & open ticketed experiences
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-stone-600/60 shrink-0" />
                                    <span className="text-stone-300">
                                        <strong className="text-stone-100 block mb-1">Private Extensions</strong>
                                        At Sence 91 · Wellhaus
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dream Pool */}
            <section className="w-full py-32 px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-amber-900/5 mix-blend-plus-lighter pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
                    <h2 className="text-4xl md:text-6xl font-serif italic text-stone-200">Dream Pool</h2>
                    <div className="readable-panel inline-block text-left p-8 md:p-12">
                        <div className="text-lg md:text-xl text-stone-300 space-y-6 leading-relaxed font-light text-center">
                            <p>
                                Dream Pool is the collaborative core of Dream Hunter.<br className="hidden md:block" />
                                Here, Dreamers do not simply share dreams—<br className="hidden md:block" />
                                they become anchors for one another in reality.
                            </p>
                            <p>
                                Dreams are not measured by their scale,<br className="hidden md:block" />
                                but by the sincerity of action.<br className="hidden md:block" />
                                Step by step, they are held, supported,<br className="hidden md:block" />
                                and gradually brought into being together.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                        <button className="px-8 py-4 bg-amber-900/20 border border-amber-800/40 text-amber-100 hover:bg-amber-900/30 transition-all duration-500 uppercase tracking-widest text-sm">
                            Dreamer Entry
                        </button>
                        <a href="#" className="flex items-center gap-3 text-stone-500 hover:text-stone-300 transition-colors uppercase tracking-widest text-xs">
                            <span className="p-2 border border-stone-800 rounded-full">
                                {/* Placeholder icon for social media */}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </span>
                            <span>Join the Community</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* What Emerges */}
            <section className="w-full py-24 px-8 border-t border-stone-800/30">
                <div className="max-w-3xl mx-auto text-center space-y-12">
                    <span className="block text-xs font-bold tracking-[0.2em] uppercase text-stone-500">
                        What Emerges
                    </span>
                    <div className="space-y-8 text-2xl md:text-3xl font-serif italic text-stone-300 leading-normal">
                        <p>
                            Not imagination,<br />
                            but a beginning.
                        </p>
                        <p>
                            Not isolation,<br />
                            but resonance.
                        </p>
                        <p className="pt-8 text-stone-100">
                            Dream Hunter ultimately points not to being saved,<br />
                            but to this moment:
                        </p>
                        <p className="text-amber-200/90">
                            You choose to stand up for your dream.
                        </p>
                    </div>
                </div>
            </section>

            {/* Access & Request */}
            <section className="w-full py-24 px-8 bg-neutral-950">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 text-center md:text-left">
                    <div className="space-y-6">
                        <h3 className="text-xl font-serif text-stone-200 uppercase tracking-widest">Access</h3>
                        <p className="text-stone-400 leading-relaxed text-lg">
                            Some experiences are publicly accessible through pop-ups.
                            <br /><br />
                            Deeper journeys unfold only through alignment.
                        </p>
                    </div>
                    <div className="space-y-6 border-t md:border-t-0 md:border-l border-stone-800 pt-8 md:pt-0 md:pl-16">
                        <h3 className="text-xl font-serif text-stone-200 uppercase tracking-widest">Request Access</h3>
                        <div className="p-6 bg-stone-900/50 border border-dashed border-stone-800 text-stone-500 text-sm">
                            <p className="mb-2 uppercase tracking-wide">Coming Later</p>
                            <p>Collaborative IP Products / Art / Derivatives</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
