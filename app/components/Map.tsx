// "use client";
// import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// export default function Map() {
//     const containerStyle = {
//         width: "760px",
//         height: "1000px",
//     };

//     const center = {
//         lat: -3.745,
//         lng: -38.523,
//     };

//     const { isLoaded } = useJsApiLoader({
//         id: "google-map-script",
//         googleMapsApiKey: "A",
//     });

//     const [map, setMap] = React.useState(null);

//     const onLoad = React.useCallback(function callback(map) {
//         // This is just an example of getting and using the map instance!!! don't just blindly copy!
//         const bounds = new window.google.maps.LatLngBounds(center);
//         map.fitBounds(bounds);

//         setMap(map);
//     }, []);

//     const onUnmount = React.useCallback(function callback(map) {
//         setMap(null);
//     }, []);

//     return isLoaded ? (
//         <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             zoom={10}
//             onLoad={onLoad}
//             onUnmount={onUnmount}
//         >
//             {/* Child components, such as markers, info windows, etc. */}
//             <></>
//         </GoogleMap>
//     ) : (
//         <></>
//     );
// }

import Image from "next/image";
import React from "react";

export default function Map() {
    return (
        <div>
            <Image
                className="rounded-xl"
                src="/maps.jpg"
                width={1100}
                height={1200}
                alt="Picture of the property"
            />
        </div>
    );
}
