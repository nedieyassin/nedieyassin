'use client'

import {cn} from "@/lib/utils";
import {DatabaseZap, Github, LaptopMinimal, Linkedin, MailCheck, PhoneCall, ServerCog} from "lucide-react";
import {motion} from "framer-motion";
import {useState} from "react";
import Link from "next/link";

export default function ContactSection() {

    return (
        <section id="contact" className="w-full bg-primary-900 text-white">
            <div className="container py-16 space-y-10">
                <div className="space-y-3">
                    <h1 className="text-5xl">Let's get in touch</h1>
                    <p>Feel free to reach out to me if you want to work together.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/**/}
                    <Link href="mailto:yassinnedie9121@gmail.com" target="_blank"
                          className="group flex gap-x-3 border-2 border-primary-300 p-4 rounded-2xl">
                        <div
                            className="bg-white flex items-center justify-center h-14 aspect-square p-3 rounded-md max-w-max text-primary-900">
                            <MailCheck size={26}/>
                        </div>
                        <div>
                            <h1>Email Address</h1>
                            <p className="font-normal group-hover:underline text-lg">yassinnedie9121@gmail.com</p>
                        </div>
                    </Link>
                    {/**/}
                    <Link href="https://github.com/nedieyassin" target="_blank"
                          className="group flex gap-x-3 border-2 border-primary-300 p-4 rounded-2xl">
                        <div
                            className="bg-white flex items-center justify-center h-14 aspect-square p-3 rounded-md max-w-max text-primary-900">
                            <Github size={26}/>
                        </div>
                        <div>
                            <h1>GitHub</h1>
                            <p className="font-normal group-hover:underline text-lg">nedieyassin</p>
                        </div>
                    </Link>
                    {/**/}
                    <Link href="https://www.linkedin.com/in/yassin-nedie" target="_blank"
                          className="group flex gap-x-3 border-2 border-primary-300 p-4 rounded-2xl">
                        <div
                            className="bg-white flex items-center justify-center h-14 aspect-square p-3 rounded-md max-w-max text-primary-900">
                            <Linkedin size={26}/>
                        </div>
                        <div>
                            <h1>LinkedIn</h1>
                            <p className="font-normal group-hover:underline text-lg line-clamp-1">yassin-nedie</p>
                        </div>
                    </Link>
                    {/**/}
                    <Link href="https://wa.me/265998046884" target="_blank"
                          className="group flex gap-x-3 border-2 border-primary-300 p-4 rounded-2xl">
                        <div
                            className="bg-white flex items-center justify-center h-14 aspect-square p-3 rounded-md max-w-max text-primary-900">
                            <PhoneCall size={26}/>
                        </div>
                        <div>
                            <h1>Phone Call and WhatsApp</h1>
                            <p className="font-normal group-hover:underline text-lg">+265 (0) 998 046 884</p>
                        </div>
                    </Link>


                </div>
                <div className="text-center text-sm space-y-2 pt-16 border-t border-primary-300/20">
                    <p>copyright © {new Date().getFullYear()}, Nedie Yassin - Full Stack Developer</p>
                    <p className="text-primary-200">Website created with Next.js, Tailwind and Framer Motion</p>
                </div>
            </div>
        </section>
    )
}