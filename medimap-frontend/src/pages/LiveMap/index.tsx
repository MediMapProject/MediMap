import "./index.css";

import HospitalSelector from "./components/HospitalSelector/HospitalSelector";
import BuildingSelector from "./components/BuildingSelector/BuildingSelector";
import FloorSelector from "./components/FloorSelector/FloorSelector";
import SearchBar from "./components/SearchBar/SearchBar";
import MapViewer from "./components/MapViewer/MapViewer";
import RoomPopup from "./components/RoomPopup/RoomPopup";

export default function LiveMap() {
    return (
        <main className="live-map-page">
            <header className="top-bar">
                <SearchBar />
            </header>

            <section className="selectors">
                <HospitalSelector />
                <BuildingSelector />
                <FloorSelector />
            </section>

            <section className="map-container">
                <MapViewer />
            </section>

            <RoomPopup />
        </main>
    );
}