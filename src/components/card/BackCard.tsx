import React from 'react';
import './Card.scss';
import { BackCardProps } from './back-card-props';
import backIcon from '../../assets/back.png';

export default function BackCard(props: BackCardProps) {
  return (
    <img
      className='card'
      alt='Card'
      onClick={props.onClick}
      src={backIcon}
      height='700'
    />
  );
}