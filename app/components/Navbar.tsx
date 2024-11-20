import Image from "next/image";
import React from "react";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-slate-300 p-4 text-white">
            {/* Left Side: Logo and Search Bar */}
            <div className="flex items-center space-x-4">
                {/* Logo */}

                <Image
                    src="/logo.webp"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                    className="rounded-md "
                />
                {/* Search Bar */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className=" w-96 text-gray-400 rounded-lg px-4 py-2 focus:outline-none border-0"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-900">
                        🔍
                    </span>
                </div>
            </div>

            {/* Right Side: Logo */}
            <div className="flex items-center">
                <button className="btn bg-sky-400 px-3 mr-5 p-2 rounded-3xl">
                    Create an Add
                </button>
                <button className="btn bg-sky-400 px-3 mr-5 p-2 rounded-3xl">
                    Login / Sign up
                </button>
            </div>
        </nav>
    );
}
