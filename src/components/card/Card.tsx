import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getCardQuery } from '../../services/graphql/common-queries/get-card-query';
import { CardProps } from './card-props';
import './Card.scss';

export default function Card(props: CardProps) {
  const number = props.number;
  const skip = !number;
  const queryResult = useQuery(getCardQuery, { variables: { number }, skip });
  if (skip) {
    return (
      <img
        className='card'
        alt='Card'
        onClick={props.onClick}
        src='images/front.png'
        height='700'
      />
    );
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
  const card = queryResult.data.getCard;
  const cardImgPath = 'images/' + card.number + '.png';
  return (
    <img
        className='card'
        alt='Card'
        onClick={props.onClick}
        src={cardImgPath}
        height='700'
      />
  );
}
