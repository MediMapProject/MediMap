import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function PageContainer({ children }: Props) {
    return (
        <main>
            {children}
        </main>
    );
}