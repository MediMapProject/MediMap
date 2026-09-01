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
import { useBuildings } from "@/shared/hooks/useBuildings";

export default function Map() {
    const [selectedHospitalId, setSelectedHospitalId] =
        useState<number | null>(null);

    const [selectedBuildingId, setSelectedBuildingId] =
        useState<number | null>(null);

    const { hospitals, loading, error } = useHospitals();

    const {
        buildings,
        loading: buildingsLoading,
        error: buildingsError,
    } = useBuildings(selectedHospitalId);

    if (loading || buildingsLoading) {
        return <LoadingSpinner />;
    }

    if (error || buildingsError) {
        return <p>{error ?? buildingsError}</p>;
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
                    onChange={(hospitalId) => {
                        setSelectedHospitalId(hospitalId);

                        // resetăm clădirea când schimbăm spitalul
                        setSelectedBuildingId(null);
                    }}
                />

                <BuildingSelector
                    buildings={buildings}
                    value={selectedBuildingId}
                    onChange={setSelectedBuildingId}
                />

                <FloorSelector />
            </section>

            <section className="map-container">
                <MapViewer />
            </section>

            <RoomPopup />
        </main>
    );
}