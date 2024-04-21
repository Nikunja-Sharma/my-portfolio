import ThemeSwitch from "@/components/themes/ThemeSwitcher";
import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const NavBar = () => {
    const socials = [
        {
            link: "https://www.linkedin.com/in/nikunja-sarma",
            label: "Linkedin",
            icon: SiLinkedin,
        },
        {
            link: "https://github.com/Nikunja-Sharma",
            label: "Github",
            icon: SiGithub,
        },
        {
            link: "https://twitter.com/nikunja__",
            label: "X",
            icon: SiX,
        },
    ];
    return (
        <div className="text-black dark:text-white py-10 flex justify-between items-center" >
            <h1 className="text-2xl font-bold underline underline-offset-8 decoration-[#FA7070] -rotate-2">
                <Link href={"/"}>{"Nikunja Sarma 🧑‍💻"}</Link>
            </h1>
            <div className="flex items-center gap-5 ">
                {socials.map((social, index) => {
                    const Icons = social.icon;
                    return (
                        <Link
                            href={social.link}
                            key={index}
                            aria-label={social.label}
                        >
                            <Icons className="w-5 h-5 hover:scale-125" />
                        </Link>
                    );
                })}
                <ThemeSwitch/>
            </div>
        </div>
    );
};

export default NavBar;
