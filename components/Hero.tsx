import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
    return (
        <div className="w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden h-screen">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 flex flex-col items-center">
                <h1
                    className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-16 mb-5"
                >
                    Flexauth fast and flexible <br /> authentication system
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-xl text-center mx-auto">
                    Flexauth is a flexible, blazingly fast 🦀, and secure auth system that
                    you can use for your project/company* . Need to add a specific feature
                    as you need? Change the code as you like and deploy it on your
                    servers. Here is the most flexible auth system for all your needs.
                </p>
                <a href="https://github.com/Rajdip019/flexauth" target="_blank">
                    <button className="inline-flex h-12 mt-8 w-fit animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Checkout on Github <FiArrowUpRight size={20} className="ml-1" />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Hero;
