import { forwardRef } from "react";
import { CardResponse } from "../../types/cards";
import { SearchResultItem } from "./search_result_item";

interface SearchResultsProps {
    cards: CardResponse[] | null | undefined;
    max: number;
}

export const SearchResults = forwardRef<HTMLDivElement, SearchResultsProps>(({ cards, max }, ref) => {
    return <div ref={ref} className="absolute bottom-0-0 left-0 w-full pt-2 z-10">
        <div className="w-[calc(100%-16px)] border rounded border-neutral-800 mx-auto bg-neutral-900">
            {cards && cards.length > 0 ? <ul className="space-y-2">
                {cards.map((card,) =>
                    <SearchResultItem key={card.id}  {...card} />
                )}
            </ul> : <div>
                No results found.
            </div>}
            {max > 5 ? <button className="w-full border-t border-t-neutral-800 text-sm px-4 py-2 hover:bg-neutral-800  text-center">Show all results</button> : null}
        </div>
    </div>;
});