import "./FloorSelector.css";

import type { Floor } from "@/shared/types/Floor";

type FloorSelectorProps = {
    floors: Floor[];
    value: number | null;
    onChange: (floorId: number) => void;
};

export default function FloorSelector({
    floors,
    value,
    onChange,
}: FloorSelectorProps) {
    return (
        <div className="floor-selector">
            <label htmlFor="floor-select">
                Floor
            </label>

            <select
                id="floor-select"
                value={value ?? ""}
                onChange={(event) =>
                    onChange(Number(event.target.value))
                }
            >
                <option value="">
                    Select a floor
                </option>

                {floors.map((floor) => (
                    <option
                        key={floor.id}
                        value={floor.id}
                    >
                        {floor.name}
                    </option>
                ))}
            </select>
        </div>
    );
}