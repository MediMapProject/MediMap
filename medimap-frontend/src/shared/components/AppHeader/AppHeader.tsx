import { Menu, Search } from "lucide-react";

import "./AppHeader.css";

import logo from "@/assets/images/logo.png";

type AppHeaderProps = {
    onSearchClick: () => void;
};

export default function AppHeader({
    onSearchClick,
}: AppHeaderProps) {
    return (
        <header className="header">
            <div className="header__brand"> 
                <img
                    className="header__logo"
                    src={logo}
                    alt="MediMap"
                />
            </div>

            <div className="header__actions">
                <button
                    className="header__icon"
                    onClick={onSearchClick}
                    aria-label="Search"
                >
                    <Search size={22} />
                </button>

                <button
                    className="header__icon"
                    aria-label="Menu"
                >
                    <Menu size={24} />
                </button>
            </div>
        </header>
    );
}