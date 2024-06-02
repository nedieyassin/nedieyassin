import Link from "next/link";
import {AlignRight} from "lucide-react";

export function NavigationBar() {
    return (
        <div className="fixed z-50 left-0 top-0 flex items-center w-full h-16 glass">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    <h1 className="font-normal">Nedie Yassin</h1>
                </div>
                <button className="lg:hidden">
                    <AlignRight />
                </button>
                <div className="hidden lg:block px-8">
                    <nav>
                        <ul className="flex items-center gap-6">
                            <li><Link className="hover:text-blue-500 transition-all" href={'/'}>Expertise</Link></li>
                            <li><Link className="hover:text-blue-500 transition-all" href={'/'}>Education</Link></li>
                            <li><Link className="hover:text-blue-500 transition-all" href={'/'}>Experience</Link></li>
                            <li><Link className="hover:text-blue-500 transition-all" href={'/'}>Projects</Link></li>
                            <li><Link className="hover:text-blue-500 transition-all" href={'/'}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}