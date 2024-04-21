import ThemeSwitch from "@/components/themes/ThemeSwitcher";
import Image from "next/image";
import NavBar from "./_components/NavBar";
import Hero from "./_components/Hero";

export default function Home() {
    return (
        <div className="min-h-screen px-10 lg:p-7 md:p-6 sm:p-10 overflow-hidden dark:bg-black bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.05] ">
            <nav className="max-w-7xl mx-auto ">
                <NavBar />
                <Hero />
            </nav>
        </div>
    );
}
