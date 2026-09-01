import { createBrowserRouter, Navigate } from "react-router-dom";

import MapPage from "./pages/Map";
import DoctorsPage from "./pages/Doctors";
import DepartmentsPage from "./pages/Departments/DepartmentsPage";
import AboutPage from "./pages/About/AboutPage";
import SettingsPage from "./pages/Settings/SettingsPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/map" replace />,
    },
    {
        path: "/map",
        element: <MapPage />,
    },
    {
        path: "/doctors",
        element: <DoctorsPage />,
    },
    {
        path: "/departments",
        element: <DepartmentsPage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/settings",
        element: <SettingsPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);