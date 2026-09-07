import "./SelectorCard.css";

import type { LucideIcon } from "lucide-react";

type SelectorCardProps = {
    icon: LucideIcon;

    value: string | null;

    onChange: (value: string | null) => void;

    options: {
        id: string;

    }[];

    placeholder: string;
};

export default function SelectorCard({
    icon: Icon,
    value,
    onChange,
    options,
    placeholder,
}: SelectorCardProps) {

    return (

        <div className="selector-card">

            <label className="selector-card__label">



            </label>

            <div className="selector-card__input">

                <Icon
                    size={22}
                    className="selector-card__icon"
                />

                <select
                    value={value ?? ""}
                    onChange={(event) =>
                        onChange(event.target.value || null)
                    }
                >

                    <option value="">
                        {placeholder}
                    </option>

                    {options.map(option => (

                        <option
                            key={option.id}
                            value={option.id}
                        >
                        </option>

                    ))}

                </select>

            </div>

        </div>

    );
}