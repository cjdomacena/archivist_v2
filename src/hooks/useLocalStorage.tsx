import { useCallback } from "react";


export function useLocalStorage(key: string,
    initialValue: string[]) {

    const getValue = useCallback(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }

        const item = window.localStorage.getItem(key);
        if (!item) {
            window.localStorage.setItem(key, JSON.stringify(initialValue));
        }
        return item ? JSON.parse(item) as string[] : initialValue;
    }, [key, initialValue]);

    const setValue = (newVal: string) => {
        if (typeof window !== 'undefined') {
            const val = getValue();
            if (!val.includes(newVal)) {
                val.push(newVal);
            } else {
                const removeIdx = val.indexOf(newVal);
                val.splice(removeIdx, 1);
                val.push(newVal);
            }
            const reversedVal = val.reverse();
            window.localStorage.setItem(key, JSON.stringify(reversedVal));
        }
    };

    const removeValue = (valToRemove: string) => {
        if (typeof window !== 'undefined') {
            const val = getValue();
            if (val.includes(valToRemove)) {
                const removeIdx = val.indexOf(valToRemove);
                val.splice(removeIdx, 1);
            }
            window.localStorage.setItem(key, JSON.stringify(val));
            window.dispatchEvent(new Event("storage"));
        }
    };
    return { getValue, setValue, removeValue };
}