import React from "react";
import { Iproparty } from "../types/proparty";
import ImageSlider from "./ImageSlider";
import Image from "next/image";

interface Iprops {
    proparty: Iproparty;
}

const ItemCard: React.FC<Iprops> = ({ proparty }) => {
    return (
        <div>
            <div className="flex flex-col md:flex-row p-4 pb-5 mb-2 bg-slate-300 text-black rounded-lg shadow-lg h-60">
                {/* Image Section */}
                <div className="mb-4 md:mb-0 md:mr-6 w-full sm:w-auto">
                    <ImageSlider />
                </div>

                {/* Content Section */}
                <div className="w-full">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between gap-4 mb-5">
                        <div>
                            <h1 className="text-2xl text-black font-semibold">
                                {proparty.title}
                            </h1>
                            <p className="text-xl text-neutral-800">
                                {proparty.name}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <span>
                                <Image
                                    className="rounded-xl bg-gray-400 "
                                    src="/telegram.svg"
                                    width={25}
                                    height={25}
                                    alt="Picture of the property"
                                />
                            </span>
                            <span>
                                <Image
                                    className="rounded-xl bg-gray-400 "
                                    src="/love.svg"
                                    width={25}
                                    height={25}
                                    alt="Picture of the property"
                                />
                            </span>
                            <span>
                                <Image
                                    className="rounded-xl bg-gray-400 "
                                    src="/eye.svg"
                                    width={25}
                                    height={25}
                                    alt="Picture of the property"
                                />
                            </span>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col md:flex-row justify-between gap-6 ">
                        <div className="flex gap-10">
                            <div>
                                <p>5 Rooms</p>
                                {proparty.house1}
                                {proparty.house2}
                                {proparty.house3}
                            </div>
                            <div>
                                {proparty.house01}
                                {proparty.house02}
                                {proparty.house03}
                            </div>
                        </div>
                        <div className="text-right">
                            <h1 className="text-xl font-semibold text-green-600">
                                €124,600
                            </h1>
                        </div>
                    </div>

                    {/* Actions Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-4">
                        <div className="flex gap-6">
                            <div>
                                <h1 className="text-blue-500 cursor-pointer hover:underline">
                                    Like
                                </h1>
                            </div>
                            <div>
                                <h1 className="text-blue-500 cursor-pointer hover:underline">
                                    Comment
                                </h1>
                            </div>
                            <div>
                                <h1 className="text-red-500 cursor-pointer hover:underline">
                                    Dislike
                                </h1>
                            </div>
                        </div>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
