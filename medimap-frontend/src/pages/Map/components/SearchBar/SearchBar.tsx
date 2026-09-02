import { useState } from "react";

import { useSearch } from "@/shared/hooks/useSearch";

import "./SearchBar.css";

export default function SearchBar() {
    const [query, setQuery] = useState("");

    const { results, loading } = useSearch(query);

    return (
        <div className="search-bar">
            <input
                className="search-input"
                type="text"
                placeholder="Search doctor, room, department..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {query && (
                <div className="search-results">

                    {loading && (
                        <div className="search-loading">
                            Searching...
                        </div>
                    )}

                    {!loading && results.length === 0 && (
                        <div className="search-empty">
                            No results found
                        </div>
                    )}

                    {!loading &&
                        results.map((result) => (
                            <div
                                key={`${result.type}-${result.id}`}
                                className="search-item"
                            >
                                <div className="search-title">
                                    {result.title}
                                </div>

                                <div className="search-subtitle">
                                    {result.subtitle}
                                </div>

                                <span className="search-type">
                                    {result.type}
                                </span>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}