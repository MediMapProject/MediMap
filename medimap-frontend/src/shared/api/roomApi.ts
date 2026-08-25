import api from "./client";
import type { Room } from "../types/Room";

export async function getRoomsByFloor(
    floorId: number
): Promise<Room[]> {

    const response = await api.get<Room[]>(
        "/rooms/by-floor",
        {
            params: {
                floorId,
            },
        }
    );

    return response.data;
}