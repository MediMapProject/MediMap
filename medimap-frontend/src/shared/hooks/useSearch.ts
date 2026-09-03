import { useState } from "react";

import { search } from "../api/searchApi";
import type { SearchResult } from "../types/SearchResults";

export function useSearch() {

    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function searchNow(query: string) {

        if (query.trim().length < 2) {
            setResults([]);
            return;
        }

        setLoading(true);

        try {

            const data = await search(query.trim());

            setResults(data);
            setError(null);

        } catch {

            setError("Failed to search.");

        } finally {

            setLoading(false);

        }
    }

    return {
        results,
        loading,
        error,
        searchNow,
    };
}