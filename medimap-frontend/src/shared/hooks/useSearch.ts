import { useEffect, useState } from "react";

import { search } from "../api/searchApi";
import type { SearchResult } from "../types/SearchResults";

export function useSearch(query: string) {
    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        async function loadResults() {
            setLoading(true);

            try {
                const data = await search(query);

                setResults(data);
                setError(null);
            } catch {
                setError("Failed to search.");
            } finally {
                setLoading(false);
            }
        }

        loadResults();
    }, [query]);

    return {
        results,
        loading,
        error,
    };
}