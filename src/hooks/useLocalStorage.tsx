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
            }
            window.localStorage.setItem(key, JSON.stringify(val));
        }
    };
    return { getValue, setValue };
}