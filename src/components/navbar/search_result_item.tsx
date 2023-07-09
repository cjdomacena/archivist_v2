import { useNavigate } from "react-router-dom";
import { CardResponse } from "../../types/cards";
import { checkPropertyExists } from "../../utils/helpers";

export const SearchResultItem = (card: CardResponse) => {

    const hasCardFaces = checkPropertyExists(card, "card_faces");
    const navigate = useNavigate();

    const getImage = () => {
        if (hasCardFaces && checkPropertyExists(card.card_faces[0], "image_uris")) {
            return card.card_faces[0].image_uris.small ?? card.card_faces[0].image_uris.normal;
        }
        return card.image_uris.small ?? card.image_uris.normal;
    };

    return <li className="flex p-2 gap-2 hover:bg-neutral-800 rounded cursor-pointer" role="link" onClick={() => navigate("/card/:title")}>
        {card.image_status === "missing" ? <div className="w-[70px] h-[70px] bg-neutral-600 rounded" /> :
            <img src={getImage()} width={60} height={60} className="rounded" />}
        <div>
            <p className="text-lg">{hasCardFaces ? card.card_faces[0].name : card.name}</p>
            <p>{hasCardFaces ? card.card_faces[0].type_line : card.type_line}</p>
        </div>
    </li>;

};