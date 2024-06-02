import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import {NavigationBar} from "@/components/navigation-bar";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Nedie Yassin - Full Stack Web Developer",
    description: "Nedie Nedie is a Full Stack Developer proficient in Typescript, React, NextJS, Vue, NuxtJS, Node, Python, Go, Express, PostgreSQL, MySQL, Prisma, TailwindCSS, FastAPI, PHP, Twig, Flutter, Firebase, Git, GitHub, and Docker. Explore his website to see his projects and experience.",
    authors:{
        name: "Nedie Yassin",
        url: "https://nedieyassin.com"
    },
    abstract: "Nedie Nedie is a Full Stack Developer",
    alternates: {
        canonical: "https://nedieyassin.com",
    },
    creator: "Nedie Yassin",
    twitter: {
        title: "Nedie Yassin - Full Stack Web Developer",
        description: "Nedie Nedie is a Full Stack Developer",
        card: "summary",
        creator: "@nedie_yassin",
        images: "https://nedieyassin.com/og.png",
    },
    openGraph: {
        title: "Nedie Yassin - Full Stack Web Developer",
        description: "Nedie Nedie is a Full Stack Developer proficient in Typescript, React, NextJS, Vue, NuxtJS, Node, Python, Go, Express, PostgreSQL, MySQL, Prisma, TailwindCSS, FastAPI, PHP, Twig, Flutter, Firebase, Git, GitHub, and Docker. Explore his website to see his projects and experience.",
        url: "https://nedieyassin.com",
        siteName: "Nedie Yassin - Full Stack Web Developer",
        countryName: "Malawi",
        phoneNumbers: "+265 (0) 998 046 884",
        emails: "yassinnedie9121@gmail.com",
        images: [
            {
                url: "https://nedieyassin.com/og.png",
                width: 512,
                height: 512,
            },
        ],
        locale: "en-US",
        type: "website",

    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="relative">
        <body className={`${poppins.className} font-light`}>
        <NavigationBar/>
        <div>
            {children}
        </div>
        </body>
        </html>
    );
}
