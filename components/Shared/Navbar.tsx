/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
    return (
        <nav className='absolute mx-auto w-screen z-50 mt-10 text-gray-300'>
            <div className='relative flex justify-between items-center px-10 border border-gray-300 rounded-full py-2 mx-44'>
                <div className=' flex items-center gap-2'>
                    <img src="/logo_tr.png" alt="" className='w-10' />
                    <h1 className=' text-2xl font-semibold'>Flexauth </h1>
                </div>
                <div>
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
                        <li className=' hover:scale-105 transition-all'>
                            <a target="_blank" href="https://github.com/Rajdip019/flexauth" className=' flex  items-center gap-1'>
                                Github <FiArrowUpRight size={20} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar