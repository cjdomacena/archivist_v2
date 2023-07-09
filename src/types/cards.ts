export interface CardSearchResponse {
  data: CardResponse[] | null;
  has_more: boolean;
  object: string;
  total_cards: number;
}

export interface CardFaces {
  artist: string;
  artist_id: string;
  colors: string[];
  illustration_id: string;
  image_uris: ImageUris;
  mana_cost: string;
  name: string;
  object: string;
  oracle_text: string;
  type_line: string;
}

export interface CardResponse {
  card_faces: CardFaces[];
  object: string;
  id: string;
  oracle_id: string;
  multiverse_ids: number[];
  tcgplayer_id: number;
  cardmarket_id: number;
  name: string;
  lang: string;
  released_at: string;
  uri: string;
  scryfall_uri: string;
  layout: string;
  highres_image: boolean;
  image_status: string;
  image_uris: ImageUris;
  mana_cost: string;
  cmc: number;
  type_line: string;
  oracle_text: string;
  power: string;
  toughness: string;
  colors: string[];
  color_identity: string[];
  keywords: string[];
  all_parts: AllPart[];
  legalities: Legalities;
  games: string[];
  reserved: boolean;
  foil: boolean;
  nonfoil: boolean;
  finishes: string[];
  oversized: boolean;
  promo: boolean;
  reprint: boolean;
  variation: boolean;
  set_id: string;
  set: string;
  set_name: string;
  set_type: string;
  set_uri: string;
  set_search_uri: string;
  scryfall_set_uri: string;
  rulings_uri: string;
  prints_search_uri: string;
  collector_number: string;
  digital: boolean;
  rarity: string;
  flavor_text: string;
  card_back_id: string;
  artist: string;
  artist_ids: string[];
  illustration_id: string;
  border_color: string;
  frame: string;
  security_stamp: string;
  full_art: boolean;
  textless: boolean;
  booster: boolean;
  story_spotlight: boolean;
  edhrec_rank: number;
  preview: Preview;
  prices: Prices;
  related_uris: RelatedUris;
  purchase_uris: PurchaseUris;
}

export interface ImageUris {
  small: string;
  normal: string;
  large: string;
  png: string;
  art_crop: string;
  border_crop: string;
}

export interface AllPart {
  object: string;
  id: string;
  component: string;
  name: string;
  type_line: string;
  uri: string;
}

export interface Legalities {
  standard: string;
  future: string;
  historic: string;
  gladiator: string;
  pioneer: string;
  explorer: string;
  modern: string;
  legacy: string;
  pauper: string;
  vintage: string;
  penny: string;
  commander: string;
  oathbreaker: string;
  brawl: string;
  historicbrawl: string;
  alchemy: string;
  paupercommander: string;
  duel: string;
  oldschool: string;
  premodern: string;
  predh: string;
}

export interface Preview {
  source: string;
  source_uri: string;
  previewed_at: string;
}

export interface Prices {
  usd: string;
  usd_foil: any;
  usd_etched: any;
  eur: string;
  eur_foil: any;
  tix: any;
}

export interface RelatedUris {
  gatherer: string;
  tcgplayer_infinite_articles: string;
  tcgplayer_infinite_decks: string;
  edhrec: string;
}

export interface PurchaseUris {
  tcgplayer: string;
  cardmarket: string;
  cardhoarder: string;
}
