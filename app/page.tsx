'use client'

import Link from "next/link";
import ExpertiseSection from "@/components/expertise-section";
import EducationSection from "@/components/education-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";

export default function Home() {

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
                                <path
                                    fillRule="evenodd" clipRule="evenodd"
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
                                I develop digital
                                experiences, from front-end finesse to back-end brilliance.
                            </h1>
                            <div className="pb-10 lg:pb-0">
                                <Link href={"#contact"}
                                      onClick={(e) => {
                                          e.preventDefault()
                                          const page = document.getElementById('contact');
                                          page?.scrollIntoView({behavior: 'smooth', block: 'start'});
                                      }}
                                      className="block text-center  max-w-full lg:max-w-max w-auto bg-primary-500 text-black px-6 py-3 rounded-lg hover:bg-primary-400 text-lg transition-all">
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
                            <div className="font-normal">Frontend Development</div>
                            <p className="text-sm">React, Tailwind, Typescript and more</p>
                        </div>
                        <div
                            className="absolute bottom-14 lg:bottom-28 left-0  bg-orange-200  px-4 py-2 rounded-md shadow-lg">
                            <div className="font-normal">Backend Development</div>
                            <p className="text-sm">Express, Golang, FastAPI and more</p>
                        </div>
                        <div
                            className="absolute -bottom-10 lg:bottom-10 right-0 lg:right-10  bg-primary-200  px-4 py-2 rounded-md shadow-lg">
                            <div className="font-normal">Databases</div>
                            <p className="text-sm">PostgreSQL, MongoDB, Firebase and more</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*   */}
            <ExpertiseSection/>
            <EducationSection/>
            <ExperienceSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>
    );
}
