import React from 'react';
import { SpecificCardProps } from './specific-card-props';
import './SziCardLevel.scss';
import { SziLevel } from '../../models/szi/level';
import { Zombie } from '../../models/zombie';
import walkerIcon from '../../assets/walker.png';
import runnerIcon from '../../assets/runner.png';
import fattyIcon from '../../assets/fatty.png';
import abominationIcon from '../../assets/abomination.png';
import { SziCard as ISziCard } from '../../models/szi/card';

function getTypeName(zombie: Zombie) {
  const typeName = zombie.charAt(0).toUpperCase() + zombie.slice(1);
  return typeName;
}

function getIconScr(zombie: Zombie) {
  if (zombie === Zombie.Abomination) {
    return abominationIcon;
  }
  if (zombie === Zombie.Fatty) {
    return fattyIcon;
  }
  if (zombie === Zombie.Runner) {
    return runnerIcon;
  }
  if (zombie === Zombie.Walker) {
    return walkerIcon;
  }
  return '';
}

function renderCardLevel(level?: SziLevel) {
  if (!level) {
    return (
      <div className="szi-card-level">
        <p className="szi-card-level__type-name">Nothing<br/>in sight!</p>
      </div>
    );
  }
  return (
    <div className="szi-card-level">
      <p className="szi-card-level__type-name">{getTypeName(level.zombie)}</p>  
      <p className="szi-card-level__type-x">x</p>
      <p className="szi-card-level__type-count">{level.amount}</p>
      <img alt="Zombie icon" src={getIconScr(level.zombie)} className="szi-card-level__type-icon"/>
    </div>
  );
}

export default function SziCard(props: SpecificCardProps<ISziCard>) {
  const card = props.card;
  return (
    <div className="card card--szi" onClick={props.onClick}>
      <p className="card__title">Standard<br/>zombies invasion</p>
      <p className="card__number">{card.number}</p>
      {renderCardLevel(card.levels.red)}
      {renderCardLevel(card.levels.orange)}
      {renderCardLevel(card.levels.yellow)}
      {renderCardLevel(card.levels.blue)}
    </div>
  );
}
