import api from "./client";
import type { Hospital } from "../types/Hospital";

export async function getHospitals(): Promise<Hospital[]> {
    const response = await api.get<Hospital[]>("/hospitals");
    return response.data;
}