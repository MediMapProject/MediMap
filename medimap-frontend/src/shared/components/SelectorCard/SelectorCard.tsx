import "./SelectorCard.css";

import type { LucideIcon } from "lucide-react";

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

            <label className="selector-card__label">
                {label}
            </label>

            <div className="selector-card__input">

                <Icon
                    size={22}
                    className="selector-card__icon"
                />

                <select
                    className="selector-card__select"
                    value={value ?? ""}
                    onChange={(event) =>
                        onChange(event.target.value || null)
                    }
                >
                    <option value="">
                        {placeholder}
                    </option>

                    {options.map((option) => (
                        <option
                            key={option.id}
                            value={option.id}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>

            </div>

        </div>
    );
}