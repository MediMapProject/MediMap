import PageContainer from "../../components/layout/PageContainer";

import SearchBar from "../../components/search/SearchBar";

import BuildingSelector from "../../components/map/MapViewer/RoomDetails/BuildingSelector";
import FloorSelector from "../../components/map/MapViewer/RoomDetails/BuildingSelector/FloorSelector";

export default function LiveMapPage() {
    return (
        <PageContainer>

            <SearchBar />

            <BuildingSelector />

            <FloorSelector />

        </PageContainer>
    );
}