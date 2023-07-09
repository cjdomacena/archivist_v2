export interface Symbology {
  object: string;
  symbol: string;
  svg_uri: string;
  loose_variant: string | null;
  english: string;
  transposable: boolean;
  represents_mana: boolean;
  appears_in_mana_costs: boolean;
  mana_value: number;
  cmc: number;
  funny: boolean;
  colors: string[];
  gatherer_alternates: string[] | null;
}
