'use client'

import Link from "next/link";
import {motion, useCycle} from "framer-motion";
import {useOutsideClick} from "@/lib/utils";
import {useEffect} from "react";

const menus = [
    {
        title: 'Expertise',
        href: '#expertise'
    },
    {
        title: 'Education',
        href: '#education'
    },
    {
        title: 'Experience',
        href: '#experience'
    },
    {
        title: 'Projects',
        href: '#projects'
    },
    {
        title: 'Contact',
        href: '#contact'
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


    const ref = useOutsideClick(() => {
        if (isOpen) {
            toggleOpen();
        }
    });

    useEffect(() => {
        if (isOpen) {
            document.body.className += ' overflow-clip lg:overflow-auto';
        } else {
            document.body.className = document.body.className.replaceAll('overflow-clip lg:overflow-auto', '');
        }
    }, [isOpen]);

    return (
        <div className="fixed z-50 left-0 top-0 flex items-center w-full h-16 glass">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="">
                    <h1 className="font-normal">NEDIE YASS<span className="text-primary-500">IN</span></h1>
                </Link>
                <div className="lg:hidden">
                    <motion.div
                        ref={ref}
                        animate={isOpen ? "open" : "closed"}
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
                                {menus.map((menu) => (
                                    <motion.div
                                        key={menu.title}
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
                                            href={menu.href}
                                            onClick={(e) => {
                                                e.preventDefault()
                                                const page = document.getElementById(menu.href.replaceAll('#', ''));
                                                page?.scrollIntoView({behavior: 'smooth', block: 'start'});
                                                toggleOpen()
                                            }}
                                            className="hover:text-primary-500 transition-all"
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
                        <div className="flex gap-3">
                            {menus.map((menu) => (
                                <li key={menu.title} className="list-none">
                                    <Link
                                        href={menu.href}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            const page = document.getElementById(menu.href.replaceAll('#', ''));
                                            page?.scrollIntoView({behavior: 'smooth', block: 'start'});
                                        }}
                                        className="hover:text-primary-500 transition-all font-normal"
                                    >
                                        {menu.title}
                                    </Link>
                                </li>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
