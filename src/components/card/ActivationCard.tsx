import React from 'react';
import { SpecificCardProps } from './specific-card-props';
import './ActivationCardLevel.scss';
import { ActivationLevel } from '../../models/activation/level';
import { Zombie } from '../../models/zombie';
import walkersIcon from '../../assets/walkers.png';
import runnersIcon from '../../assets/runners.png';
import fattiesIcon from '../../assets/fatties.png';
import { ActivationCard as IActivationCard } from '../../models/activation/card';

function getTypeName(zombie: Zombie) {
  if (zombie === Zombie.Fatty) {
    return 'Fatties';
  }
  const typeName = zombie.charAt(0).toUpperCase() + zombie.slice(1) + 's';
  return typeName;
}

function getTypeDescription(zombie: Zombie) {
  const typeName = getTypeName(zombie);
  const description = 'All Standard ' + typeName;
  return description;
}

function getIconScr(zombie: Zombie) {
  if (zombie === Zombie.Fatty) {
    return fattiesIcon;
  }
  if (zombie === Zombie.Runner) {
    return runnersIcon;
  }
  if (zombie === Zombie.Walker) {
    return walkersIcon;
  }
  return '';
}

function renderCardLevel(level?: ActivationLevel) {
  if (!level) {
    return (
      <div className="activation-card-level">
        <p className="activation-card-level__type-name">No one</p>
      </div>
    );
  }
  return (
    <div className="activation-card-level">
      <p className="activation-card-level__type-name">{getTypeDescription(level.zombie)}</p>
      <img alt="Zombie icon" src={getIconScr(level.zombie)} className="activation-card-level__type-icon"/>
    </div>
  );
}

export default function ActivationCard(props: SpecificCardProps<IActivationCard>) {
  const card = props.card;
  return (
    <div className="card card--activation" onClick={props.onClick}>
      <p className="card__title">Standard<br/>zombies invasion</p>
      <p className="card__number">{card.number}</p>
      {renderCardLevel(card.levels.red)}
      {renderCardLevel(card.levels.orange)}
      {renderCardLevel(card.levels.yellow)}
      {renderCardLevel(card.levels.blue)}
    </div>
  );
}
