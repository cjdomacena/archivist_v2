import { CardSearchResponse } from "../types/cards";
import { Symbology } from "../types/symbology";
import { BASE_URL, SEARCH_ORDER_OPTIONS } from "./constants";

export interface SearchParams {
  unique?: "cards" | "art" | "prints"; // Should remove duplicate in results, by default "cards" is selected,
  order?: keyof typeof SEARCH_ORDER_OPTIONS;
  dir?: "auto" | "asc" | "desc";
  include_extras?: boolean;
  include_variations?: boolean;
  page?: number;
  format?: "json" | "csv";
}

export interface SearchError {
  code: string;
  details: string;
  object: string;
  status: number;
}

export const getSearchResults = async (
  q: string,
  opts: SearchParams = {
    unique: "cards",
    order: "name",
    dir: "auto",
    include_extras: false,
    include_variations: false,
    page: 1,
    format: "json",
  }
): Promise<CardSearchResponse | null> => {
  if (q.length > 2) {
    let params = "";
    for (let [key, val] of Object.entries(opts)) {
      params += `&${key}=${encodeURIComponent(val)}`;
    }

    try {
      const d = await fetch(`${BASE_URL}/cards/search?q=${q}${params}`);
      const result = await d.json();
      return result;
    } catch (e) {
      console.log(e);
    }
  }
  return null;
};

export interface GetSymbologyResponse {
  data: Symbology[];
  object: string;
  has_more: boolean;
}
export const getSymbology = async (): Promise<GetSymbologyResponse | null> => {
  try {
    const d = await fetch(`${BASE_URL}/symbology`);
    const result: GetSymbologyResponse = await d.json();
    return result;
  } catch (error) {
    console.log(error);
  }
  return null;
};
