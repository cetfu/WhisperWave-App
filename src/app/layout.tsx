import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});
export const runtime = 'edge'

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
        <body className={inter.className}>{children}</body>
        </html>
    );
}
