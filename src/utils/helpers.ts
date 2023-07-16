import { SingleCard } from "../types/card";
import { CardResponse } from "../types/cards";

export const checkPropertyExists = (obj: Object, key: string) => {
    return Object.prototype.hasOwnProperty.call(obj, key);
};


export interface ObjItems {
    image_uri: string,
    attribution: string,
    mana_cost: string,
    type_line: string,
    cardName: string,
    hasFace: boolean;
}

type CardParamType = CardResponse | SingleCard;

export const getCardInfo = (card: CardParamType, currentFace = 0) => {

    const hasCardFaces = checkPropertyExists(card, "card_faces");
    const obj: ObjItems = {
        image_uri: "",
        attribution: "",
        mana_cost: "",
        type_line: "",
        cardName: "",
        hasFace: false
    } as ObjItems;

    if (hasCardFaces && checkPropertyExists(card.card_faces[currentFace], "image_uris")) {
        obj.image_uri = (card.card_faces[currentFace].image_uris.art_crop ?? card.card_faces[currentFace].image_uris.normal);
        obj.mana_cost = (card.card_faces[currentFace].mana_cost);
        obj.cardName = (card.card_faces[currentFace].name);
        obj.type_line = (card.card_faces[currentFace].type_line);
        obj.attribution = card.card_faces[currentFace].artist;
        obj.hasFace = true;
    } else {
        obj.image_uri = (card.image_uris.art_crop ?? card.image_uris.normal);
        obj.mana_cost = (card.mana_cost);
        obj.cardName = (card.name);
        obj.type_line = (card.type_line);
        obj.attribution = card.artist;
    }
    return obj;
};