import api from "./client";
import type { Department } from "../types/Department";

export async function getDepartments(): Promise<Department[]> {

    const response = await api.get<Department[]>("/departments");

    return response.data;
}