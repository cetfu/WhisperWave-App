import type {Metadata} from "next";
import {Inter as FontSans} from "next/font/google"
import "./globals.css";

import {cn} from "@/lib/utils"
import {ThemeProvider} from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: {
        default: "WhisperWave",
        template: "%s | WhisperWave"
    },
    description: "WhisperWave, write your secrets",
    creator: "Furkan Çetinkaya",
    authors: [{name: 'cetfu'}, {name: "Furkan Çetinkaya"}],
    keywords: ['private', 'hidden', 'comments', "something about", "restaurants", "friendships", "voting", "events", "incidents"],
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={cn(
            "min-h-screen bg-card font-sans antialiased",
            fontSans.variable
        )}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Header/>
            <main className={"flex flex-col h-[90vh]"}>
                {children}
            </main>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
