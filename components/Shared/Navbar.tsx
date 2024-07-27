"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='absolute mx-auto w-full z-50 mt-5 text-gray-300'>
            <div className='flex flex-col md:flex-row justify-between items-center py-2 sticky top-5' >
                <div className=' flex items-center gap-2'>
                    <img src="/logo_tr_w.png" alt="" className='w-10' />
                    <h1 className=' text-2xl font-semibold'>Flexauth </h1>
                </div>
                <div className=' mt-3 md:mt-0'>
                    <ul className='flex items-center gap-6'>
                        <li className=' hover:scale-105 transition-all'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className=' hover:scale-105 transition-all'>
                            <Link href="/contact">Use Cases</Link>
                        </li>
                        <li className=' hover:scale-105 transition-all'>
                            <Link href="/contact">Features</Link>
                        </li>
                        <li className=' hover:scale-105 transition-all'>
                            <Link href="/contact">Team</Link>
                        </li>
                        <li className=' hover:scale-105 transition-all hidden md:block'>
                            <a target="_blank" href="https://github.com/Rajdip019/flexauth" className=' flex  items-center gap-1 border border-gray-600 rounded-full px-6 py-1.5'>
                                Github <FiArrowUpRight size={20} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar