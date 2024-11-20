import Card from "./components/card/Card";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";

export default function Home() {
    return (
        <>
            <div className="bg-gray-200 ">
                <Navbar />
                <div className="flex justify-between">
                    <Sidebar />
                    <Map />
                    <Card />
                </div>
            </div>
        </>
    );
}
