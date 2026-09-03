import { useEffect, useState } from "react";

import { getDoctorsByRoom } from "@/shared/api/doctorApi";
import type { Doctor } from "@/shared/types/Doctor";

export function useDoctors(roomId: string | null) {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (roomId === null) {
            setDoctors([]);
            return;
        }

        async function loadDoctors() {
            setLoading(true);

            try {
                const data = await getDoctorsByRoom(roomId!);

                setDoctors(data);
                setError(null);
            } catch {
                setError("Failed to load doctors.");
            } finally {
                setLoading(false);
            }
        }

        loadDoctors();
    }, [roomId]);

    return {
        doctors,
        loading,
        error,
    };
}