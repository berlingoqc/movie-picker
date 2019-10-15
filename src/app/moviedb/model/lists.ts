import { Movie } from './movie';

export interface List<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface ListDetails {
  created_by: string;
  description: string;
  favorite_count: number;
  id: string;
  items: Movie[];
  item_count: number;
  name: string;
  poster_path: string;
}
