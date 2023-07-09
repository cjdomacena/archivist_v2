import { ChangeEvent, useCallback, useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react';
import { BiLoaderAlt, BiSearchAlt, BiX } from 'react-icons/bi';
import * as _ from 'lodash';
import { useQuery } from '@tanstack/react-query';
import { SearchParams, getSearchResults } from '../../utils/api';
import { SearchResults } from './search_results';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Badge } from '../common/badge';



export const Searchbox = (props: SearchParams) => {

    const [q, setQ] = useState("");
    const { getValue, setValue, removeValue } = useLocalStorage("search-history", []);
    const [history, setHistory] = useState<string[]>([]);
    const { refetch, isFetching, data: result, isFetched } = useQuery(["search", q, props.unique, props.order, props.dir, props.page], () => {
        if (q.length > 2) {
            setValue(q);
        }
        return getSearchResults(q, props);
    }, {
        enabled: false,
        retry: false
    });

    const [showResults, setShowResults] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const resultsRef = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        const timeout = setTimeout(refetch, 500);
        return () => clearTimeout(timeout);
    }, [q, props]);

    const handleMouseUp = useCallback((e: MouseEvent) => {
        if (!containerRef.current?.contains(e.target as Node)) {
            setShowResults(false);
        } else {
            setShowResults(true);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("mouseup", handleMouseUp);
        return () => document.removeEventListener("mouseup", handleMouseUp);
    }, []);

    useEffect(() => {
        setHistory(getValue());
        if (typeof window !== "undefined") {
            window.addEventListener("storage", () => {
                setHistory(getValue());
            });
        }
    }, []);


    return <div className='flex-1 max-w-[600px] px-2 w-full relative' ref={containerRef}>
        <div className="w-full border px-2 border-neutral-800 rounded focus-within:border-blue-500 flex items-center transition-colors">
            <label htmlFor='searchbox'>
                {isFetching ? <BiLoaderAlt className="text-neutral-400 animate-spin" /> : <BiSearchAlt className="text-neutral-400" />}
            </label>
            <input ref={inputRef}
                id='searchbox' className="w-full appearance-none bg-transparent focus:outline-none focus:border-none px-2 py-4 text-neutral-300" placeholder="Search" value={q}
                onChange={(e) => {
                    if (e.currentTarget.value !== "/") setQ(e.currentTarget.value);
                }}
                autoFocus

            />
        </div>
        {result && isFetched && showResults ? <SearchResults ref={resultsRef} cards={result.data?.slice(0, Math.min(5, result.total_cards))} max={result.total_cards} /> : null}
        {history.length > 0 ? <div className='p-2 text-xs text-neutral-400 gap-2 space-y-2'>
            <p>Recently searched </p>
            <ul className='flex gap-2 items-center'>
                {history.map((val) => <li className='text-neutral-200 flex' key={`history-${val}`}>

                    <button onClick={() => setQ(val)}><Badge className='flex items-center rounded-l hover:bg-neutral-800'>{val}</Badge></button>
                    <button className='bg-neutral-700 border-l border-l-neutral-600 rounded-r px-0.5 hover:bg-red-500' onClick={() => removeValue(val)}><BiX className="w-4 h-4" /></button>
                </li>)}
            </ul>
        </div> : <div className='h-[38px] mt-2' />}
    </div>;
};