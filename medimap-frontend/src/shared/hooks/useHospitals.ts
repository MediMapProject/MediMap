import { useEffect, useState } from "react";

import { getHospitals } from "../api/hospitalApi";
import type { Hospital } from "../types/Hospital";

export function useHospitals() {
    const [hospitals, setHospitals] = useState<Hospital[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadHospitals() {
            try {
                const data = await getHospitals();

                setHospitals(data);
            } catch {
                setError("Failed to load hospitals.");
            } finally {
                setLoading(false);
            }
        }

        loadHospitals();
    }, []);

    return {
        hospitals,
        loading,
        error,
    };
}