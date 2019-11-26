import { Card } from "../models/card";
import sziData from './szi.json';
import doubleSpawnData from './double-spawn.json';
import activationData from './activation.json';
import necromancerData from './necromancer.json';

export const pile: Card[] = [
  ...sziData,
  ...doubleSpawnData,
  ...activationData,
  ...necromancerData
];