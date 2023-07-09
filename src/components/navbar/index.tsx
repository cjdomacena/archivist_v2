import { Searchbox } from "./searchbox";

export const Navbar = () => {
    return <nav className="p-4 border-b border-b-neutral-800 flex items-center w-full justify-between">
        <div>Logo</div>

        <Searchbox />
        <ul className="flex gap-2 items-center">
            <li>Login</li>
            <li>Register</li>
        </ul>
    </nav>;
};