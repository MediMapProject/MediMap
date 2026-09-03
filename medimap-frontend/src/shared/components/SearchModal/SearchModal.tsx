import { Search, X } from "lucide-react";
import { useState } from "react";

import { useSearch } from "@/shared/hooks/useSearch";

import "./SearchModal.css";

type Props = {
    onClose: () => void;
};

export default function SearchModal({
    onClose,
}: Props) {
    const [query, setQuery] = useState("");

    const { results, loading } = useSearch(query);

    return (
        <div className="search-modal-overlay">
            <div className="search-modal">

                <div className="search-modal__header">

                    <Search size={20} />

                    <input
                        autoFocus
                        type="text"
                        placeholder="Search doctor, room, department..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <button onClick={onClose}>
                        <X size={22} />
                    </button>

                </div>

                <div className="search-modal__results">

                    {loading && (
                        <div className="search-empty">
                            Searching...
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

                    {!loading &&
                        query &&
                        results.length === 0 && (
                            <div className="search-empty">
                                No results found
                            </div>
                        )}

                </div>

            </div>
        </div>
    );
}