import type { ReactNode } from "react";

import Header from "../Header";
import Sidebar from "../Sidebar";

import "./PageContainer.css";

interface PageContainerProps {
    children: ReactNode;
}

export default function PageContainer({
    children,
}: PageContainerProps) {
    return (
        <>
            <Header />

            <div className="layout">

                <Sidebar />

                <main className="layout__content">
                    {children}
                </main>

            </div>
        </>
    );
}