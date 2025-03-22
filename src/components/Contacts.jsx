"use client";
import {useState} from "react";
import {FiExternalLink} from "react-icons/fi";
import {contacts} from "@/arrays/contacts";
import Link from "next/link";


const Contacts = () => {
    const [hovered, setHovered] = useState(null);

    return (<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5">
            {contacts.map((contact) => (
                <Link
                    key={contact.id}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHovered(contact.id)}
                    onMouseLeave={() => setHovered(null)}
                    className={`p-6 flex flex-col items-center text-center transition-all duration-300 rounded-lg cursor-pointer relative ${
                        hovered === contact.id ? "shadow-lg bg-white scale-105" : ""
                    }`}
                >
                    <div className="text-white bg-black p-4 rounded-full">{contact.icon}</div>
                    <h3 className="text-lg font-semibold mt-3">{contact.title}</h3>
                    <p className="text-sm text-gray-500">{contact.description}</p>
                    {hovered === contact.id && (
                        <FiExternalLink className="absolute top-4 right-4 text-gray-400"/>
                    )}
                </Link>
            ))}
        </div>

    );
};

export default Contacts;
