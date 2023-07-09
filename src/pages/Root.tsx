import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import SearchOverlay from "../components/common/search_overlay";
import { useRootContext } from "../context/root_contex";
import { useEffect } from "react";

export default function RootLayout() {
    const { isSearchOpen, setIsSearchOpen } = useRootContext();
    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            e.stopPropagation();
            if (e.code === "Slash") {
                setIsSearchOpen(true);
            } else if (e.code === "Escape") {
                setIsSearchOpen(false);
            }
        });
    }, []);
    return <main className="min-h-screen">
        <Navbar />
        <section className="container mx-auto my-12">
            <Outlet />
            {isSearchOpen ? <SearchOverlay /> : null}
        </section>
    </main>;
}