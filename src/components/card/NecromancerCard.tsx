import React from 'react';
import { SpecificCardProps } from './specific-card-props';
import { NecromancerCard as INecromancerCard } from '../../models/necromancer-card';

export default function NecromancerCard(props: SpecificCardProps<INecromancerCard>) {
  const card = props.card;
  return (
    <div className="card card--necromancer" onClick={props.onClick}>
      <p className="card__title">Necromancer!</p>
      <p className="card__number">{card.number}</p>
    </div>
  );
}
