'use client'

import {useState} from "react";

export default function ProjectsSection() {
    const [showMore, setShowMore] = useState(false)
    const projects = [
        {
            title: 'Pompopompo Deliveries Smart App',
            description: 'Mobile application for managing delivery operations including orders, riders, and real-time tracking.',
            year: 2025,
            url: ''
        },
        {
            title: 'Zodiak 2025 Election Dashboard',
            description: 'Real-time analytics dashboard for monitoring and visualizing national election results.',
            year: 2025,
            url: ''
        },
        {
            title: 'CenteFees Integration',
            description: 'Bank payment integration for automated school fees collection through Centenary Bank Malawi.',
            year: 2025,
            url: ''
        },
        {
            title: 'TEVETA Assessment and Examinations Management System',
            description: 'National web system for managing technical college assessments, grading, and examinations.',
            year: 2025,
            url: ''
        },
        {
            title: 'Easy School Core',
            description: 'Comprehensive school management system with finance, academics, parent portal, and WhatsApp notifications.',
            year: 2025,
            url: ''
        },
        {
            title: 'KwezaCare Clinic Management System',
            description: 'Web management system for patient records, staff management, billing, and reporting for an elderly care clinic.',
            year: 2024,
            url: ''
        },
        {
            title: 'Teachers Management Information System',
            description: 'National system for managing secondary school teacher registration, deployment, and recruitment.',
            year: 2024,
            url: ''
        },
        {
            title: 'ECD Center Registration and Reporting System',
            description: 'National system for registering and reporting Early Childhood Development centers.',
            year: 2023,
            url: ''
        },
        {
            title: 'Higher Education School Management System',
            description: 'University management system for student records, courses, finance, and academic operations.',
            year: 2021,
            url: ''
        },
        {
            title: 'Malawi Tourism Management System',
            description: 'Tourism and heritage site management platform for parks, bookings, and reporting.',
            year: 2020,
            url: ''
        }
    ]


    return (
        <section id="projects" className="w-full bg-primary-50">
            <div className="container py-16 space-y-10">
                <h1 className="text-5xl text-slate-800">Recent Projects</h1>
                <div className="grid gap-12">
                    {
                        projects.filter((item, index) => showMore || index < 3).map((item, index) => (
                            <div key={index} className="space-y-2">
                                <h1 className="font-bold text-xl text-slate-800">
                                    {item.title}
                                </h1>
                                <h2 className="font-normal text-sm">{item.year}</h2>
                                <p className="text-slate-800 text-lg">
                                    {item.description}
                                </p>
                                {item.url && (
                                    <a href={item.url} target="_blank"
                                       className="inline-block font-normal text-primary-900 underline">
                                        Visit project
                                    </a>
                                )}
                            </div>
                        ))
                    }
                    <div>
                        <button onClick={() => setShowMore((v) => !v)}
                                className="border-2 border-primary-500 text-primary-900 hover:bg-primary-100 transition-all rounded px-6 py-2">
                            View {showMore ? 'less' : 'all'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}