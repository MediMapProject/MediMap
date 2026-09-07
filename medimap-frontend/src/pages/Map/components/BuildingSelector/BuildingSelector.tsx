import { Building2 } from "lucide-react";

import SelectorCard from "@/shared/components/SelectorCard/SelectorCard";

import type { Building } from "@/shared/types/Building";

type BuildingSelectorProps = {
    buildings: Building[];
    value: string | null;
    onChange: (buildingId: string | null) => void;
};

export default function BuildingSelector({
    buildings,
    value,
    onChange,
}: BuildingSelectorProps) {
    return (
        <SelectorCard
            label=""
            placeholder="Select a building"
            icon={Building2}
            value={value}
            onChange={onChange}
            options={buildings.map((building) => ({
                id: building.id,
                label: building.name,
            }))}
        />
    );
}