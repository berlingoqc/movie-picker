import { Limits } from './limits';

export interface QueryParam {
  filter?: any;
  limits?: Limits;
  properties?: string[];
}
