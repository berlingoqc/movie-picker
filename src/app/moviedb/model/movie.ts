export interface MovieList {
  description: string;
  favorite_count: number;
  id: number;
  item_count: number;
  list_type: string;
  name: string;
  poster_path: any;
}

export interface Movie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
