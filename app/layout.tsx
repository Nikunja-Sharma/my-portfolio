import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "@/components/themes/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--space-grotesk",
});

export const metadata: Metadata = {
    title: "Hey there👋 I'am Nikunja",
    description: "Loved To share some info! through my amazing portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />

            <body className={`${spaceGrotesk.className} `}>
                <Providers>
                    <div className="dark:bg-[#1b1b31] bg-[#dedeed] w-[100vw]">
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    );
}
