import { forwardRef, useEffect, useId, useState } from "react";
import { BiX } from "react-icons/bi";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface SearchHistoryProps {
    setQ: (str: string) => void;
}


export const SearchHistory = forwardRef<HTMLDivElement, SearchHistoryProps>(({ setQ }, ref) => {
    const { getValue, removeValue } = useLocalStorage("search-history", []);
    const [history, setHistory] = useState<string[]>([]);
    const id = useId();

    useEffect(() => {
        setHistory(getValue());
        if (typeof window !== "undefined") {
            window.addEventListener("storage", () => {
                setHistory(getValue());
            });
        }
    }, []);

    return history.length > 0 ? <div ref={ref} className="absolute bottom-0-0 left-0 w-full pt-2 z-10">
        <div className="w-[calc(100%-16px)] border rounded border-neutral-800 mx-auto p-2 bg-neutral-900">
            <div className="space-y-1">
                <h4 className="text-neutral-400">Search History</h4>

                {history.map((hist,) => <div className="hover:bg-neutral-800 p-1 rounded flex items-center justify-between" key={`${id}-${hist}`}>
                    <button className="w-full text-left text-sm" onClick={() => setQ(hist)}>
                        <p>{hist}</p>
                    </button>
                    <button className=" hover:bg-red-500 rounded" onClick={() => removeValue(hist)}>
                        <BiX />
                    </button>
                </div>)}

            </div>
        </div>
    </div> : null;
});