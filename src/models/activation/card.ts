import { Card } from '../card';
import { ActivationLevels } from './levels';

export interface ActivationCard extends Card {
  levels: ActivationLevels;
}