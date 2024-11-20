"use client";

import { useState } from "react";
import images from "../../public/assets/images";
import Image from "next/image";

// ------------------------------------------------

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative  w-40 mx-auto overflow-hidden">
            {/* Image Display */}
            <div
                className="flex transition-transform duration-500 "
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <Image
                        key={index}
                        className="rounded-xl"
                        src={src}
                        width={1390}
                        height={1200}
                        alt="Picture of the property"
                    />
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
            >
                &#8592;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
            >
                &#8594;
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index
                                ? "bg-blue-500"
                                : "bg-gray-400"
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
