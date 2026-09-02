import "./AppHeader.css";

export default function AppHeader() {
    return (
        <header className="header">
            <div className="header__logo">
                MediMap
            </div>

            <button className="header__menu">
                ☰
            </button>
        </header>
    );
}