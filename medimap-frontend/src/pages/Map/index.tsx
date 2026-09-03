import { useState } from "react";
 
import "./index.css";
 
import HospitalSelector from "./components/HospitalSelector/HospitalSelector";
import BuildingSelector from "./components/BuildingSelector/BuildingSelector";
import FloorSelector from "./components/FloorSelector/FloorSelector";
import MapViewer from "./components/MapViewer/MapViewer";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
 
import AppHeader from "@/shared/components/AppHeader/AppHeader";
import Hero from "@/shared/components/Hero/Hero";
import SearchModal from "@/shared/components/SearchModal/SearchModal";  
 
import { useHospitals } from "@/shared/hooks/useHospitals";
import { useBuildings } from "@/shared/hooks/useBuildings";
import { useFloors } from "@/shared/hooks/useFloors";
import { useRooms } from "@/shared/hooks/useRooms";
 
export default function Map() {
    const { hospitals, loading, error } = useHospitals();
 
    const [selectedHospitalId, setSelectedHospitalId] =
        useState<string | null>(null);
 
    const [selectedBuildingId, setSelectedBuildingId] =
        useState<string | null>(null);
 
    const [selectedFloorId, setSelectedFloorId] =
        useState<string | null>(null);
 
    // Va fi folosit pentru SearchModal
    const [searchOpen, setSearchOpen] = useState(false);
 
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
 
    const {
        rooms,
        loading: roomsLoading,
        error: roomsError,
    } = useRooms(selectedFloorId);
 
    const selectedFloor = floors.find(
        (floor) => floor.id === selectedFloorId
    );
 
    if (
        loading ||
        buildingsLoading ||
        floorsLoading ||
        roomsLoading
    ) {
        return <LoadingSpinner />;
    }
 
    if (
        error ||
        buildingsError ||
        floorsError ||
        roomsError
    ) {
        return (
            <p>
                {error ??
                    buildingsError ??
                    floorsError ??
                    roomsError}
            </p>
        );
    }
 
    return (
        <main className="map-page">
            <AppHeader
                onSearchClick={() => setSearchOpen(true)}
            />
 
            <Hero />
 
            <section className="selector-section">
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
 
            <section className="map-section">
                {selectedFloor && (
                    <MapViewer
                        key={selectedFloor.id}
                        mapPath={selectedFloor.mapPath}
                    />
                )}
            </section>
 
           {searchOpen && (
    <SearchModal
        onClose={() => setSearchOpen(false)}
    />  
)}
        </main>
    );
}
 