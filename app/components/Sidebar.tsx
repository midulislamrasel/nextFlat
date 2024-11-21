//==========
"use client";
import { useState } from "react";
import Link from "next/link";
import Close from "@/public/icons/Close";
import HomeIcon from "@/public/icons/HomeIcon";
import Calender from "@/public/icons/Calender";
import SaleIcon from "@/public/icons/SaleIcon";
import BoxIcon from "@/public/icons/BoxIcon";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => setIsOpen(!isOpen);

    // Function to close the sidebar

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`fixed top-[80px]  left-0 bg-gray-200 text-black p-5 transition-all duration-300 h-[calc(100%-30px)] ${
                    isOpen ? "w-80" : "w-[80px]"
                }`}
            >
                {/* Toggle Sidebar Button (Always visible inside the sidebar) */}
                <button
                    className="p-2 rounded mb-6 text-3xl"
                    onClick={toggleSidebar}
                >
                    {isOpen ? (
                        <div className="flex justify-between items-center gap-2">
                            Logo <Close />
                        </div>
                    ) : (
                        <>
                            <HomeIcon />
                        </>
                    )}
                </button>

                <ul className="mt-96">
                    <li>
                        <Link href="/">
                            <span className="block py-2 px-4 hover:bg-blue-600 rounded">
                                {isOpen ? (
                                    <div className="flex gap-2">
                                        <BoxIcon /> Home
                                    </div>
                                ) : (
                                    <>
                                        <BoxIcon />
                                    </>
                                )}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <span className="block py-2 px-4 hover:bg-blue-600 rounded">
                                {isOpen ? (
                                    <div className="flex gap-2">
                                        <SaleIcon /> About Us
                                    </div>
                                ) : (
                                    <>
                                        <SaleIcon />
                                    </>
                                )}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                            <span className="block py-2 px-4 hover:bg-blue-600 rounded">
                                {isOpen ? (
                                    <div className="flex gap-2">
                                        <BoxIcon /> Servise
                                    </div>
                                ) : (
                                    <>
                                        <BoxIcon />
                                    </>
                                )}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <span className="block py-2 px-4 hover:bg-blue-600 rounded">
                                {isOpen ? (
                                    <div className="flex gap-2">
                                        <Calender /> Contact Us
                                    </div>
                                ) : (
                                    <>
                                        <Calender />
                                    </>
                                )}
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div
                className={`flex-1 p-3 bg-slate-300 transition-all duration-300 ${
                    isOpen ? "ml-64" : "ml-[60px]"
                }`}
            ></div>
        </div>
    );
}
