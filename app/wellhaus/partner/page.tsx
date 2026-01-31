import Link from "next/link";
import Image from "next/image";
import VideoBackground from "@/components/VideoBackground";
// import AudioControl from "@/components/ui/AudioControl"; // Optional/If needed
import FooterSection from "@/components/FooterSection";
import ThemeBodyClass from "@/components/ThemeBodyClass";

export default function WellhausPartnerPage() {
    return (
        <main
            // Force dark mode CSS variables to ensure glassmorphism works correctly on this dark page
            className="min-h-screen bg-void text-offwhite selection:bg-amber selection:text-void overflow-x-hidden font-sans"
            style={{
                "--readable-panel-bg": "rgba(6, 6, 6, 0.68)",
                "--readable-panel-border": "rgba(255, 255, 255, 0.08)",
                "--readable-panel-shadow": "rgba(0, 0, 0, 0.45)",
                "--readable-panel-grad": "linear-gradient(180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0))",
            } as React.CSSProperties}
        >
            <ThemeBodyClass theme="dark" />
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
                {/* Optional: Add a 'Back to Wellhaus' link or similar if desired, sticking to minimalist for now */}
            </nav>

            {/* Hero Section */}
            <section className="relative w-full min-h-[80vh] flex items-center justify-center p-8 overflow-hidden">
                <VideoBackground src="/Abstract_Bioluminescent_Particles_Video.mp4" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/20 to-void z-10" />

                <div className="max-w-5xl w-full text-center space-y-8 z-20 relative pt-20">
                    <div className="space-y-2">
                        <span className="block text-sm md:text-base font-bold tracking-[0.3em] uppercase text-amber/90">
                            Wellhaus Partner
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl italic leading-none text-white tracking-tight">
                            Co-Creation Invitation
                        </h1>
                    </div>


                    {/* Desktop Layout */}
                    <p className="hidden md:block font-sans text-xl md:text-2xl text-offwhite/90 max-w-3xl mx-auto leading-relaxed">
                        Sence 91.Wellhaus <span className="text-amber mx-2">×</span> Dream Hunter <span className="text-amber mx-2">×</span> SenceMaison
                    </p>

                    {/* Mobile Layout */}
                    <div className="md:hidden font-sans text-xl text-offwhite/90 max-w-3xl mx-auto leading-relaxed flex flex-col items-center justify-center gap-1">
                        <span className="whitespace-nowrap">
                            Dream Hunter <span className="text-amber mx-2">×</span> SenceMaison
                        </span>
                        <span className="whitespace-nowrap">
                            Sence 91.Wellhaus
                        </span>
                    </div>
                    <p className="font-serif italic text-lg md:text-xl text-offwhite/70 max-w-2xl mx-auto">
                        A long-term co-creation system grounded in real experience—<br />
                        spanning cultural context, dream-based narrative, and practice-led healing.
                    </p>
                </div>
            </section>

            {/* Main Content Container */}
            <div className="relative w-full bg-void z-20 overflow-hidden">
                {/* Ambient Background Glows */}
                <div className="absolute top-[10%] left-[-20%] w-[900px] h-[900px] bg-amber/10 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen" />
                <div className="absolute bottom-[20%] right-[-10%] w-[800px] h-[800px] bg-amber/5 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen" />

                {/* I. Overall Structure */}
                <section className="relative z-10 py-24 px-8 md:px-16">
                    <div className="max-w-5xl mx-auto">
                        {/* <span className="text-amber/60 font-mono text-xs tracking-widest uppercase block mb-6">01 | Structure</span> */}
                        <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-16 text-center">
                            Who We Are & <span className="text-amber">What We Are Building</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Pillar 1 */}
                            <div className="readable-panel group hover:border-amber/30 transition-colors duration-500">
                                <Link href="/wellhaus" className="block w-full h-full">
                                    <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-amber transition-colors">Sence 91. <span className="text-amber">Wellhaus</span></h3>
                                    <div className="h-px w-12 bg-white/20 mb-4"></div>
                                    <p className="text-offwhite/80 leading-relaxed">
                                        A curated access and cultural context system.
                                        <br />
                                        <span className="text-sm uppercase tracking-wider opacity-60 mt-2 block">(Curated Access & Cultural Context)</span>
                                    </p>
                                </Link>
                            </div>

                            {/* Pillar 2 */}
                            <div className="readable-panel group hover:border-amber/30 transition-colors duration-500">
                                <Link href="/dream-hunter" className="block w-full h-full">
                                    <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-amber transition-colors">Dream Hunter</h3>
                                    <div className="h-px w-12 bg-white/20 mb-4"></div>
                                    <p className="text-offwhite/80 leading-relaxed">
                                        A dream-based narrative and artistic IP system (Independent Platform).
                                        <br />
                                        <span className="text-sm uppercase tracking-wider opacity-60 mt-2 block">(Narrative & Cultural IP)</span>
                                    </p>
                                </Link>
                            </div>

                            {/* Pillar 3 */}
                            <div className="readable-panel group hover:border-amber/30 transition-colors duration-500">
                                <Link href="/maison" className="block w-full h-full">
                                    <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-amber transition-colors">SenceMaison</h3>
                                    <div className="h-px w-12 bg-white/20 mb-4"></div>
                                    <p className="text-offwhite/80 leading-relaxed">
                                        A practice-based healing and embodied experience system.
                                        <br />
                                        <span className="text-sm uppercase tracking-wider opacity-60 mt-2 block">(Practice-based Healing)</span>
                                    </p>
                                </Link>
                            </div>
                        </div>

                        <div className="mt-16 text-center max-w-3xl mx-auto">
                            <p className="text-xl text-offwhite/90 italic font-serif">
                                "All collaborations unfold through the synergy of these three systems. Roles, rights, and responsibilities remain clearly defined—with no overlap or structural ambiguity."
                            </p>
                        </div>
                    </div>
                </section>

                {/* II. What Is a Wellhaus Partner? */}
                <section className="relative z-10 py-24 px-8 md:px-16 bg-white/5 border-y border-white/5">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-8">
                                What Is a <br /><span className="text-amber">Wellhaus Partner?</span>
                            </h2>
                            <div className="space-y-6 text-lg text-offwhite/80 leading-relaxed">
                                <p>
                                    A Wellhaus Partner is a long-term co-creation collaborator who enters the Sence 91.Wellhaus cultural field through professional expertise, technological systems, or a distinctive, non-generic category.
                                </p>
                                <p>
                                    Partners co-develop specific modules or projects together with Dream Hunter and/or SenceMaison.
                                </p>
                                <p className="text-xl font-medium text-white">
                                    This is not one-time sponsorship.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="readable-panel p-12 text-center border-amber/20 bg-gradient-to-br from-amber/10 to-transparent">
                                <p className="font-serif italic text-3xl md:text-4xl text-white leading-tight">
                                    Project-based <br />
                                    <span className="text-amber">×</span><br />
                                    Modular <br />
                                    <span className="text-amber">×</span><br />
                                    Reviewable
                                </p>
                                <p className="mt-6 text-sm uppercase tracking-[0.2em] text-offwhite/60">Long-term co-creation relationship</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* III. Who We Are Looking For */}
                <section className="relative z-10 py-24 px-8 md:px-16">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-16 text-center">
                            Who We Are <span className="text-amber">Looking For</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Wellhaus Criteria */}
                            <div className="border border-white/10 hover:border-amber/30 transition-all duration-300 group">
                                <Link href="/wellhaus" className="block w-full h-full p-8 space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-serif mb-2 group-hover:text-amber transition-colors">Sence 91. <span className="text-amber">Wellhaus</span></h3>
                                        <p className="text-xs uppercase tracking-widest text-offwhite/50">Technology × Systems × Cultural Infrastructure</p>
                                    </div>
                                    <ul className="space-y-4 text-offwhite/80 leading-relaxed">
                                        <li className="flex items-start gap-3"><span className="text-amber mt-1">✦</span>Sleep and nervous system regulation</li>
                                        <li className="flex items-start gap-3"><span className="text-amber mt-1">✦</span>AI × mental/psychological states / mind-body data</li>
                                        <li className="flex items-start gap-3"><span className="text-amber mt-1">✦</span>Sound, frequency, and immersive experience technologies</li>
                                        <li className="flex items-start gap-3"><span className="text-amber mt-1">✦</span>Experiential systems</li>
                                    </ul>
                                </Link>
                            </div>

                            {/* Dream Hunter Criteria */}
                            <div className="border border-white/10 hover:border-amber/30 transition-all duration-300 group">
                                <Link href="/dream-hunter" className="block w-full h-full p-8 space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-serif mb-2 group-hover:text-amber transition-colors">Dream Hunter</h3>
                                        <p className="text-xs uppercase tracking-widest text-offwhite/50">Art × Narrative × Consciousness Exploration</p>
                                    </div>
                                    <ul className="space-y-4 text-offwhite/80 leading-relaxed">
                                        <li className="flex items-start gap-3"><span className="text-amber mt-1">✦</span>Immersive installations / performance or behavioral art</li>
                                        <li className="flex items-start gap-3"><span className="text-amber mt-1">✦</span>Archetypal dream narratives</li>
                                        <li className="flex items-start gap-3"><span className="text-amber mt-1">✦</span>Cross-disciplinary creation at the intersection of art, technology, and healing</li>
                                        <li className="flex items-start gap-3"><span className="text-amber mt-1">✦</span>Dreams and cultural memory</li>
                                    </ul>
                                </Link>
                            </div>

                            {/* SenceMaison Criteria */}
                            <div className="border border-white/10 hover:border-amber/30 transition-all duration-300 group">
                                <Link href="/maison" className="block w-full h-full p-8 space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-serif mb-2 group-hover:text-amber transition-colors">SenceMaison</h3>
                                        <p className="text-xs uppercase tracking-widest text-offwhite/50">Practice × Body × Healing Methodologies</p>
                                    </div>
                                    <ul className="space-y-4 text-offwhite/80 leading-relaxed">
                                        <li className="flex items-start gap-3"><span className="text-amber mt-1">✦</span>Founders of body-based or healing practices</li>
                                        <li className="flex items-start gap-3"><span className="text-amber mt-1">✦</span>Backgrounds in psychology, neuroscience, or expressive arts therapy</li>
                                        <li className="flex items-start gap-3"><span className="text-amber mt-1">✦</span>Practice-led, long-term orientation (not personal-IP-driven monetization)</li>
                                        <li className="flex items-start gap-3"><span className="text-amber mt-1">✦</span>Repeatable, embodied healing practices</li>
                                    </ul>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* IV. What We Offer */}
                <section className="relative z-10 py-24 px-8 md:px-16 bg-neutral-900/50 border-t border-amber/10">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
                        <div className="lg:w-1/3 flex-shrink-0">
                            <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-8">
                                What We <span className="text-amber">Offer</span>
                            </h2>
                            <p className="text-offwhite/70 text-lg leading-relaxed mb-8">
                                Integrated Value Across Three Platforms. We are collectively writing a long-form chapter on consciousness, healing, and culture. Only resonant brands enter.
                            </p>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="readable-panel h-full">
                                <h3 className="text-xl font-serif text-white mb-6">Platform Value</h3>
                                <ul className="space-y-4 text-offwhite/80">
                                    <li className="border-b border-white/5 pb-3">
                                        <strong className="block text-amber/90 font-normal mb-1">Wellhaus</strong>
                                        <span className="text-sm">Invitation-only, curator-level cultural and social environments</span>
                                    </li>
                                    <li className="border-b border-white/5 pb-3">
                                        <strong className="block text-amber/90 font-normal mb-1">Dream Hunter</strong>
                                        <span className="text-sm">A long-term dream narrative IP bridging virtual and physical cultural forms</span>
                                    </li>
                                    <li>
                                        <strong className="block text-amber/90 font-normal mb-1">SenceMaison</strong>
                                        <span className="text-sm">A sustainable, practice-driven platform for embodied healing experiences</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="readable-panel h-full">
                                <h3 className="text-xl font-serif text-white mb-6">Ecosystem Benefits</h3>
                                <ul className="space-y-4 text-offwhite/80">
                                    <li className="flex gap-4 items-start">
                                        <span className="text-amber mt-1">✦</span>
                                        <span>Access to a high-quality, culturally aligned audience</span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="text-amber mt-1">✦</span>
                                        <span>Module-level / project-based commercial co-creation and revenue sharing</span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="text-amber mt-1">✦</span>
                                        <span>An ecosystem that respects professionalism, aesthetics, and long-term integrity</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing / Inquiry */}
                <section id="application" className="relative z-10 py-32 px-8 text-center">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-tight">
                            Application / <br /> <span className="text-amber">Collaboration Inquiry</span>
                        </h2>

                        <div className="readable-panel max-w-xl mx-auto text-left space-y-6 p-8">
                            <p className="text-offwhite/60 uppercase tracking-widest text-xs text-center border-b border-white/10 pb-4 mb-4">Please briefly introduce</p>
                            <ul className="space-y-4 text-lg text-offwhite/90">
                                <li className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0"></span>
                                    Your field and expertise
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0"></span>
                                    Your capabilities or systems
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0"></span>
                                    The direction you wish to co-create within this ecosystem
                                </li>
                            </ul>

                            <div className="pt-8 text-center">
                                <a
                                    href="mailto:9sences@gmail.com"
                                    className="inline-block px-10 py-4 border border-amber/60 text-amber text-sm font-bold uppercase tracking-[0.25em] hover:bg-amber hover:text-void transition-all duration-700 backdrop-blur-sm"
                                >
                                    Email Us
                                </a>
                            </div>
                        </div>

                    </div>
                </section>

                <FooterSection />
            </div>
        </main>
    );
}
