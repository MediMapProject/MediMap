import api from "./client";
import type { Floor } from "../types/Floor";

export async function getFloorsByBuilding(
    buildingId: number
): Promise<Floor[]> {

    const response = await api.get<Floor[]>(
        "/floors/by-building",
        {
            params: {
                buildingId,
            },
        }
    );

    return response.data;
}