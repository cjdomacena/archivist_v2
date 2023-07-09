import { useNavigate } from "react-router-dom";
import { CardResponse } from "../../types/cards";
import { checkPropertyExists } from "../../utils/helpers";
import { BiCopyright } from "react-icons/bi";
import { SymbolBadge } from "../common/symbols";

export const SearchResultItem = (card: CardResponse) => {

    const hasCardFaces = checkPropertyExists(card, "card_faces");
    const navigate = useNavigate();


    const getImage = () => {
        if (hasCardFaces && checkPropertyExists(card.card_faces[0], "image_uris")) {
            return card.card_faces[0].image_uris.art_crop ?? card.card_faces[0].image_uris.normal;
        }
        return card.image_uris.art_crop ?? card.image_uris.normal;
    };
    const getImageAttribution = () => {
        if (hasCardFaces && checkPropertyExists(card.card_faces[0], "image_uris")) {
            return card.card_faces[0].artist;
        }
        return card.artist;
    };

    return <li className="p-1" tabIndex={0}>
        <div className="flex p-2 gap-2 hover:bg-neutral-800 rounded cursor-pointer " role="link" onClick={() => navigate("/card/:title")}>
            {card.image_status === "missing" ? <div className="w-[70px] h-[70px] bg-neutral-600 rounded" /> :
                <img src={getImage()} width={80} height={50} className="rounded max-h-[80px] max-w-[80px]" />}
            <div className=" flex-grow space-y-2">
                <div>
                    {hasCardFaces ? <SymbolBadge symbol={card.card_faces[0].mana_cost} /> : <SymbolBadge symbol={card.mana_cost} />}
                    <p className="text-lg line-clamp-1 ">{hasCardFaces ? card.card_faces[0].name : card.name}</p>
                    <p className="text-xs line-clamp-1 text-neutral-400">{hasCardFaces ? card.card_faces[0].type_line : card.type_line}</p>
                </div>
                <p className="text-xs flex items-center gap-1"><BiCopyright className="mt-0.5" />{getImageAttribution()}</p>
            </div>
        </div>
    </li>;

};