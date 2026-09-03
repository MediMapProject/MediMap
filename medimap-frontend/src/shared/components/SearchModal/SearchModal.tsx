import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";

import { useSearch } from "@/shared/hooks/useSearch";

import "./SearchModal.css";

type Props = {
    onClose: () => void;
};

export default function SearchModal({ onClose }: Props) {

    const [input, setInput] = useState("");
    const [query, setQuery] = useState("");

    const { results, loading } = useSearch(query);

    useEffect(() => {

        if (input.trim().length < 2) {
            setQuery("");
            return;
        }

        const timer = setTimeout(() => {
            if (input !== query) {
                setQuery(input);
            }

        }, 500);

        return () => clearTimeout(timer);

    }, [input, query]);

    return (
        <div className="search-modal-overlay">
            <div className="search-modal">

                <div className="search-modal__header">

                    <Search size={20} />

                    <input
                        autoFocus
                        type="text"
                        placeholder="Search doctor, room, department..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setQuery(input);
                            }
                        }}
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
                        input.trim().length >= 2 &&
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