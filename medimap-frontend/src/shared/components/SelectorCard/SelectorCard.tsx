import "./SelectorCard.css";

import type { LucideIcon } from "lucide-react";

import CustomSelect from "@/shared/components/CustomSelect/CustomSelect";

type SelectorCardProps = {
    label: string;

    icon: LucideIcon;

    value: string | null;

    onChange: (value: string | null) => void;

    options: {
        id: string;
        label: string;
    }[];

    placeholder: string;
};

export default function SelectorCard({
    label,
    icon: Icon,
    value,
    onChange,
    options,
    placeholder,
}: SelectorCardProps) {
    return (
        <div className="selector-card">

            <div className="selector-card__input">

                <Icon
                    size={22}
                    className="selector-card__icon"
                />

                <CustomSelect
                    label={label}
                    value={value}
                    placeholder={placeholder}
                    options={options}
                    onChange={onChange}
                />

            </div>

        </div>
    );
}