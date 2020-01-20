import { SziCard } from '../../models/szi/card';
import { Card } from '../../models/card';

export interface SpecificCardProps<T extends Card> {
  card: T;
  onClick?: any;
}