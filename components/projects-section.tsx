'use client'

import {cn} from "@/lib/utils";
import {DatabaseZap, LaptopMinimal, ServerCog} from "lucide-react";
import {motion} from "framer-motion";
import {useState} from "react";

export default function ProjectsSection() {
    const [showMore, setShowMore] = useState(false)
    const projects = [
        {
            title: 'Buy A Car Malawi',
            description: 'Malawian car dealers marketplace for selling and buying cars.',
            year: 2024,
            technologies: ['React', 'Nextjs', 'Tailwind CSS', 'TypeScript', 'Shadcn UI', 'Vite', 'Pocketbase', 'Golang', 'Docker'],
            url: 'https://buyacarmw.com',
        },
        {
            title: 'Techwiz',
            description: 'Quiz app for developers and tech enthusiasts.',
            year: 2024,
            technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Vite', 'Pocketbase', 'Golang', 'Docker'],
            url: 'https://techwiz.up.railway.app'
        },
        {
            title: 'Eazi Tickets',
            description: 'Event management and ticketing web app.',
            year: 2024,
            technologies: ['Vue', 'Nuxt3', 'Tailwind CSS', 'TypeScript', 'NuxtUI', 'Vite', 'Pocketbase', 'Golang', 'Docker'],
            url: 'https://eazitickets.com'
        },
        {
            title: 'Ministry of Education - Teachers Management Information System',
            description: 'A web based system to manage the secondary school teachers which will support the education sector in different ways such as recruitment of professional teachers.',
            year: 2024,
            technologies: ['Twig', 'Bootstrap', 'Guzzle', 'JavaScript'],
            url: '',
            at: 'Agile Systems'
        },
        {
            title: 'Nkhuku App',
            description: 'Poultry farm management app.',
            year: 2024,
            technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Shadcn UI', 'Vite', 'Pocketbase', 'Golang', 'Docker'],
            url: 'https://nkhuku.up.railway.app'
        },
        {
            title: 'Pocket Track',
            description: 'A personal financial tracking web app.',
            year: 2024,
            technologies: ['Vue', 'Nuxt3', 'Tailwind CSS', 'TypeScript', 'NuxtUI', 'Vite', 'H3', 'PostgreSQL', 'Docker'],
            url: 'https://nkhuku.up.railway.app'
        },
        {
            title: 'ECD Center Registration and Reporting System',
            description: 'System for registering and reporting Early Childhood Development Centers for the Malawi Ministry of Gender.',
            year: 2023,
            technologies: ['Twig', 'PHP', 'Bootstrap', 'Guzzle', 'JavaScript'],
            url: '',
            at: 'Agile Systems'
        },
        {
            title: 'Malawi Assemblies of God University - Payroll System',
            description: 'A system for automating and managing the process of paying employees in an organisation.',
            year: 2023,
            technologies: ['Twig', 'PHP', 'Bootstrap', 'Guzzle', 'JavaScript'],
            url: '',
            at: 'Agile Systems'
        },
        {
            title: 'Malawi Assemblies of God University - Application Payment Gateway',
            description: 'A conventional payment gateway for student applications and school fees at Malawi Assemblies of God University, facilitated by the standard bank.',
            year: 2023,
            technologies: ['Twig', 'PHP', 'Bootstrap', 'Guzzle', 'JavaScript'],
            url: '',
            at: 'Agile Systems'
        },
        {
            title: 'Malawi Assemblies of God University - Strategic Management System',
            description: 'A web-based system is used to manage University strategies.',
            year: 2022,
            technologies: ['Twig', 'PHP', 'Bootstrap', 'Guzzle', 'JavaScript'],
            url: '',
            at: 'Agile Systems'
        },
        {
            title: 'Ministry of Gender - Programme Management System',
            description: 'A web-based system is used to manage ministry of gender programmes.',
            year: 2022,
            technologies: ['Twig', 'PHP', 'Bootstrap', 'Guzzle', 'JavaScript'],
            url: '',
            at: 'Agile Systems'
        },
        {
            title: 'Malawi Assemblies of God University - Campus Management System',
            description: 'A web-based solution which covers all aspects of the University from conducting, monitoring, and analyzing complex activities in all its campuses.',
            year: 2022,
            technologies: ['Twig', 'PHP', 'Bootstrap', 'Guzzle', 'JavaScript'],
            url: '',
            at: 'Agile Systems'
        },
        {
            title: 'Eduq Education System',
            description: 'Educational system for questions and answers and study notes.',
            year: 2021,
            technologies: ['Flutter', 'Dart', 'Twig', 'PHP', 'Bootstrap', 'Guzzle', 'JavaScript'],
            url: ''
        },
        {
            title: 'Malawi Tourism Management System',
            description: 'Malawi Tourism Management system for various national parks and heritage sites.',
            year: 2020,
            technologies: ['Flutter', 'Dart', 'Twig', 'PHP', 'Bootstrap', 'Guzzle', 'JavaScript'],
            url: '',
            at: 'Agile Systems'
        },
    ]

    return (
        <section id="projects" className="w-full bg-primary-50">
            <div className="container py-16 space-y-10">
                <h1 className="text-5xl text-slate-800">Projects</h1>
                <div className="grid gap-12">
                    {
                        projects.filter((item, index) => showMore || index < 5). map((item, index) => (
                            <div key={index} className="space-y-2">
                                <h1 className="font-bold text-xl text-slate-800">
                                    {item.title}
                                </h1>
                                <h2 className="font-normal text-sm">{item.year} { item.at ? `- at ${item.at}` : '' }</h2>
                                <p className="text-slate-800 text-lg">
                                    {item.description}
                                </p>
                                <ul className="flex flex-wrap gap-x-3">
                                    {item.technologies.map((technology, index) => (
                                        <li key={index} className="font-normal text-sm ">{technology}</li>
                                    ))}
                                </ul>
                                {item.url && (
                                    <a href={item.url} target="_blank" className="inline-block font-normal text-primary-900 underline">
                                        Visit project
                                    </a>
                                )}
                            </div>
                        ))
                    }
                    <div>
                        <button onClick={() => setShowMore((v) => !v)}
                                className="border-2 border-primary-500 text-primary-500 rounded px-6 py-2">
                            View {showMore ? 'less' : 'all'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}