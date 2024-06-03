'use client'

import {cn} from "@/lib/utils";
import {DatabaseZap, LaptopMinimal, ServerCog} from "lucide-react";
import {motion} from "framer-motion";
import {useState} from "react";
import Link from "next/link";

export default function ExpertiseSection() {
    const [currentExpertise, setCurrentExpertise] = useState(0)
    const expertise = [
        {
            title: 'Frontend Development',
            description: 'Specializing in front-end development, I meticulously design and build user interfaces that captivate and engage. Leveraging the latest technologies and best practices, I ensure seamless functionality across devices and browsers, delivering intuitive experiences that leave a lasting impression.',
            technologies: ['React', 'Vue', 'Next.js', 'Nuxt3', 'Tailwind CSS', 'Shadcn UI', 'Material UI', 'Vuetify', 'Framer Motion', 'Vite', 'Docker']
        },
        {
            title: 'Backend Development',
            description: 'In back-end development, I architect robust systems that power seamless user experiences. From database management to server-side logic, I ensure the backbone of your application operates efficiently and securely. With a focus on scalability and performance, I craft solutions that evolve with your business needs.',
            technologies: ['Express', 'H3', 'FastAPI', 'Echo', 'Node.js', 'Golang', 'PHP', 'Flask', 'Laravel', 'Docker']
        },
        {
            title: 'Database',
            description: 'In database management, I design and optimize data structures that form the foundation of your application. From relational databases to NoSQL solutions, I implement efficient storage and retrieval mechanisms to ensure data integrity and performance. With a keen eye for scalability and security, I build resilient database architectures that support your application\'s growth and reliability.',
            technologies: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'MySQL', 'Pocketbase', 'SQLite', 'Docker']
        },
    ]

    return (
        <section id="expertise" className="w-full bg-primary-50">
            <div className="container py-16 space-y-10">
                <h1 className="text-5xl text-slate-800">Expertise</h1>
                <div>
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="space-y-2 bg-white p-6 border rounded border-black/90">
                            <h1 className="text-xl font-bold text-slate-800">Website Development </h1>
                            <p>Craft visually stunning and functional websites that elevate your online presence.</p>
                        </div>
                        <div className="space-y-2 bg-white p-6 border rounded border-black/90">
                            <h1 className="text-xl font-bold text-slate-800">Web Application Development </h1>
                            <p>Build dynamic web applications tailored to your business needs for enhanced
                                efficiency.</p>
                        </div>
                        <div className="space-y-2 bg-white p-6 border rounded border-black/90">
                            <h1 className="text-xl font-bold text-slate-800">Custom Web Solutions </h1>
                            <p>Tailored websites and web applications designed to meet your unique requirements and
                                objectives.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid lg:grid-cols-2 lg:gap-10">
                        <div className="lg:py-6 space-y-1">
                            <div className="relative">
                                <button
                                    onClick={() => setCurrentExpertise(0)}
                                    className={cn("relative z-10 w-full border border-transparent  transition-all hover:text-sky-500 cursor-pointer rounded flex items-center gap-6 px-6 py-6", currentExpertise === 0 && "bg-white border-primary-500")}>
                                    <LaptopMinimal className="text-sky-500" strokeWidth={0.9} size={32}/>
                                    <span className="text-xl font-normal">Frontend Development</span>
                                </button>
                                {currentExpertise === 0 &&
                                    <motion.div
                                        className="h-24 w-24 -top-4 z-[0] -left-8  rounded-full bg-sky-100 absolute"
                                        layoutId="underline"/>}
                            </div>
                            <div className="relative">
                                <button
                                    onClick={() => setCurrentExpertise(1)}
                                    className={cn("relative z-10 w-full border border-transparent  transition-all hover:text-orange-500 cursor-pointer rounded flex items-center gap-6 px-6 py-6", currentExpertise === 1 && "bg-white border-primary-500")}>
                                    <ServerCog className="text-orange-500" strokeWidth={0.9} size={32}/>
                                    <span className="text-xl font-normal">Backend Development</span>
                                </button>
                                {currentExpertise === 1 &&
                                    <motion.div
                                        className="h-24 w-24 -top-4 z-[0] -left-8  rounded-full bg-orange-100 absolute"
                                        layoutId="underline"/>}
                            </div>
                            <div className="relative">
                                <button
                                    onClick={() => setCurrentExpertise(2)}
                                    className={cn("relative z-10 w-full border border-transparent  transition-all hover:text-primary-500 cursor-pointer rounded flex items-center gap-6 px-6 py-6", currentExpertise === 2 && "bg-white border-primary-500")}>
                                    <DatabaseZap className="text-primary-500" strokeWidth={0.9} size={32}/>
                                    <span className="text-xl font-normal">Databases</span>
                                </button>
                                {currentExpertise === 2 &&
                                    <motion.div
                                        className="h-24 w-24 -top-4 z-[0] -left-8  rounded-full bg-primary-100 absolute"
                                        layoutId="underline"/>}
                            </div>
                        </div>
                        <div className="py-3 space-y-6">
                            <h1 className="font-normal text-4xl">{expertise[currentExpertise].title}</h1>
                            <p>
                                {expertise[currentExpertise].description}
                            </p>
                            <div>
                                <h1 className="font-bold accent-slate-800">Technologies</h1>
                                <ul className="flex flex-wrap gap-x-3">
                                    {expertise[currentExpertise].technologies.map((technology, index) => (
                                        <li key={index} className="font-normal">{technology}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <h1 className="text-3xl font-normal">Want to work with me?</h1>
                    <p className="text-lg">I'm always open to new opportunities. If you'd like to discuss a project or
                        just want to chat, feel free to get in touch. I'll get back to you as soon as I can.</p>

                    <div>
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
        </section>
    )
}