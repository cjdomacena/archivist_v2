import { SEARCH_FILTER_DIRECTION, SEARCH_FILTER_ORDER, SEARCH_FILTER_UNIQUE, SEARCH_ORDER_OPTIONS } from "../../utils/constants";
import { Searchbox } from "../navbar/searchbox";
import Select from "../select";
import { Tooltip } from "./tooltip";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRootContext } from "../../context/root_contex";

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

    return <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden flex justify-center bg-neutral-900/60 backdrop-blur-sm" >
        <div className=" p-12 mt-12">
            <div className="  flex flex-col   w-fit  p-4" ref={containerRef}>
                <div className="max-w-[600px] w-[1280px] space-y-4 bg-neutral-800/50 items-center justify-center p-4 rounded relative" >
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
                    <div className=" px-2 flex items-center gap-1 my-2">
                        <Tooltip description="You can find cards that are a certain color using the c: or color: keyword, and cards that are a certain color identity using the id: or identity: keywords." />
                        <p className="text-xs text-neutral-400">Supports <a href="https://scryfall.com/docs/syntax" rel="no-referrer" className="text-blue-500 underline">fulltext search system</a></p>
                    </div>

                </div>
                <div className="px-2 w-fit flex gap-2 my-4">
                    <p className="text-xs text-neutral-300"><kbd className="bg-neutral-700 font-bold px-2 py-1 text-xs rounded">Enter</kbd> to Search</p>
                    <p className="text-xs text-neutral-300"><kbd className="bg-neutral-700 font-bold px-2 py-1 text-xs rounded">ESC</kbd> to exit</p>
                </div>

            </div>

        </div>
    </div>;
}