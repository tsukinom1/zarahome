"use client"
import {motion} from "framer-motion";
import Link from "next/link";
import BlackButton from "@/components/ui/BlackButton";

const NotFound = () => {
    return (
        <div
            className="container flex h-screen md:h-[70vh] xl:h-[50vh] flex-col items-center justify-center  text-center p-6 bg-gray-100 dark:bg-gray-900">
            <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                className="relative"
            >
                <svg viewBox="0 0 800 400" className="w-80 md:w-[500px]">
                    <text x="150" y="250" fontSize="200" fill="#999" fontWeight="bold">4</text>
                    <text x="310" y="250" fontSize="200" fill="#999" fontWeight="bold">0</text>
                    <text x="470" y="250" fontSize="200" fill="#999" fontWeight="bold">4</text>
                    <motion.circle
                        cx="400"
                        cy="200"
                        r="50"
                        fill="#e74c3c"
                        animate={{y: [0, -20, 0]}}
                        transition={{repeat: Infinity, duration: 1.5, ease: "easeInOut"}}
                    />
                    <motion.rect
                        x="380"
                        y="140"
                        width="40"
                        height="50"
                        fill="#fff"
                        animate={{rotate: [0, -10, 10, 0]}}
                        transition={{repeat: Infinity, duration: 2, ease: "easeInOut"}}
                    />
                </svg>
            </motion.div>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mt-4">
                Упс! Страница не найдена.
            </p>
            <BlackButton type={`button`} className={`rounded-xl my-2`}>
                <Link
                    href="/"
                    className={`px-5 py-2`}
                >
                    Вернуться на главную
                </Link>
            </BlackButton>
        </div>
    );
}

export default NotFound;