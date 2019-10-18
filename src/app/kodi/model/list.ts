import { Limits } from './limits';

export interface List<T> {
  limits: Limits;
  movies: T[];
}
