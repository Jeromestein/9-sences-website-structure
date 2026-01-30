"use client"

interface FooterSectionProps {
    className?: string;
}

export default function FooterSection({ className = "" }: FooterSectionProps) {
    return (
        <footer className={`w-full py-8 border-t border-foreground/10 bg-background ${className}`}>
            <div className="px-8 md:px-12 lg:px-16 max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground uppercase tracking-widest gap-4">
                    <p>© {new Date().getFullYear()} 9Sences. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="cursor-pointer hover:text-foreground transition-colors">Privacy</span>
                        <span className="cursor-pointer hover:text-foreground transition-colors">Contact</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
