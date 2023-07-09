import { AiFillInfoCircle, AiOutlineQuestion, AiOutlineQuestionCircle } from "react-icons/ai";
import { SEARCH_FILTER_DIRECTION, SEARCH_FILTER_ORDER, SEARCH_FILTER_UNIQUE, SEARCH_ORDER_OPTIONS } from "../../utils/constants";
import { Searchbox } from "../navbar/searchbox";
import Select from "../select";
import { Tooltip } from "./tooltip";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRootContext } from "../../context/root_contex";


const filters = [{
    defaultValue: "cards",
    placeholder: "unique",
    label: "searchbox-unique",
    options: [{
        value: "cards",
    },
    {
        value: "art",
    },
    {
        value: "prints",
    }
    ],
    optionLabel: { label: "Unique", tip: "The unique parameter specifies if Scryfall should remove “duplicate” results in your query." }
},
{
    defaultValue: "order",
    placeholder: "Sort",
    label: "searchbox-unique",
    options: [{
        value: "name",
    },
    {
        value: "set",
    },
    {
        value: "released",
    },
    {
        value: "rarity",
    }, {
        value: "color",
    }, {
        value: "usd",
    }, {
        value: "tix",
    },
    {
        value: "cmc",
    }, {
        value: "power",
    }, {
        value: "toughness",
    }, {
        value: "edhrec",
    }, {
        value: "penny",
    },
    {
        value: "artist",
    },
    {
        value: "review",
    },
    ],
    optionLabel: { label: "Unique", tip: "The unique parameter specifies if Scryfall should remove “duplicate” results in your query." }
}
];

export default function SearchOverlay() {

    const [unique, setUnique] = useState(SEARCH_FILTER_UNIQUE.defaultValue);
    const [order, setOrder] = useState(SEARCH_FILTER_ORDER.defaultValue);
    const [dir, setDir] = useState(SEARCH_FILTER_DIRECTION.defaultValue);
    const containerRef = useRef<HTMLDivElement>(null);
    const { setIsSearchOpen } = useRootContext();

    const resetFilters = () => {
        setUnique(SEARCH_FILTER_UNIQUE.defaultValue);
        setOrder(SEARCH_FILTER_ORDER.defaultValue);
        setDir(SEARCH_FILTER_DIRECTION.defaultValue);
    };
    const handleMouseUp = useCallback((e: MouseEvent) => {
        if (!containerRef.current?.contains(e.target as Node)) {
            setIsSearchOpen(false);
        }
    }, []);
    useEffect(() => {
        document.addEventListener("mouseup", handleMouseUp);
        return () => document.removeEventListener("mouseup", handleMouseUp);
    }, []);

    return <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden bg-neutral-900/60 backdrop-blur-sm" >
        <div className="h-1/2 flex flex-col items-center justify-center w-full" >
            <div className="max-w-[600px] w-full space-y-4" ref={containerRef}>
                <ul className="px-2 flex gap-2 items-center">
                    <li>
                        <Select {...SEARCH_FILTER_UNIQUE} handleChange={(e) => setUnique(e)} value={unique} />
                    </li>
                    <li>
                        <Select {...SEARCH_FILTER_ORDER} handleChange={(e) => setOrder(e)} value={order} />
                    </li>
                    <li>
                        <Select {...SEARCH_FILTER_DIRECTION} handleChange={(e) => setDir(e)} value={dir} />
                    </li>
                    <li>
                        <button className="text-xs p-2" onClick={resetFilters}>Clear Filters</button>
                    </li>
                </ul>

                <Searchbox order={order as keyof typeof SEARCH_ORDER_OPTIONS} unique={unique as "cards" | "art" | "prints"} dir={dir as "auto" | "asc" | "desc"} />
                <div className="px-2 w-fit ml-auto flex gap-2">
                    <p className="text-xs text-neutral-300"><kbd className="bg-neutral-700 font-bold px-2 py-1 text-xs rounded">Enter</kbd> to Search</p>
                    <p className="text-xs text-neutral-300"><kbd className="bg-neutral-700 font-bold px-2 py-1 text-xs rounded">ESC</kbd> to exit</p>
                </div>
                <div className=" px-2 flex items-center gap-1">
                    <Tooltip description="You can find cards that are a certain color using the c: or color: keyword, and cards that are a certain color identity using the id: or identity: keywords." />
                    <p className="text-xs text-neutral-400">Supports <a href="https://scryfall.com/docs/syntax" rel="no-referrer" className="text-blue-500 underline">fulltext search system</a> from Scryfall</p>
                </div>
            </div>
        </div>
    </div>;
}