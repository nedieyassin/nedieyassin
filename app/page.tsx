'use client'

import Link from "next/link";
import {DatabaseZap, LaptopMinimal, ServerCog} from "lucide-react";
import {useState} from "react";
import {cn} from "@/lib/utils";
import {motion} from "framer-motion";

export default function Home() {
    const [currentExpertise, setCurrentExpertise] = useState(0)
    const expertise = [
        {
            title: 'Front-end Development',
            description: 'Specializing in front-end development, I meticulously design and build user interfaces that captivate and engage. Leveraging the latest technologies and best practices, I ensure seamless functionality across devices and browsers, delivering intuitive experiences that leave a lasting impression.'
        },
        {
            title: 'Back-end Development',
            description: 'In back-end development, I architect robust systems that power seamless user experiences. From database management to server-side logic, I ensure the backbone of your application operates efficiently and securely. With a focus on scalability and performance, I craft solutions that evolve with your business needs.'
        },
        {
            title: 'Database',
            description: 'In database management, I design and optimize data structures that form the foundation of your application. From relational databases to NoSQL solutions, I implement efficient storage and retrieval mechanisms to ensure data integrity and performance. With a keen eye for scalability and security, I build resilient database architectures that support your application\'s growth and reliability.'
        },
    ]


    return (
        <main className="pt-16 ">
            {/*   */}
            <div className="container py-16">
                <div className="grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-1 relative">
                        <svg className="h-20 absolute lg:-left-10 -top-10 text-primary-200 z-[-1]" viewBox="0 0 200 200"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1113_5123)">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M115.295 1.2998L153.528 46.6258L162.446 130.383L94.9624 201.3L16.4463 130.15L55.9808 29.5573L115.295 1.2998ZM59.4094 37.2798L90.9446 70.5936L58.6944 117.37L24.8947 125.1L59.4094 37.2798ZM26.3158 130.963L86.2524 185.277L58.7638 123.543L26.3158 130.963ZM65.3463 123.535L95.7255 191.761L152.845 131.736L65.3463 123.535ZM155.477 121.723L148.068 52.1487L100.376 71.3063L155.477 121.723ZM95.5829 66.7325L145.647 46.6222L113.694 8.74155L63.3789 32.7121L95.5829 66.7325ZM95.323 74.8483L150.648 125.47L65.8982 117.527L95.323 74.8483Z"
                                      fill="currentColor"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1113_5123">
                                    <rect width="200" height="200" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <div className="space-y-6 lg:space-y-16">
                            <h1 className="font-bold text-3xl text-slate-800 leading-relaxed">
                                Crafting seamless digital
                                experiences, from front-end finesse to back-end brilliance.
                            </h1>
                            <div className="pb-10 lg:pb-0">
                                <Link href={"/"}
                                      className="block text-center  max-w-full lg:max-w-max w-auto bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 text-lg">
                                    Let's get in touch
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 flex px-10 justify-center relative pb-20 lg:pb-0">
                        <svg className="lg:h-96 w-full lg:w-auto" viewBox="0 0 200 200" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_119_275)">
                                <path
                                    d="M127.14 200C99.9942 200 99.9943 167.423 72.8487 167.423C41.6048 167.423 0 158.386 0 127.133C0 99.9885 32.5678 99.9885 32.5678 72.8445C32.5678 41.6139 41.6048 0 72.8602 0C100.006 0 100.006 32.5774 127.151 32.5774C158.384 32.5774 200 41.6139 200 72.8675C200 100.012 167.421 100.012 167.421 127.156C167.409 158.444 158.384 200 127.14 200Z"
                                    fill="url(#hero-image)"/>
                            </g>
                            <defs>
                                <pattern id="hero-image" patternContentUnits="objectBoundingBox" height="100%"
                                         width="100%">
                                    <image href="nedie-yassin.jpeg" x="0" y="0" height="1" width="1"
                                           preserveAspectRatio="none"/>
                                </pattern>
                                <clipPath id="clip0_119_275">
                                    <rect width="200" height="200" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div
                            className="absolute -top-16 lg:-top-10 right-0 lg:right-10  bg-sky-200  px-4 py-2 rounded-md shadow-lg">
                            <div className="font-normal">Front-end Development</div>
                            <p className="text-sm">React, Tailwind, Typescript and more</p>
                        </div>
                        <div
                            className="absolute bottom-6 lg:bottom-28 left-0  bg-orange-200  px-4 py-2 rounded-md shadow-lg">
                            <div className="font-normal">Back-end Development</div>
                            <p className="text-sm">Express, Golang, FastAPI and more</p>
                        </div>
                        <div
                            className="absolute -bottom-10 lg:bottom-10 right-0 lg:right-10  bg-red-200  px-4 py-2 rounded-md shadow-lg">
                            <div className="font-normal">Databases</div>
                            <p className="text-sm">PostgreSQL, MongoDB, Firebase and more</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*   */}
            <div className="w-full bg-primary-50">
                <div className="container py-16">
                    <h1 className="text-5xl text-slate-800">Expertise</h1>
                    <div className="grid lg:grid-cols-2 lg:gap-10">
                        <div className="py-6 space-y-1">
                            <div className="relative">
                                <button
                                    onClick={() => setCurrentExpertise(0)}
                                    className={cn("relative z-10 w-full border border-transparent  transition-all hover:text-sky-500 cursor-pointer rounded flex items-center gap-6 px-6 py-6", currentExpertise === 0 && "bg-white border-primary-500")}>
                                    <LaptopMinimal className="text-sky-500" strokeWidth={0.9} size={32}/>
                                    <span className="text-xl font-normal">Front-end Development</span>
                                </button>
                                {currentExpertise === 0 &&
                                    <motion.div className="h-24 w-24 -top-4 z-[0] -left-8  rounded-full bg-sky-100 absolute"
                                                layoutId="underline"/>}
                            </div>
                            <div className="relative">
                                <button
                                    onClick={() => setCurrentExpertise(1)}
                                    className={cn("relative z-10 w-full border border-transparent  transition-all hover:text-orange-500 cursor-pointer rounded flex items-center gap-6 px-6 py-6", currentExpertise === 1 && "bg-white border-primary-500")}>
                                    <ServerCog className="text-orange-500" strokeWidth={0.9} size={32}/>
                                    <span className="text-xl font-normal">Back-end Development</span>
                                </button>
                                {currentExpertise === 1 &&
                                    <motion.div
                                        className="h-24 w-24 -top-4 z-[0] -left-8  rounded-full bg-orange-100 absolute"
                                        layoutId="underline"/>}
                            </div>
                            <div className="relative">
                                <button
                                    onClick={() => setCurrentExpertise(2)}
                                    className={cn("relative z-10 w-full border border-transparent  transition-all hover:text-red-500 cursor-pointer rounded flex items-center gap-6 px-6 py-6", currentExpertise === 2 && "bg-white border-primary-500")}>
                                    <DatabaseZap className="text-red-500" strokeWidth={0.9} size={32}/>
                                    <span className="text-xl font-normal">Databases</span>
                                </button>
                                {currentExpertise === 2 &&
                                    <motion.div
                                        className="h-24 w-24 -top-4 z-[0] -left-8  rounded-full bg-red-100 absolute"
                                        layoutId="underline"/>}
                            </div>
                        </div>
                        <div className="py-3 space-y-6">
                            <h1 className="font-normal text-4xl">{expertise[currentExpertise].title}</h1>
                            <p>
                                {expertise[currentExpertise].description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        {/*    */}
            <div className="h-screen">

            </div>
        </main>
    );
}
