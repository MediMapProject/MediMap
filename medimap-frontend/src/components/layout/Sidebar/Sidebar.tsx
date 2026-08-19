import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar__logo">

                <h2>MediMap</h2>

            </div>

            <nav className="sidebar__menu">

                <NavLink to="/map">
                    Live Map
                </NavLink>

                <NavLink to="/doctors">
                    Doctors
                </NavLink>

                <NavLink to="/departments">
                    Departments
                </NavLink>

                <NavLink to="/about">
                    About
                </NavLink>

                <NavLink to="/settings">
                    Settings
                </NavLink>

            </nav>

        </aside>
    );
}