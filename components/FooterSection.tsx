"use client"
import Link from "next/link";

interface FooterSectionProps {
    className?: string;
}

export default function FooterSection({ className = "" }: FooterSectionProps) {
    return (
        <footer className={`w-full py-8 border-t border-border bg-background text-foreground ${className}`}>
            <div className="px-8 md:px-12 lg:px-16 max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-foreground/60 uppercase tracking-widest gap-4">
                    <p>© {new Date().getFullYear()} 9Sences. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/wellhaus/partner" className="cursor-pointer hover:text-foreground transition-colors">
                            Partners
                        </Link>
                        <a href="mailto:9sences@gmail.com" className="cursor-pointer hover:text-foreground transition-colors">
                            9sences@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
