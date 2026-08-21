import "./SearchBar.css";

export default function SearchBar() {
    return (
        <div className="search">

            <input
                className="search__input"
                type="text"
                placeholder="Search doctor, department or room..."
            />

        </div>
    );
}