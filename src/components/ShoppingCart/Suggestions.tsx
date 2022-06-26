import React, { Fragment } from "react";

type SuggestionsProps = {
    suggestions: string[];
    searchTerm: string;
    onSuggestionClick: (item: string) => void;
};

export const Suggestions = (props: SuggestionsProps) => {
    const { suggestions, searchTerm, onSuggestionClick } = props;
    return (
        <Fragment>
            {suggestions.length > 0 ? (
                <ul className="suggestions">
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion}
                            className="suggestion"
                            onClick={() => onSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            ) : (
                <Fragment>
                    {searchTerm.length > 0 && (
                        <div className="not-found">No suggestions found</div>
                    )}
                </Fragment>
            )}
        </Fragment>
    );
};
