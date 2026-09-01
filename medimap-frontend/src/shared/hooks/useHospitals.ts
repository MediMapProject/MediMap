import { useEffect, useState } from "react";

import { getHospitals } from "../api/hospitalApi";
import type { Hospital } from "../types/Hospital";

export function useHospitals() {
    const [hospitals, setHospitals] = useState<Hospital[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    console.log("useHospitals called");

    async function loadHospitals() {
        console.log("Loading hospitals...");

        try {
            const data = await getHospitals();
            console.log(data);

            setHospitals(data);
        } catch (error) {
            console.error(error);
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