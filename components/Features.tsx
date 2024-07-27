import React from "react";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export function BentoGridSecondDemo() {
    return (
        <div className="max-w-7xl mx-auto h-full py-20">
            <h2 className="pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Features
            </h2>
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}

interface SkeletonProps {
    imageUrl: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ imageUrl }) => (
    <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"
        style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover', // Ensures the image covers the entire div
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat' // Prevents the image from repeating
        }}
    ></div>
);


const items = [
    {
        title: "Ultimate Flexibility",
        description: "Tailor Flexauth to your exact needs with its highly customizable architecture. Add, modify, or remove features as your project evolves.",
        header: <Skeleton imageUrl="https://images.unsplash.com/photo-1515080797068-528074601098?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />,
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Blazing Fast Performance",
        description: "Experience lightning-fast authentication processes designed to handle high-performance applications with minimal latency.",
        header: <Skeleton imageUrl="https://images.unsplash.com/photo-1515080797068-528074601098?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Robust Security",
        description: "Ensure top-tier security for your data with comprehensive protocols and on-premises deployment options for full control.",
        header: <Skeleton imageUrl="https://images.unsplash.com/photo-1515080797068-528074601098?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Seamless Integration",
        description: "Easily integrate Flexauth with your existing systems and applications, thanks to its modular design and extensive documentation.",
        header: <Skeleton imageUrl="https://images.unsplash.com/photo-1515080797068-528074601098?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];
