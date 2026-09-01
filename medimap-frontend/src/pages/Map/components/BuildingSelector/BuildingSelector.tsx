import "./BuildingSelector.css";

import type { Building } from "@/shared/types/Building";

type BuildingSelectorProps = {
    buildings: Building[];
    value: number | null;
    onChange: (buildingId: number) => void;
};

export default function BuildingSelector({
    buildings,
    value,
    onChange,
}: BuildingSelectorProps) {
    return (
        <div className="building-selector">
            <label htmlFor="building-select">
                Building
            </label>

            <select
                id="building-select"
                value={value ?? ""}
                onChange={(event) =>
                    onChange(Number(event.target.value))
                }
            >
                <option value="">
                    Select a building
                </option>

                {buildings.map((building) => (
                    <option
                        key={building.id}
                        value={building.id}
                    >
                        {building.name}
                    </option>
                ))}
            </select>
        </div>
    );
}