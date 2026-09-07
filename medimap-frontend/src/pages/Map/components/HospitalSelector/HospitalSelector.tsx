import { Building2 } from "lucide-react";

import SelectorCard from "@/shared/components/SelectorCard/SelectorCard";

import type { Hospital } from "@/shared/types/Hospital";

type HospitalSelectorProps = {
    hospitals: Hospital[];
    value: string | null;
    onChange: (hospitalId: string | null) => void;
};

export default function HospitalSelector({
    hospitals,
    value,
    onChange,
}: HospitalSelectorProps) {
    return (
        <SelectorCard
            label="Hospital"
            placeholder="Select a hospital"
            icon={Building2}
            value={value}
            onChange={onChange}
            options={hospitals.map((hospital) => ({
                id: hospital.id,
                label: hospital.name,
            }))}
        />
    );
}