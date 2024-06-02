'use client'

import Link from "next/link";
import {AlignRight} from "lucide-react";
import {motion, useCycle} from "framer-motion";

const menus = [
    {
        title: 'Expertise',
        href: '/'
    },
    {
        title: 'Education',
        href: '/'
    },
    {
        title: 'Experience',
        href: '/'
    },
    {
        title: 'Projects',
        href: '/'
    },
    {
        title: 'Contact',
        href: '/'
    },

]

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

export function NavigationBar() {
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <div className="fixed z-50 left-0 top-0 flex items-center w-full h-16 glass">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    <h1 className="font-normal">Nedie Yassin</h1>
                </div>
                <div className="lg:hidden">
                    <motion.div animate={isOpen ? "open" : "closed"}
                                className="flex items-center justify-center relative">
                        <button onClick={() => toggleOpen()}>
                            <svg width="23" height="23" viewBox="0 0 23 23">
                                <Path
                                    variants={{
                                        closed: {d: "M 2 2.5 L 20 2.5"},
                                        open: {d: "M 3 16.5 L 17 2.5"}
                                    }}
                                />
                                <Path
                                    d="M 2 9.423 L 20 9.423"
                                    variants={{
                                        closed: {opacity: 1},
                                        open: {opacity: 0}
                                    }}
                                    transition={{duration: 0.1}}
                                />
                                <Path
                                    variants={{
                                        closed: {d: "M 2 16.346 L 20 16.346"},
                                        open: {d: "M 3 2.5 L 17 16.346"}
                                    }}
                                />
                            </svg>
                        </button>
                        <motion.div
                            initial={false}
                            animate={isOpen ? "open" : "closed"}
                            variants={{
                                open: {opacity: 1, y: 0, scale: 1, display: 'block'},
                                closed: {opacity: 0, y: -20, scale: 0.9, display: 'none'},
                            }}
                            transition={{duration: 0.2}}
                            className="absolute top-10 right-0 w-44 glass p-6 border-t-2 border-primary-500 shadow"
                        >
                            <motion.nav
                                variants={{
                                    open: {
                                        transition: {staggerChildren: 0.05, delayChildren: 0.01}
                                    },
                                    closed: {
                                        transition: {staggerChildren: 0.05, staggerDirection: -1}
                                    }
                                }}
                                className="flex flex-col gap-4">
                                {menus.map((menu, index) => (
                                    <motion.div
                                        variants={{
                                            open: {
                                                y: 0,
                                                transition: {y: {stiffness: 1000, velocity: -100}}
                                            },
                                            closed: {
                                                y: 20,
                                                transition: {y: {stiffness: 1000, velocity: -100}}
                                            }
                                        }}
                                    >
                                        <Link
                                            key={index}
                                            href={menu.href}
                                            className="hover:text-blue-500 transition-all"
                                        >
                                            {menu.title}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.nav>
                        </motion.div>
                    </motion.div>
                </div>
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
