import "./FloorSelector.css";

export default function FloorSelector() {
    return (
        <select
            className="floor-selector"
            defaultValue="Floor 2"
        >
            <option>Basement</option>
            <option>Floor 1</option>
            <option>Floor 2</option>
            <option>Floor 3</option>
        </select>
    );
}