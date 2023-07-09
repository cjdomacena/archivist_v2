import { useId } from "react";

export const SymbolBadge = ({ symbol }: { symbol: string; }) => {
    const key = useId();
    if (symbol && symbol.length > 0) {
        const mana = symbol.split(/[\{\}](?!\/)/g).filter(Boolean);
        return <ul className="flex gap-1 items-center">
            {mana.map((cost, idx) => <img src={`https://svgs.scryfall.io/card-symbols/${cost.replace("/", "")}.svg`} key={`${key}-${idx}`} width={15} height={15} alt={cost} loading="lazy" />)}
        </ul>;
    }
    return null;

};