import { useEffect, useState } from "react";

import { getBuildingsByHospital } from "../api/buildingApi";
import type { Building } from "../types/Building";

export function useBuildings(hospitalId: number | null) {
    const [buildings, setBuildings] = useState<Building[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (hospitalId === null) {
            setBuildings([]);
            return;
        }

        async function loadBuildings() {
            setLoading(true);

            try {
                const data = await getBuildingsByHospital(hospitalId);

                setBuildings(data);
                setError(null);
            } catch {
                setError("Failed to load buildings.");
            } finally {
                setLoading(false);
            }
        }

        loadBuildings();
    }, [hospitalId]);

    return {
        buildings,
        loading,
        error,
    };
}