import { useEffect, useState } from "react";

import { getFloorsByBuilding } from "@/shared/api/floorApi";
import type { Floor } from "@/shared/types/Floor";

export function useFloors(buildingId: string| null) {
    const [floors, setFloors] = useState<Floor[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (buildingId === null) {
            setFloors([]);
            return;
        }

        async function loadFloors() {
            setLoading(true);

            try {
                const data = await getFloorsByBuilding(buildingId!);

                setFloors(data);
                setError(null);
            } catch {
                setError("Failed to load floors.");
            } finally {
                setLoading(false);
            }
        }

        loadFloors();
    }, [buildingId]);

    return {
        floors,
        loading,
        error,
    };
}