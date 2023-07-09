import { ChangeEvent, useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { BiLoaderAlt, BiSearchAlt } from 'react-icons/bi';
import * as _ from 'lodash';
import { useQuery } from '@tanstack/react-query';
import { getSearchResults } from '../../utils/api';
import { SearchResults } from './search_results';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { SearchHistory } from './search_history';

export const Searchbox = () => {

    const [q, setQ] = useState("");
    const { getValue, setValue } = useLocalStorage("search-history", []);
    getValue();
    const { refetch, isFetching, data: result, isFetched } = useQuery(["search", q], () => {
        if (q.length > 2) {
            setValue(q);
        }
        return getSearchResults(q);
    }, {
        enabled: false,
        retry: false
    });

    const [displayHistory, setDisplayHistory] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const resultsRef = useRef(null);
    useEffect(() => {
        const timeout = setTimeout(refetch, 500);
        return () => clearTimeout(timeout);
    }, [q]);

    useEffect(() => {

        document.addEventListener("mouseup", (e) => {
            console.log(e.target);
            if (!containerRef.current?.contains(e.target as Node)) {
                setShowResults(false);
                setDisplayHistory(false);
            } else {
                setShowResults(true);
            }
        });
    }, []);


    return <div className='flex-1 max-w-[420px] px-2 w-full relative' ref={containerRef}>
        <div className="w-full border px-2 border-neutral-800 rounded focus-within:border-blue-500 flex items-center transition-colors">
            <label htmlFor='searchbox'>
                {isFetching ? <BiLoaderAlt className="text-neutral-400 animate-spin" /> : <BiSearchAlt className="text-neutral-400" />}
            </label>
            <input onFocus={() => setDisplayHistory(true)}
                id='searchbox' className="w-full appearance-none bg-transparent focus:outline-none focus:border-none p-2 text-neutral-300" placeholder="Search" value={q} onChange={(e) => setQ(e.currentTarget.value)} />
        </div>
        {result && result.data && isFetched && showResults ? <SearchResults ref={resultsRef} cards={result.data?.slice(0, Math.min(5, result.total_cards))} max={result.total_cards} /> : null}
        {displayHistory && q.length === 0 && !result ? <SearchHistory ref={resultsRef} /> : null}
    </div>;
};