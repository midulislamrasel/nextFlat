import React from "react";
import properties from "./properties.json";
import ItemCard from "../ItemCard";

export default function Card() {
    return (
        <>
            <div className="mb-5">
                {properties.map((property, index) => (
                    <ItemCard proparty={property} key={index} />
                ))}
            </div>
        </>
    );
}
