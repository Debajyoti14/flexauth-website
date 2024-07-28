"use client";

import React, { useRef } from 'react'
import { EvervaultCard, Icon } from './ui/evervault-card'
import { motion, useInView } from 'framer-motion'

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 50 }}
            transition={{ duration: 1 }}
            className='flex justify-between mb-40 items-center flex-col-reverse lg:flex-row mx-auto'>
            <div className='flex flex-col text-gray-300 lg:pr-20 text-center lg:text-left items-center lg:items-start mt-10 lg:mt-0'>
                <h2 className='text-3xl font-semibold'>Secure and Encryption</h2>
                <p className='mt-8 opacity-80'>Data protection is one of the main things for a auth server and we have taken that seriously. Here is a brief on how the data gets encrypted and stored in the database.</p>
                <p className='mt-6 opacity-80'>Password protection is another core functionality for an auth server and we have taken that seriously. Here is a brief on how the password gets salted, hashed, encrypted, and stored in the database.</p>
                <button className="bg-slate-800 w-fit mt-8 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                        <a href='https://github.com/Rajdip019/flexauth/blob/main/docs/backend/user-data-protection.md' target='_blank'>
                            Know more
                        </a>
                        <svg
                            fill="none"
                            height="16"
                            viewBox="0 0 24 24"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.75 8.75L14.25 12L10.75 15.25"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
            </div>
            <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[22rem] lg:h-[25rem]">
                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                <EvervaultCard text="Secure" />
            </div>
        </motion.div>
    )
}

export default About