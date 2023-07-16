import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCard } from "../../utils/api";
import { getCardInfo } from "../../utils/helpers";
import { useState } from "react";

export default function CardPage() {
    const { id } = useParams();
    const { data, status } = useQuery(["card", id], () => getCard(id), {
        retry: false
    });
    const [face, setFace] = useState(0);

    if (status === "success") {

        const card = data ? getCardInfo(data, face) : null;
        return <div>
            {card && <div>
                <h4>{card.cardName}</h4>
                <img src="" />
                <button onClick={() => setFace(prev => {
                    if (prev === 0) return 1;
                    return 0;
                })}>Face</button>
            </div>}

        </div>;
    } else {
        return <div>Loading...</div>;
    }

}
