
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";


interface RootContextProps {
    isSearchOpen: boolean,
    setIsSearchOpen: Dispatch<SetStateAction<boolean>>;
}

const RootContext = createContext({} as RootContextProps);


export function RootContextProvider({ children }: { children: React.ReactNode; }) {

    const [isSearchOpen, setIsSearchOpen] = useState(false);




    return <RootContext.Provider value={{ isSearchOpen, setIsSearchOpen }}>
        {children}
    </RootContext.Provider>;
}

export function useRootContext() {
    const context = useContext(RootContext);
    return context;
}