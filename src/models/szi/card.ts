import { Card } from '../card';
import { SziLevels } from './levels';

export interface SziCard extends Card {
  levels: SziLevels;
}