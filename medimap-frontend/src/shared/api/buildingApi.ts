import api from "./client";
import type { Building } from "../types/Building";

export async function getBuildingsByHospital(
    hospitalId: string
): Promise<Building[]> {

    const response = await api.get<Building[]>(
        "/buildings/by-hospital",
        {
            params: {
                hospitalId,
            },
        }
    );

    return response.data;
}