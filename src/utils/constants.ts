export const BASE_URL = "https://api.scryfall.com";
export enum SEARCH_ORDER_OPTIONS {
  "name",
  "set",
  "released",
  "rarity",
  "color",
  "usd",
  "tix",
  "eur",
  "cmc",
  "power",
  "toughness",
  "edhrec",
  "penny",
  "artist",
  "review",
}

export const IMAGE_SIZES = [
  "art_crop",
  "border_crop",
  "large",
  "normal",
  "png",
  "small",
];

export const SEARCH_FILTER_UNIQUE = {
  defaultValue: "cards",
  placeholder: "unique",
  label: "searchbox-unique",
  options: [
    {
      value: "cards",
    },
    {
      value: "art",
    },
    {
      value: "prints",
    },
  ],
  optionLabel: {
    label: "Unique",
    tip: "The unique parameter specifies if Scryfall should remove “duplicate” results in your query.",
  },
};

export const SEARCH_FILTER_ORDER = {
  defaultValue: "name",
  placeholder: "Order",
  label: "searchbox-order",
  options: [
    {
      value: "name",
      tip: "Sort cards by name, A → Z (Default)",
    },
    {
      value: "set",
      tip: "Sort cards by their set and collector number: AAA/#1 → ZZZ/#999",
    },
    {
      value: "released",
      tip: "Sort cards by their release date: Newest → Oldest",
    },
    {
      value: "rarity",
      tip: "	Sort cards by their rarity: Common → Mythic",
    },
    {
      value: "color",
      tip: "Sort cards by their color and color identity: WUBRG → multicolor → colorless",
    },
    {
      value: "usd",
      tip: "Sort cards by their lowest known U.S. Dollar price: 0.01 → highest, null last",
    },
    {
      value: "tix",
      tip: "Sort cards by their lowest known TIX price: 0.01 → highest, null last",
    },
    {
      value: "cmc",
      tip: "Sort cards by their mana value: 0 → highest",
    },
    {
      value: "power",
      tip: "Sort cards by their power: null → highest",
    },
    {
      value: "toughness",
      tip: "Sort cards by their toughness: null → highest",
    },
    {
      value: "edhrec",
      tip: "Sort cards by their EDHREC ranking: lowest → highest",
    },
    {
      value: "penny",
      tip: "Sort cards by their Penny Dreadful ranking: lowest → highest",
    },
    {
      value: "artist",
      tip: "	Sort cards by their front-side artist name: A → Z",
    },
    {
      value: "review",
      tip: "Sort cards how podcasts review sets, usually color & CMC, lowest → highest, with Booster Fun cards at the end",
    },
  ],
  optionLabel: {
    label: "Order",
    tip: "Parameter determines how Scryfall should sort the returned cards.",
  },
};

export const SEARCH_FILTER_DIRECTION = {
  defaultValue: "auto",
  placeholder: "Direction",
  label: "searchbox-sort",
  options: [
    {
      value: "auto",
    },
    {
      value: "asc",
    },
    {
      value: "desc",
    },
  ],
  optionLabel: {
    label: "Direction",
    tip: "Combined with Order, choose direction the sorting should occur",
  },
};
