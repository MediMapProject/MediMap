import { Building2 } from "lucide-react";

import "./HospitalSelector.css";

import type { Hospital } from "@/shared/types/Hospital";

type HospitalSelectorProps = {
    hospitals: Hospital[];
    value: string | null;
    onChange: (hospitalId: string) => void;
};

export default function HospitalSelector({
    hospitals,
    value,
    onChange,
}: HospitalSelectorProps) {
    return (
        <div className="hospital-selector">

            <label
                htmlFor="hospital-select"
                className="hospital-selector__label"
            >
                Hospital
            </label>

            <div className="hospital-selector__card">

                <Building2
                    size={22}
                    className="hospital-selector__icon"
                />

                <select
                    id="hospital-select"
                    className="hospital-selector__select"
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

        </div>
    );
}