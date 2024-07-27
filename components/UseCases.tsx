import React from "react";
import { Tabs } from "./ui/tabs";
import { CiGlobe } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import { IoTerminalOutline } from "react-icons/io5";
import { FaGears } from "react-icons/fa6";
import { BsArrowLeftRight } from "react-icons/bs";

const UseCases = () => {
    const tabs = [
        {
            title: "Web",
            value: "web",
            content: (
                <div className="w-full overflow-hidden relative rounded-2xl p-10 text-lg md:text-2xl font-semibold text-gray-300 bg-gradient-to-br from-gray-800 to-black">
                    <h2 className="flex gap-3 items-center">
                        <CiGlobe />
                        Web Authentication
                    </h2>
                    <p className=" text-base mt-5 font-normal text-gray-300">
                        Using HTTPS API for web authentication secures credential exchange between client and server. Methods like OAuth or JWT are used. Encrypted HTTPS requests ensure data protection, with the server validating credentials and returning a token or session identifier upon success.
                    </p>
                </div>
            ),
        },
        {
            title: "Mobile",
            value: "Mobile",
            content: (
                <div className="w-full overflow-hidden relative rounded-2xl p-10 text-lg md:text-2xl font-semibold text-white bg-gradient-to-br from-gray-800 to-black">
                    <h2 className="flex gap-3 items-center">
                        <CiMobile1 />
                        Mobile Authentication
                    </h2>
                    <p className=" text-base mt-5 font-normal text-gray-300">

                        Mobile authentication via HTTPS API ensures secure credential exchange between the app and server. Leveraging OAuth or JWT, it encrypts requests to protect data. The server validates credentials, returning a token for seamless, secure access, enhancing user experience and safeguarding sensitive information.                    </p>
                </div>
            ),
        },
        {
            title: "CLI",
            value: "CLI",
            content: (
                <div className="w-full overflow-hidden relative rounded-2xl p-10 text-lg md:text-2xl font-semibold text-white bg-gradient-to-br from-gray-800 to-black">
                    <h2 className="flex gap-3 items-center">
                        <IoTerminalOutline />
                        CLI Authentication
                    </h2>
                    <p className=" text-base mt-5 font-normal text-gray-300">
                        CLI authentication via HTTPS API secures credential exchange between the command line and server. Using OAuth or JWT, encrypted requests protect data. The server validates credentials, returning a token for secure, seamless access, enhancing user experience and safeguarding sensitive information.                    </p>
                </div>
            ),
        },
        {
            title: "Microservices",
            value: "Microservices",
            content: (
                <div className="w-full overflow-hidden relative rounded-2xl p-10 text-lg md:text-2xl font-semibold text-white bg-gradient-to-br from-gray-800 to-black">
                    <h2 className="flex gap-3 items-center">
                        <FaGears />
                        Microservices Authentication
                    </h2>
                    <p className=" text-base mt-5 font-normal text-gray-300">

                        Microservices authentication via HTTPS API secures inter-service communication. Utilizing OAuth or JWT, encrypted requests ensure data protection. The server validates credentials, returning tokens for seamless, secure interactions, enhancing system reliability and safeguarding sensitive information across distributed services.                    </p>
                </div>
            ),
        },
        {
            title: "Others",
            value: "Others",
            content: (
                <div className="w-full overflow-hidden relative rounded-2xl p-10 text-lg md:text-2xl font-semibold text-white bg-gradient-to-br from-gray-800 to-black">
                    <h2 className="flex gap-3 items-center">
                        <BsArrowLeftRight />
                        Other Applications
                    </h2>
                    <p className=" text-base mt-5 font-normal text-gray-300">
                        For other applications, such as IoT devices or web apps, HTTPS API authentication similarly ensures secure credential exchange. Using methods like OAuth, JWT, or API keys, it encrypts requests, protects data, and validates credentials, providing tokens for secure access. This approach consistently enhances security, user experience, and data integrity across various platforms and devices.                    </p>
                </div>
            ),
        },
    ];

    return (
        <div>
            <h2 className="text-3xl font-semibold text-gray-300 mb-10">Use cases</h2>
            <div className=" [perspective:1000px] relative flex flex-col mx-auto w-full  items-start justify-start mb-80">
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
};

export default UseCases;
