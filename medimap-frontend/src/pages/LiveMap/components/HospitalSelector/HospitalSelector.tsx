import "./HospitalSelector.css";
import type { Hospital } from "@/shared/types/Hospital";

type HospitalSelectorProps = {   
    hospitals: Hospital[];
    value: number | null;
    onChange: (hospitalId: number) => void;
};

export default function HospitalSelector({
    hospitals,
    value,
    onChange,
}: HospitalSelectorProps) {
    return (
        <div className="hospital-selector">
            <label htmlFor="hospital-select">
                Hospital
            </label>

            <select
                id="hospital-select"
                value={value ?? ""}
                onChange={(event) =>
                    onChange(Number(event.target.value))
                }
            >
                <option value="">
                    Select a hospital
                </option>

                {hospitals.map((hospital) => (
                    <option
                        key={hospital.id}
                        value={hospital.id}
                    >
                        {hospital.name}
                    </option>
                ))}
            </select>
        </div>
    );
}