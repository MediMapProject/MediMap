import { useEffect, useState } from "react";
import "./MapViewer.css";

type MapViewerProps = {
    mapPath: string | null;
};

export default function MapViewer({ mapPath }: MapViewerProps) {
    const [svgContent, setSvgContent] = useState("");

    useEffect(() => {
        // Ștergem harta veche de fiecare dată când se schimbă mapPath
        setSvgContent("");

        if (!mapPath) {
            return;
        }

        async function loadSvg() {
            try {
                const response = await fetch(mapPath!);

                if (!response.ok) {
                    throw new Error("Failed to load SVG");
                }

                const svg = await response.text();

                setSvgContent(svg);
            } catch (error) {
                console.error("Failed to load SVG:", error);
                setSvgContent("");
            }
        }

        loadSvg();
    }, [mapPath]);

    if (!mapPath) {
        return null;
    }

    return (
        <div
            className="map-viewer"
            dangerouslySetInnerHTML={{
                __html: svgContent,
            }}
        />
    );
}