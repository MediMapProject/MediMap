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
import { useFloors } from "@/shared/hooks/useFloors";

export default function Map() {
    const { hospitals, loading, error } = useHospitals();

    const [selectedHospitalId, setSelectedHospitalId] =
        useState<number | null>(null);

    const [selectedBuildingId, setSelectedBuildingId] =
        useState<number | null>(null);

    const [selectedFloorId, setSelectedFloorId] =
        useState<number | null>(null);

    const {
        buildings,
        loading: buildingsLoading,
        error: buildingsError,
    } = useBuildings(selectedHospitalId);

    const {
        floors,
        loading: floorsLoading,
        error: floorsError,
    } = useFloors(selectedBuildingId);

    if (loading || buildingsLoading || floorsLoading) {
        return <LoadingSpinner />;
    }

    if (error || buildingsError || floorsError) {
        return (
            <p>
                {error ?? buildingsError ?? floorsError}
            </p>
        );
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

                        setSelectedBuildingId(null);
                        setSelectedFloorId(null);
                    }}
                />

                <BuildingSelector
                    buildings={buildings}
                    value={selectedBuildingId}
                    onChange={(buildingId) => {
                        setSelectedBuildingId(buildingId);

                        setSelectedFloorId(null);
                    }}
                />

                <FloorSelector
                    floors={floors}
                    value={selectedFloorId}
                    onChange={setSelectedFloorId}
                />
            </section>

            <section className="map-container">
                <MapViewer />
            </section>

            <RoomPopup />
        </main>
    );
}