import { forwardRef } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const SearchHistory = forwardRef<HTMLDivElement>((_, ref) => {
    const { getValue } = useLocalStorage("search-history", []);
    const history = getValue();
    return <div ref={ref} className="absolute bottom-0-0 left-0 w-full pt-2 z-10">
        <div className="w-[calc(100%-16px)] border rounded border-neutral-800 mx-auto p-2 bg-neutral-900">
            <div className="px-2">
                <h4 className="text-neutral-400">Search History</h4>
                {history.map((hist) => <p>{hist}</p>)}
            </div>
        </div>
    </div>;
});