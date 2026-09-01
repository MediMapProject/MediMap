import { useState } from "react";

import "./index.css";

import HospitalSelector from "./components/HospitalSelector/HospitalSelector";
import BuildingSelector from "./components/BuildingSelector/BuildingSelector";
import FloorSelector from "./components/FloorSelector/FloorSelector";
import SearchBar from "./components/SearchBar/SearchBar";
import MapViewer from "./components/MapViewer/MapViewer";
import RoomPopup from "./components/RoomPopup/RoomPopup";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

import { useHospitals } from "@/shared/hooks/useHospitals";

export default function Map() {
    const { hospitals, loading, error } = useHospitals();

    const [selectedHospitalId, setSelectedHospitalId] = useState<number | null>(null);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <main className="map-page">
            <header className="top-bar">
                <SearchBar />
            </header>

            <section className="selectors">
                <HospitalSelector
                    hospitals={hospitals}
                    value={selectedHospitalId}
                    onChange={setSelectedHospitalId}
                />

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