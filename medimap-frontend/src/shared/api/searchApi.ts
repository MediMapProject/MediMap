import api from "./client";
import type { SearchResult } from "../types/SearchResults";

export async function search(
    query: string
): Promise<SearchResult[]> {

    const response = await api.get<SearchResult[]>(
        "/search",
        {
            params: {
                query,
            },
        }
    );

    return response.data;
}