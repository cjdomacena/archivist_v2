import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

export default function RootLayout() {
    return <main className="min-h-screen">
        <Navbar />
        <section className="container mx-auto my-12">
            <Outlet />
        </section>
    </main>;
}