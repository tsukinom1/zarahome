"use client";
import {useState} from "react";

const Faq = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container">
            <div className={`md:w-4/5 mx-auto flex ${!isOpen ? "items-center" : ""} my-5 md:my-10 gap-x-5`}>
                <div
                    className={`bg-black p-3 h-10 flex justify-center items-center text-white font-bold text-2xl
                    ${isOpen ? "rotate-90" : ""} transition-transform duration-500 cursor-pointer hover:scale-110`}
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    &gt;
                </div>
                <div className={`transition-all duration-500 ${isOpen ? "py-5 md:p-5" : "p-0"}`}>
                    <h1 className="text-md md:text-2xl font-bold space-1.5">{question}</h1>
                    <h2
                        className={`text-sm md:text-lg overflow-hidden transition-max-height duration-500 ease-in-out ${
                            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                        {answer}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Faq;
