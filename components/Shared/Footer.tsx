import React from 'react'

const Footer = () => {
    return (
        <footer className="z-20 w-full p-4 flex flex-col justify-center md:flex-row md:items-center md:justify-between md:p-6 mt-10">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mx-auto md:mx-0">© 2024 Flexauth All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 mx-auto md:mx-0">
                <li>
                    <a href="#hero" className="hover:underline me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href="#features" className="hover:underline me-4 md:me-6">Features</a>
                </li>
                <li>
                    <a href="https://github.com/Rajdip019/flexauth" target='_blank' className="hover:underline me-4 md:me-6">Github</a>
                </li>
                <li>
                    <a href="mailto:rajdipgupta019@gmail.com" className="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer