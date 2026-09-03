import api from "./client";

import type { Room } from "@/shared/types/Room";

export async function getRoomsByFloor(
    floorId: string,
): Promise<Room[]> {

    const response = await api.get<Room[]>(
        "/rooms/by-floor",
        {
            params: {
                floorId,
            },
        },
    );

    return response.data;
}