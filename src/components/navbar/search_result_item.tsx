import { BiCopyright } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CardResponse } from "../../types/cards";
import { getCardInfo } from "../../utils/helpers";
import { SymbolBadge } from "../common/symbols";

export const SearchResultItem = (card: CardResponse) => {
    const face = 0;
    const { cardName, image_uri, attribution, mana_cost, type_line } = getCardInfo(card, face);



    return <li className="p-1" tabIndex={0}>
        <Link to={`/card/${card.id}`} className="flex p-2 gap-2 hover:bg-neutral-800 rounded cursor-pointer " role="button">
            {card.image_status === "missing" ? <div className="w-[70px] h-[70px] bg-neutral-600 rounded" /> :
                <img src={image_uri} width={80} height={50} className="rounded max-h-[80px] max-w-[80px]" />}
            <div className=" flex-grow space-y-2">
                <div>
                    <SymbolBadge symbol={mana_cost} />
                    <p className="text-lg line-clamp-1 ">{cardName}</p>
                    <p className="text-xs line-clamp-1 text-neutral-400">{type_line}</p>
                </div>
                <p className="text-xs flex items-center gap-1"><BiCopyright className="mt-0.5" />{attribution}</p>
            </div>
        </Link>
    </li>;

};