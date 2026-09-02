import { useEffect, useState } from "react";

import { getRoomsByFloor } from "@/shared/api/roomApi";
import type { Room } from "@/shared/types/Room";

export function useRooms(floorId: number | null) {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (floorId === null) {
            setRooms([]);
            return;
        }

        async function loadRooms() {
            setLoading(true);

            try {
                const data = await getRoomsByFloor(floorId!);

                setRooms(data);
                setError(null);
            } catch {
                setError("Failed to load rooms.");
            } finally {
                setLoading(false);
            }
        }

        loadRooms();
    }, [floorId]);

    return {
        rooms,
        loading,
        error,
    };
}