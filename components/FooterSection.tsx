"use client"
import Link from "next/link";

interface FooterSectionProps {
    className?: string;
}

export default function FooterSection({ className = "" }: FooterSectionProps) {
    return (
        <footer className={`w-full py-12 border-t border-amber/20 bg-background text-foreground ${className}`}>
            <div className="px-8 md:px-12 lg:px-16 max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium uppercase tracking-widest gap-6">
                    <p className="text-foreground/60">© {new Date().getFullYear()} 9Sences. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/wellhaus/partner" className="relative text-amber after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-amber after:transition-all after:duration-300 hover:after:w-full">
                            Partners
                        </Link>
                        <a href="mailto:9sences@gmail.com" className="relative text-amber after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-amber after:transition-all after:duration-300 hover:after:w-full">
                            9sences@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
