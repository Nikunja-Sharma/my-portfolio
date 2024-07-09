"use client";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

const Hero = () => {
    const { resolvedTheme } = useTheme();
    console.log(resolvedTheme);
    return (
        <div className="min-h-[60vh] flex flex-col-reverse gap-12 lg:flex-row items-center justify-between text-center sm:text-left py-5">
            <div className="space-y-10">
                <h1 className="text-4xl lg:text-7xl font-bold ">
                    Hey!👋Whats Up?? <br />
                    <span className="underline underline-offset-8 decoration-[#FA7070]">
                        {"I'am Nikunja!"}
                    </span>{" "}
                </h1>
                <p className="md:w-[40rem]  text-lg">
                    {
                        "A passionate web developer hailing from Assam, India, thrives on crafting cutting-edge solutions with Next.js and TypeScript, while delving into the world of Python AI to push boundaries and innovate."
                    }
                </p>
                <div className="inline-block">
                    <Link href={"https://ai.nikunja.online"} >
                        <div className="flex flex-col">
                            <h1 className="text-3xl font-bold hover:text-green-500">
                                Get Started
                            </h1>
                            <div className=" h-2 bg-green-500 rounded-full"></div>
                            <div className=" h-2 bg-indigo-500 rounded-full translate-x-2"></div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
                <div className="flex gap-3 translate-x-8">
                    <div className=" w-32 h-32 rounded-2xl bg-green-500"></div>
                    <div className=" w-32 h-32 rounded-full bg-indigo-500"></div>
                </div>

                <div className="flex gap-3 -translate-x-8">
                    <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
                    <div className=" w-32 h-32 rounded-full bg-green-500"></div>
                </div>
                <div
                    className={`${
                        resolvedTheme === "dark" ? "glow" : "hidden"
                    } absolute top-[40%] right-1/2 -z-10`}
                ></div>
            </div>
        </div>
    );
};

export default Hero;
