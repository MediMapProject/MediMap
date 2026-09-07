import "./SelectorGroup.css";

import type { ReactNode } from "react";

type SelectorGroupProps = {
    children: ReactNode;
};

export default function SelectorGroup({
    children,
}: SelectorGroupProps) {
    return (
        <section className="selector-group">
            {children}
        </section>
    );
}