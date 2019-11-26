import React from 'react';
import './App.scss';
import { Card } from '../../models/card';
import { pile } from '../../data/pile';

interface State {
  card?: Card;
  cardImgPath?: string;
  
}

export default class App extends React.Component<any, State> {
  playPile: Card[];

  constructor(props: any) {
    super(props);
    this.playPile = [];
    this.state = {};
  }

  getRandomIndex(pile: Card[]) {
    return Math.floor(Math.random() * pile.length);
  }

  getRandomCard() {
    if (!this.playPile.length) {
      this.playPile = [...pile];
    }
    const randomIndex = this.getRandomIndex(this.playPile);
    const card = this.playPile.splice(randomIndex, 1)[0];
    return card;
  }
  
  pickUpCard() {
    const card = this.getRandomCard();
    const cardImgPath = 'images/' + card.number + '.png';
    this.setState({
      card,
      cardImgPath
    });
  }

  render() {
    const cardImage = this.state.card ?
      <img className="card" alt="Card" onClick={e => this.pickUpCard()} src={this.state.cardImgPath} height="700"/> :
      <img className="card" alt="Card" onClick={e => this.pickUpCard()} src='images/front.png' height="700"/>
    
    return (
    cardImage
  )};
}
