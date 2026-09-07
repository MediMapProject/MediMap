import { Layers3 } from "lucide-react";

import SelectorCard from "@/shared/components/SelectorCard/SelectorCard";

import type { Floor } from "@/shared/types/Floor";

type FloorSelectorProps = {
    floors: Floor[];
    value: string | null;
    onChange: (floorId: string | null) => void;
};

export default function FloorSelector({
    floors,
    value,
    onChange,
}: FloorSelectorProps) {
    return (
        <SelectorCard
            placeholder="Select a floor"
            icon={Layers3}
            value={value}
            onChange={onChange}
            options={floors.map((floor) => ({
                id: floor.id,
                label: floor.name,
            }))}
        />
    );
}