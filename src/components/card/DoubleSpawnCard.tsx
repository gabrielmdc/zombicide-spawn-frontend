import React from 'react';
import { SpecificCardProps } from './specific-card-props';
import { DoubleSpawnCard as IDoubleSpawnCard } from '../../models/double-spawn-card';

export default function DoubleSpawnCard(props: SpecificCardProps<IDoubleSpawnCard>) {
  const card = props.card;
  return (
    <div className="card card--double-spawn" onClick={props.onClick}>
      <p className="card__title">Double Spawn!</p>
      <p className="card__number">{card.number}</p>
    </div>
  );
}
