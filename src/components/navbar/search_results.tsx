import { forwardRef } from "react";
import { CardResponse, CardSearchResponse } from "../../types/cards";
import { SearchError } from "../../utils/api";
import { SearchResultItem } from "./search_result_item";

interface SearchResultsProps {
    cards: CardResponse[] | null;
    max: number;
}

export const SearchResults = forwardRef<HTMLDivElement, SearchResultsProps>(({ cards, max }, ref) => {

    return <div ref={ref} className="absolute bottom-0-0 left-0 w-full pt-2 z-10">
        <div className="w-[calc(100%-16px)] border rounded border-neutral-800 mx-auto p-2 bg-neutral-900">
            {cards && cards.length > 0 ? <ul className="space-y-2">
                {cards.map((card,) => <>

                    <SearchResultItem key={card.id}  {...card} />
                </>)}
            </ul> : <div>
                No results found.
            </div>}
        </div>
    </div>;
});