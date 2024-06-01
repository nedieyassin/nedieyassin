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
    description: "Nedie Yassin - Full Stack Web Developer",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${poppins.className} font-light`}>
        <NavigationBar/>
        <div>
            {children}
        </div>
        </body>
        </html>
    );
}
