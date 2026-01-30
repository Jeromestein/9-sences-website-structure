import Link from "next/link";
import Image from "next/image";
import VideoBackground from "@/components/VideoBackground";
import AudioControl from "@/components/ui/AudioControl";
import FooterSection from "@/components/FooterSection";

export default function MaisonPage() {
    return (
        <main className="min-h-screen bg-[#F5F2EB] text-stone-800 overflow-x-hidden selection:bg-stone-300 selection:text-stone-900">
            <AudioControl src="/meditation-yoga-relaxing-music-380330.mp3" />
            {/* Navigation / Header */}
            <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-multiply">
                <Link href="/" className="hover:opacity-70 transition-opacity">
                    <Image
                        src="/logo_transparent_light_v3_cropped.png"
                        alt="9Sences Logo"
                        width={120}
                        height={40}
                        className="h-10 w-auto"
                    />
                </Link>
                {/* <div className="text-[10px] tracking-[0.2em] uppercase font-light text-stone-600">
                    Dimension A: The Sanctuary
                </div> */}
            </nav>

            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center p-8 overflow-hidden">
                <VideoBackground src="/Meditative_Water_Ripples_Video.mp4" opacity={0.6} className="grayscale-[20%] contrast-[90%]" />

                <div className="max-w-5xl w-full text-center space-y-12 z-10 pt-20">
                    <h1 className="font-serif text-7xl md:text-9xl font-light italic tracking-tight text-stone-900 opacity-90">
                        SenceMaison
                    </h1>
                    <div className="max-w-xl mx-auto space-y-6">
                        <p className="font-serif text-2xl md:text-3xl text-stone-700 italic font-light leading-relaxed">
                            "Where wellness identity takes form"
                        </p>
                        <div className="w-px h-16 bg-stone-400/50 mx-auto"></div>
                        <p className="text-s font-sans tracking-[0.25em] uppercase text-stone-700 leading-loose">
                            A creative wellness space<br />
                            at the intersection of aesthetics & community
                        </p>
                    </div>
                </div>

                {/* Background Elements: Soft, Diffused */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#E8E6E1] rounded-full blur-[120px] opacity-40 mix-blend-multiply pointer-events-none"></div>
            </section>

            {/* Main Content */}
            <div className="relative z-10">

                {/* Experience - Offset Layout */}
                <section className="w-full py-32 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        {/* Left: Text */}
                        <div className="lg:col-span-5 space-y-16 pt-12">
                            <div className="space-y-6">
                                <span className="block text-[10px] tracking-[0.25em] uppercase text-stone-400">01 — Experience</span>
                                <h2 className="text-5xl md:text-6xl font-serif font-light text-stone-900 leading-[1.1]">
                                    Practice-led <br />
                                    <span className="italic text-stone-500">healing.</span>
                                </h2>
                            </div>

                            <div className="space-y-8 pl-4 border-l border-stone-300">
                                <p className="text-lg text-stone-600 leading-relaxed font-light">
                                    Shaped by music, embodiment, and collaboration.
                                    A physical space designed to purify and reset—a refuge from the noise.
                                </p>
                                <ul className="space-y-4 text-stone-800 text-sm tracking-wide font-medium">
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 rounded-full bg-stone-400"></span>
                                        Music-led healing practices
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 rounded-full bg-stone-400"></span>
                                        Cross-cultural collaborations
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 rounded-full bg-stone-400"></span>
                                        Immersive retreats
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right: Image (Fragmented Narrative) */}
                        <div className="lg:col-span-6 lg:col-start-7 lg:mt-24">
                            <div className="relative aspect-[4/5] overflow-hidden grayscale-[10%]">
                                <Image
                                    src="/abstract-dreamlike-ethereal-portrait-shadow-silhou.jpg"
                                    alt="Abstract ethereal portrait"
                                    fill
                                    className="object-cover transition-transform duration-[2s] hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#F5F2EB]/10 mix-blend-overlay"></div>
                            </div>
                            <p className="mt-4 text-[10px] text-stone-400 uppercase tracking-widest text-right">
                                Fig. A — Presence of Mind
                            </p>
                        </div>
                    </div>
                </section>

                {/* Offerings / Curated Formats */}
                <section className="w-full py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="block text-[10px] tracking-[0.25em] uppercase text-stone-400">02 — Offerings</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-light text-stone-900 italic">Curated Formats</h2>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                        {/* 1. Access Practice */}
                        <div className="space-y-6 group cursor-pointer">
                            <div className="relative aspect-[3/4] bg-stone-200 overflow-hidden">
                                {/* Image Placeholder: Close up of hands or meditation cushion (Intimacy) */}
                                <div className="absolute inset-0 bg-[#F0EFEB] flex items-center justify-center text-stone-300 text-xs uppercase tracking-widest text-center px-4">
                                    {/* [Image: Close-up of hands / texture] */}
                                    <Image src="/timothee-geenens-ZYNg5xkuDts-unsplash.jpg" alt="Abstract ethereal portrait" fill className="object-cover transition-transform duration-[2s] hover:scale-105" />
                                </div>
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                            </div>
                            <div className="text-center space-y-3">
                                <h3 className="text-2xl font-serif font-light text-stone-800">Access Practice</h3>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest text-stone-500">Contribution-based · Supported</p>
                                    <p className="text-sm font-light text-stone-600 leading-relaxed max-w-xs mx-auto">
                                        Guided with presence by Cindy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Global Collaboration */}
                        <div className="space-y-6 group cursor-pointer">
                            <div className="relative aspect-[3/4] bg-stone-200 overflow-hidden">
                                {/* Image Placeholder: Horizon line or abstract connecting lines (Breadth) */}
                                <div className="absolute inset-0 bg-[#E8E6E1] flex items-center justify-center text-stone-300 text-xs uppercase tracking-widest text-center px-4">
                                    {/* [Image: Abstract horizon / lines] */}
                                    <Image src="/a-chosen-soul-yjRE4-gAnkk-unsplash.jpg" alt="Abstract ethereal portrait" fill className="object-cover transition-transform duration-[2s] hover:scale-105" />
                                </div>
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                            </div>
                            <div className="text-center space-y-3">
                                <h3 className="text-2xl font-serif font-light text-stone-800">Global Collaboration</h3>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest text-stone-500">Paid Experience</p>
                                    <p className="text-sm font-light text-stone-600 leading-relaxed max-w-xs mx-auto">
                                        A shared field of practice with global practitioners and cultural lineages.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Event */}
                        <div className="space-y-6 group cursor-pointer">
                            <div className="relative aspect-[3/4] bg-stone-200 overflow-hidden">
                                {/* Image Placeholder: Gathering space with warm light (Community) */}
                                <div className="absolute inset-0 bg-[#F5F2EB] flex items-center justify-center text-stone-300 text-xs uppercase tracking-widest text-center px-4">
                                    {/* [Image: Warm gathering space] */}
                                    <Image src="/hoi-an-and-da-nang-photographer-Nt1xUopfQEU-unsplash.jpg" alt="Abstract ethereal portrait" fill className="object-cover transition-transform duration-[2s] hover:scale-105" />
                                </div>
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                            </div>
                            <div className="text-center space-y-3">
                                <h3 className="text-2xl font-serif font-light text-stone-800">Event</h3>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest text-stone-500">Ticketed</p>
                                    <p className="text-sm font-light text-stone-600 leading-relaxed max-w-xs mx-auto">
                                        Curated in-person moments where practice becomes collective.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row (Adjusted Width) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-16 max-w-4xl mx-auto">
                        {/* 4. Dear Me */}
                        <div className="space-y-6 group cursor-pointer">
                            <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden">
                                {/* Image Placeholder: Abstract reflection / water / journal (Reflection) */}
                                <div className="absolute inset-0 bg-[#EBE9E3] flex items-center justify-center text-stone-300 text-xs uppercase tracking-widest text-center px-4">
                                    {/* [Image: Reflection / Water surface] */}
                                    <Image src="/istockphoto-1299754707-612x612.webp" alt="Abstract ethereal portrait" fill className="object-cover transition-transform duration-[2s] hover:scale-105" />
                                </div>
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                            </div>
                            <div className="text-center space-y-3">
                                <h3 className="text-2xl font-serif font-light text-stone-800">Dear Me</h3>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest text-stone-500">In-Person Workshop</p>
                                    <p className="text-sm font-light text-stone-600 leading-relaxed max-w-xs mx-auto">
                                        An inner dialogue space for reflection, inquiry, and emotional clarity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 5. Retreat */}
                        <div className="space-y-6 group cursor-pointer">
                            <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden">
                                {/* Image Placeholder: Nature landscape / sanctuary (Sanctuary) */}
                                <div className="absolute inset-0 bg-[#F0EFEB] flex items-center justify-center text-stone-300 text-xs uppercase tracking-widest text-center px-4">
                                    {/* [Image: Nature / Wide landscape] */}
                                    <Image src="/artem-zhyzhyn-L0m-ukSCjcg-unsplash.jpg" alt="Abstract ethereal portrait" fill className="object-cover transition-transform duration-[2s] hover:scale-105" />
                                </div>
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                            </div>
                            <div className="text-center space-y-3">
                                <h3 className="text-2xl font-serif font-light text-stone-800">Retreat</h3>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest text-stone-500">Destination & Local</p>
                                    <p className="text-sm font-light text-stone-600 leading-relaxed max-w-xs mx-auto">
                                        Immersive pauses designed to recalibrate rhythm and presence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Retreat & Global - High Whitespace */}
                <section className="w-full py-32 md:py-48 px-8 bg-[#EBE9E3]">
                    <div className="max-w-4xl mx-auto text-center space-y-16">
                        <span className="block text-[10px] tracking-[0.25em] uppercase text-stone-400">02 — Global</span>

                        <h2 className="text-4xl md:text-5xl font-serif font-light text-stone-800 leading-tight">
                            Retreats are not escapes,<br />
                            but <span className="italic font-normal">intentional pauses.</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-3xl mx-auto pt-8">
                            <p className="text-stone-600 font-light leading-loose text-sm md:text-base">
                                Designed to recalibrate rhythm, presence, and inner clarity.
                                From destination-based retreats to traveling collaborations,
                                SenceMaison is designed to move.
                            </p>
                            <p className="text-stone-600 font-light leading-loose text-sm md:text-base">
                                Rather than exporting a fixed format, we adapt practice to cultural context—
                                allowing each experience to feel local, grounded, and authentically resonant.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Collaboration - Clean Grid */}
                <section className="w-full py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-stone-300 pt-12">
                        <div className="md:col-span-4">
                            <h2 className="text-3xl font-serif font-light italic text-stone-900">Collaboration</h2>
                            <p className="mt-4 text-[10px] uppercase tracking-widest text-stone-400">03 — Formats</p>
                        </div>

                        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                            <div className="space-y-6">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-stone-800 border-b border-stone-200 pb-2">Active Formats</h3>
                                <ul className="space-y-4 text-stone-600 font-light text-sm">
                                    <li>In-person workshop collaborations</li>
                                    <li>Music Flow global online collaborations</li>
                                    <li>Brand-led experiential partnerships</li>
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-stone-800 border-b border-stone-200 pb-2">Contextual</h3>
                                <ul className="space-y-4 text-stone-600 font-light text-sm">
                                    <li>Cultural and institutional projects</li>
                                    <li>Hotel wellness and retreat programs</li>
                                    <li className="italic pt-2 text-stone-500">Curated based on intention.</li>
                                </ul>
                            </div>

                            <div className="md:col-span-2 pt-8">
                                <p className="font-serif text-2xl text-stone-700 italic max-w-xl">
                                    "We focus on the inner layer—how people feel, move, and remember."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partner & Sponsor - Updated from Image */}
                <section className="w-full py-24 px-8 bg-stone-100">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                            <div className="space-y-8 order-2 md:order-1">
                                <div className="w-12 h-px bg-stone-400"></div>
                                <h2 className="text-3xl font-serif font-light text-stone-900">
                                    SenceMaison • <br />
                                    <span className="italic text-stone-500">Wellhaus Partner</span>
                                </h2>

                                <div className="space-y-8">
                                    <h3 className="font-sans text-sm tracking-widest uppercase text-stone-800 font-medium border-b border-stone-200 pb-2 inline-block">
                                        Practice × Body × Healing Modalities
                                    </h3>

                                    <ul className="space-y-4 text-stone-600 font-light text-sm leading-relaxed">
                                        <li className="flex gap-3 items-start">
                                            <span className="text-stone-400 mt-1.5 w-1 h-1 rounded-full bg-current shrink-0"></span>
                                            <span>Founders of embodied practices / healing methodologies</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <span className="text-stone-400 mt-1.5 w-1 h-1 rounded-full bg-current shrink-0"></span>
                                            <span>Backgrounds in psychology, neuroscience, or arts-based healing</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <span className="text-stone-400 mt-1.5 w-1 h-1 rounded-full bg-current shrink-0"></span>
                                            <span>Long-term practice–oriented</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <span className="text-stone-400 mt-1.5 w-1 h-1 rounded-full bg-current shrink-0"></span>
                                            <span>Not driven by short-term personal IP monetization</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <span className="text-stone-400 mt-1.5 w-1 h-1 rounded-full bg-current shrink-0"></span>
                                            <span>A healing practice layer designed for repeatable, lived experience</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="order-1 md:order-2 flex justify-center md:justify-end">
                                <div className="relative w-64 h-80 bg-stone-200 flex items-center justify-center">
                                    {/* Placeholder for a logo or abstract shape */}
                                    {/* <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest rotate-90 transform absolute right-4 top-4 origin-top-right">
                                        Partner Profile
                                    </span> */}
                                    <div className="border rounded-full opacity-50">
                                        <Image
                                            src="/pexels-meum-mare-204165854-11825210.jpg"
                                            alt="Abstract ethereal portrait"
                                            width={500}
                                            height={500}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Inquiry & Access - Minimal Call to Action */}
                <section className="w-full py-40 px-8 bg-[#1C1C1C] text-[#E8E6E1] text-center relative overflow-hidden">
                    {/* Grain texture overlay could go here */}
                    <div className="max-w-2xl mx-auto space-y-16 relative z-10">
                        <div className="space-y-6">
                            <h2 className="text-5xl font-serif italic font-light tracking-wide">Inquiry & Access</h2>
                            <p className="text-stone-400 leading-relaxed font-light tracking-wide text-sm uppercase">
                                Private Experiences · Collaborations · Sponsorship
                            </p>
                        </div>

                        <div>
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-transparent border border-stone-600 rounded-full transition-all duration-300 ease-out hover:border-[#F5F2EB] hover:bg-stone-800/50"
                            >
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#F5F2EB] rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                                <span className="relative text-xs tracking-[0.2em] group-hover:text-white transition-colors duration-300">REQUEST ACCESS</span>
                            </Link>
                        </div>
                    </div>
                </section>

            </div>

            {/* Footer */}
            <FooterSection />
        </main>
    );
}
