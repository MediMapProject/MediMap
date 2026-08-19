import "./Header.css";

export default function Header() {
    return (
        <header className="header">

            <div className="header__left">

                <h1 className="header__logo">
                    MediMap
                </h1>

            </div>

            <div className="header__center">

                <input
                    className="header__search"
                    type="text"
                    placeholder="Search doctor, department or room..."
                />

            </div>

            <div className="header__right">

                <button>RO</button>

                <button>🌙</button>

            </div>

        </header>
    );
}