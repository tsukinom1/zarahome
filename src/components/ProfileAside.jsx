"use client"
import {useState} from "react";
import sections from "@/arrays/sections";
import AddressSelection from "@/components/AddressSelection";
import ProfileOrder from "@/components/ProfileOrder";
import ChangePassword from "@/components/ChangePassword";


const ProfileAside = () => {
    const [activeSection, setActiveSection] = useState("orders");
    const renderContent = () => {
        switch (activeSection) {
            case "orders":
                return <ProfileOrder/>;
            case "addresses":
                return <div>
                    <h1 className="text-3xl font-bold mb-5">Мои адреса</h1>
                    <AddressSelection/>
                </div>
            case "password":
                return <ChangePassword />;
            default:
                return <p>Выберите раздел</p>;
        }
    };
    return (
        <div className="flex flex-col lg:flex-row space-x-2">
            {/* Sidebar */}
            <aside className="bg-gray-100 p-3 lg:p-5 border-b lg:border-r border-gray-300 w-full lg:w-64">
                <nav
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:flex lg:flex-col lg:space-x-0 lg:space-y-3">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`flex items-center space-x-3 px-4 py-2 rounded-md transition-all duration-200
                ${activeSection === section.id ? "bg-gray-300 font-bold" : "hover:bg-gray-200"}`}
                        >
                            {section.icon}
                            <span>{section.label}</span>
                        </button>
                    ))}
                </nav>
            </aside>


            {/* Content Area */}
            <main className="flex-1 p-6">{renderContent()}</main>
        </div>

    );
};

export default ProfileAside;