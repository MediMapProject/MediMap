import "../Header.css";

export default function Header() {
    return (
        <header className="header">

            <div className="header__logo">

                <span className="header__logo-icon">
                    🏥
                </span>

                <span className="header__logo-text">
                    MediMap
                </span>

            </div>

            <div className="header__actions">

                <button className="header__action">

                    🌐

                </button>

                <button className="header__action">

                    🌙

                </button>

                <button className="header__action">

                    ☰

                </button>

            </div>

        </header>
    );
}