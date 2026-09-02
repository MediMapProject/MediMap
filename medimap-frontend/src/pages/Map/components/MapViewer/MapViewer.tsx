import { useEffect, useState } from "react";
import "./MapViewer.css";

type MapViewerProps = {
    mapPath: string | null;
};

export default function MapViewer({
    mapPath,
}: MapViewerProps) {

    const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    if (!mapPath) {
        return;
    }

    const path = mapPath;

    async function loadSvg() {
        const response = await fetch(path);

        const svg = await response.text();

        console.log(svg);

        setSvgContent(svg);
    }

    loadSvg();

}, [mapPath]);

   return (
    <div
        className="map-viewer"
        dangerouslySetInnerHTML={{
            __html: svgContent,
        }}
    />
);
}