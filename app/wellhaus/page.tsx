import Link from "next/link";
import Image from "next/image";
import VideoBackground from "@/components/VideoBackground";
import AudioControl from "@/components/ui/AudioControl";
import FooterSection from "@/components/FooterSection";

export default function WellhausPage() {
    return (
        <main className="min-h-screen bg-void text-offwhite selection:bg-amber selection:text-void overflow-x-hidden font-sans">
            <AudioControl src="/neon-dreams-280430.mp3" />

            {/* Navigation / Header */}
            <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-void/90 to-transparent backdrop-blur-[2px]">
                <Link href="/" className="hover:opacity-70 transition-opacity">
                    <Image
                        src="/logo_transparent_dark_v3_cropped.png"
                        alt="9Sences Logo"
                        width={120}
                        height={40}
                        className="h-10 w-auto"
                    />
                </Link>
            </nav>

            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center p-8 overflow-hidden">
                <VideoBackground src="/Abstract_Bioluminescent_Particles_Video.mp4" />

                {/* Gradient Overlay for "Void" Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-void z-10" />
                <div className="absolute inset-0 bg-void/20 z-10" />

                <div className="max-w-6xl w-full text-center space-y-12 z-20 relative">
                    <div className="space-y-4">
                        <span className="block text-sm font-bold tracking-[0.3em] uppercase text-amber/90">
                            The Cultural Experience Engine under 9Sences
                        </span>
                        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl italic leading-none text-white tracking-tight">
                            Sence 91.<br /> Wellhaus
                        </h1>
                    </div>

                    <p className="font-sans font-normal text-xl md:text-2xl text-offwhite/90 max-w-2xl mx-auto tracking-wide leading-relaxed">
                        Rather than joining the wellness era,<br />
                        <span className="text-amber italic font-serif font-medium">Sence 91.Wellhaus was built to design it.</span>
                    </p>

                    <div className="pt-12 animate-fade-in-up">
                        <button className="px-10 py-4 border border-amber/60 text-amber text-sm font-bold uppercase tracking-[0.25em] hover:bg-amber hover:text-void transition-all duration-700 backdrop-blur-sm">
                            Request Access
                        </button>
                    </div>
                </div>

                {/* Subtle Amber Glow / Chiaroscuro */}
                <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-amber/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0"></div>
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-amber/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0"></div>
            </section>

            {/* Content Container - Editorial Layout */}
            <div className="relative w-full bg-void z-20">

                {/* What Is Sence 91. Wellhaus */}
                <section className="py-32 md:py-48 px-8 md:px-16 border-t border-amber/10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                        <div className="md:col-span-4">
                            {/* <span className="text-amber/60 font-mono text-xs tracking-widest uppercase block mb-4">01 | Definition</span> */}
                            <h2 className="text-4xl md:text-5xl font-serif italic text-white leading-tight font-medium">
                                What Is <br /> Sence 91.<span className="text-amber">Wellhaus</span>
                            </h2>
                        </div>
                        <div className="md:col-span-8 md:pl-12 flex flex-col justify-center h-full">
                            <div className="readable-panel space-y-8">
                                <p className="text-2xl md:text-3xl font-medium text-offwhite leading-relaxed max-w-3xl">
                                    Sence 91.Wellhaus is not a venue. <br />
                                    It is a <span className="text-amber">cultural positioning platform</span>.
                                </p>
                                <p className="text-xl md:text-2xl text-offwhite/80 font-normal leading-relaxed max-w-2xl">
                                    A space where wellness, identity, and visibility converge, placing brands inside the right cultural context rather than in front of an audience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 02 | Why Brands Are Here */}
                <section className="py-32 md:py-48 px-8 md:px-16 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-amber/5 to-transparent pointer-events-none" />

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-6 relative">
                            <Image src="/annie-spratt-PEg7KWP-XNQ-unsplash.jpg" alt="" width={250} height={350} className="w-full h-full object-cover md:absolute md:inset-0" />
                        </div>
                        <div className="md:col-span-5 md:col-start-8">
                            {/* <span className="text-amber/60 font-mono text-xs tracking-widest uppercase block mb-4">02 | Context</span> */}
                            <h2 className="text-4xl md:text-5xl font-serif italic text-white leading-tight mb-8 font-medium">
                                Why Brands <br /> Are Here
                            </h2>
                            <div className="readable-panel space-y-6 text-xl md:text-2xl font-normal text-offwhite/90">
                                <p>This is not paid exposure. This is <span className="text-white italic font-serif font-medium">contextual presence</span>.</p>
                                <p>Brands are not displayed. They are embedded within a carefully curated social ecosystem — where credibility is inherited, not purchased.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 03 | A Wellness Red Carpet */}
                <section className="py-32 md:py-48 px-8 md:px-16 border-t border-amber/10 bg-void/50">
                    <div className="max-w-5xl mx-auto text-center space-y-12">
                        {/* <span className="text-amber/60 font-mono text-xs tracking-widest uppercase block">03 | The Stage</span> */}
                        <h2 className="text-5xl md:text-7xl font-serif italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-tight font-medium">
                            A Wellness Red Carpet
                        </h2>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-base md:text-lg font-serif italic text-amber/90 tracking-widest uppercase font-medium">
                            <span>Celebrities</span>
                            <span className="text-offwhite/50">×</span>
                            <span>Gymfluencers</span>
                            <span className="text-offwhite/50">×</span>
                            <span>Tastemakers</span>
                        </div>

                        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-offwhite/80 font-medium text-base tracking-wide uppercase border-t border-amber/20 w-full max-w-3xl mx-auto">
                            <div className="py-4">Not for press</div>
                            <div className="py-4 border-l-0 md:border-l border-r-0 md:border-r border-dashed border-amber/30">Not for performance</div>
                            <div className="py-4 text-white">But for presence and alignment</div>
                        </div>
                    </div>
                </section>

                {/* 04 | Who You Are Seen With Matters */}
                <section className="py-32 md:py-48 px-8 md:px-16">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
                        <div className="space-y-8">
                            {/* <span className="text-amber/60 font-mono text-xs tracking-widest uppercase block">04 | Curation</span> */}
                            <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-tight font-medium">
                                Who You Are <br /> Seen With Matters
                            </h2>
                            <div className="readable-panel">
                                <ul className="space-y-6 text-xl md:text-2xl font-normal text-offwhite/90">
                                    <li className="flex items-start gap-4">
                                        <span className="text-amber text-sm mt-2">✦</span>
                                        <span>Every guest is curated.</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="text-amber text-sm mt-2">✦</span>
                                        <span>Every interaction compounds brand perception.</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="text-amber text-sm mt-2">✦</span>
                                        <span>Visibility here is peer-to-peer, not top-down.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative bg-neutral-900 border border-amber/10 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent opacity-80" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* <span className="font-serif italic text-6xl text-amber/20 group-hover:text-amber/40 transition-colors duration-700 font-medium">Peer<br />To<br />Peer</span> */}
                                <Image src="/two-elegant-people-whispering.jpg" alt="" width={250} height={350} className="w-full h-full object-cover md:absolute md:inset-0" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 05 | Sponsor & Brand Value */}
                <section className="py-32 md:py-48 px-8 md:px-16 bg-neutral-900/50 border-y border-amber/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16">
                            {/* <span className="text-amber/60 font-mono text-xs tracking-widest uppercase block mb-4">05 | Value Proposition</span> */}
                            <h2 className="text-4xl md:text-5xl font-serif italic text-white font-medium">Sponsor & Brand Value</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                "Organic, creator-led visibility",
                                "Cultural relevance without hard selling",
                                "High-trust, private social environments",
                                "Long-term brand association with identity and taste"
                            ].map((item, i) => (
                                <div key={i} className="p-8 border border-white/10 bg-void/50 hover:border-amber/40 transition-colors duration-500 group">
                                    <span className="block text-3xl font-serif text-amber/60 mb-4 group-hover:text-amber transition-colors font-medium">0{i + 1}</span>
                                    <p className="text-offwhite font-normal text-lg leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <p className="text-2xl md:text-4xl font-serif italic text-offwhite/90 font-medium leading-relaxed">
                                "Brands are not promoted. <span className="text-amber">They are positioned.</span>"
                            </p>
                        </div>
                    </div>
                </section>

                {/* 06 | Collaboration Philosophy */}
                <section className="py-32 md:py-48 px-8 md:px-16">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        {/* <span className="text-amber/60 font-mono text-xs tracking-widest uppercase block">06 | Philosophy</span> */}
                        <h2 className="text-4xl md:text-5xl font-serif italic text-white font-medium">Collaboration Philosophy</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-normal text-xl tracking-wide text-offwhite/70">
                            <div className="space-y-2 group">
                                <span className="block text-white group-hover:text-amber transition-colors duration-300 font-medium">No Banners</span>
                            </div>
                            <div className="space-y-2 group">
                                <span className="block text-white group-hover:text-amber transition-colors duration-300 font-medium">No Booths</span>
                            </div>
                            <div className="space-y-2 group">
                                <span className="block text-white group-hover:text-amber transition-colors duration-300 font-medium">No One-off Campaigns</span>
                            </div>
                        </div>

                        <div className="h-px w-24 bg-amber/30 mx-auto" />

                        <div className="space-y-4 text-2xl md:text-3xl text-offwhite font-serif italic font-medium">
                            <p>Only integrated moments,</p>
                            <p>invitation-based exposure,</p>
                            <p>and story-driven presence.</p>
                        </div>
                    </div>
                </section>

                {/* 07 | Closing */}
                <section className="py-48 px-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-amber/5 via-transparent to-transparent opacity-50 pointer-events-none" />

                    <div className="max-w-4xl mx-auto space-y-8 relative z-10">
                        <h2 className="text-5xl md:text-7xl font-serif italic text-white leading-tight font-medium">
                            Sence 91.<span className="text-amber">Wellhaus</span>
                        </h2>
                        <div className="w-16 h-1 bg-amber mx-auto" />
                        <p className="text-2xl md:text-4xl font-normal text-offwhite/90 leading-relaxed">
                            Where brands don’t advertise — <span className="text-amber italic font-serif font-medium">they belong</span>.
                        </p>
                        <p className="text-sm tracking-[0.3em] uppercase text-offwhite/60 pt-8 font-bold">
                            The epicenter of wellness identity
                        </p>
                    </div>
                </section>

                {/* Footer */}
                <FooterSection className="!bg-black !border-amber/10 [&_p]:!text-offwhite/40 [&_span]:!text-offwhite/40 hover:[&_span]:!text-amber" />
            </div>
        </main>
    );
}
