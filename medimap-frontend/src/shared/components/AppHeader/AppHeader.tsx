import { Menu, MapPinned } from "lucide-react";

import "./AppHeader.css";

export default function AppHeader() {
    return (
        <header className="header">
            <div className="header__brand">
                <div className="header__icon">
                    <MapPinned size={22} />
                </div>

                <span className="header__logo">
                    MediMap
                </span>
            </div>

            <button
                className="header__menu"
                aria-label="Open menu"
            >
                <Menu size={24} />
            </button>
        </header>
    );
}