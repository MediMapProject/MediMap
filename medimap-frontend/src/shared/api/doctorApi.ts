import api from "./client";

import type { Doctor } from "@/shared/types/Doctor";

export async function getDoctorsByRoom(
    roomId: string,
): Promise<Doctor[]> {
    const response = await api.get<Doctor[]>(
        "/doctors/by-room",
        {
            params: {
                roomId,
            },
        },
    );

    return response.data;
}