import { BiSearchAlt } from "react-icons/bi";
import { useRootContext } from "../../context/root_contex";

export const Navbar = () => {
    const { setIsSearchOpen } = useRootContext();

    return <nav className="p-4 border-b border-b-neutral-800 flex items-center w-full justify-between">
        <div>Logo</div>

        <div className="w-full border border-neutral-800 rounded  flex items-center transition-colors max-w-[600px] px-2" onClick={() => { setIsSearchOpen(true); }} role="button">
            <label htmlFor='searchbox'>
                <BiSearchAlt className="text-neutral-400" />
            </label>
            <div
                className="w-full appearance-none  bg-transparent focus:outline-none focus:border-none px-2 py-6 text-neutral-300" placeholder="Search"

            />
            <div className="text-xs flex min-w-[50px] mr-2 text-neutral-400">
                <p className="text-xs whitespace-nowrap"> <kbd className="px-1 py-1 bg-neutral-700 rounded font-bold">{"/"}</kbd> to search</p>
            </div>
        </div>
        <ul className="flex gap-2 items-center">
            <li>Login</li>
            <li>Register</li>
        </ul>
    </nav>;
};