import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getCardQuery } from '../../services/graphql/common-queries/get-card-query';
import { Card as ICard } from '../../models/card';
import { SziCard as ISziCard } from '../../models/szi/card';
import { NecromancerCard as INecromancerCard } from '../../models/necromancer-card';
import { DoubleSpawnCard as IDoubleSpawnCard } from '../../models/double-spawn-card';
import { ActivationCard as IActivationCard } from '../../models/activation/card';
import { CardProps } from './card-props';
import './Card.scss';
import SziCard from './SziCard';
import ActivationCard from './ActivationCard';
import { CardType } from '../../models/card-type';
import BackCard from './BackCard';
import DoubleSpawnCard from './DoubleSpawnCard';
import NecromancerCard from './NecromancerCard';

export default function Card(props: CardProps) {
  const number = props.number;
  const skip = !number;
  const queryResult = useQuery(getCardQuery, { variables: { number }, skip });
  if (skip) {
    return <BackCard onClick={props.onClick} />
  }
  
  if (queryResult.loading) {
    return <p>Loading...</p>;
  }
  if (queryResult.error) {
    console.error(queryResult.error);
    return <p>Error!</p>;
  }
  if (!queryResult.data) {
    return <p>No idea...: {queryResult.error}</p>
  }
  const card: ICard = queryResult.data.getCard;

  if (card.type === CardType.Szi) {
    return <SziCard card={card as ISziCard} onClick={props.onClick} />
  }

  if (card.type === CardType.Activation) {
    return <ActivationCard card={card as IActivationCard} onClick={props.onClick} />
  }

  if (card.type === CardType.DoubleSpawn) {
    return <DoubleSpawnCard card={card as IDoubleSpawnCard} onClick={props.onClick} />
  }

  if (card.type === CardType.Necromancer) {
    return <NecromancerCard card={card as INecromancerCard} onClick={props.onClick} />
  }

  return <p onClick={props.onClick}>Click again!</p>
}
