import Image from "next/image";
import React from "react";

export default function ImageComponent() {
    return (
        <div>
            <Image
                className="rounded-xl"
                src="/maps.jpg"
                width={1390}
                height={1200}
                alt="Picture of the property"
            />
        </div>
    );
}
