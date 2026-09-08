import { useEffect, useRef, useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";

import "./CustomSelect.css";

type Option = {
    id: string;
    label: string;
};

type CustomSelectProps = {
    label: string;
    value: string | null;
    placeholder: string;
    options: Option[];
    onChange: (value: string | null) => void;
};

export default function CustomSelect({
    label,
    value,
    placeholder,
    options,
    onChange,
}: CustomSelectProps) {

    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const selectedOption =
        options.find((option) => option.id === value);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener(
            "mousedown",
            handleClickOutside,
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside,
            );
        };
    }, []);

    return (
        <div
            ref={selectRef}
            className="custom-select"
        >

            <button
                type="button"
                className="custom-select__button"
                onClick={() => setIsOpen((prev) => !prev)}
            >

                <div className="custom-select__content">

                    <span className="custom-select__label">
                        {label}
                    </span>

                    <span className="custom-select__value">
                        {selectedOption?.label ?? placeholder}
                    </span>

                </div>

                {isOpen ? (
                    <ChevronUp
                        size={18}
                        className="custom-select__chevron"
                    />
                ) : (
                    <ChevronDown
                        size={18}
                        className="custom-select__chevron"
                    />
                )}

            </button>

            {isOpen && (

                <div className="custom-select__dropdown">

                    {options.map((option) => (

                        <button
                            key={option.id}
                            type="button"
                            className="custom-select__option"
                            onClick={() => {
                                onChange(option.id);
                                setIsOpen(false);
                            }}
                        >
                            {option.label}
                        </button>

                    ))}

                </div>

            )}

        </div>
    );
}