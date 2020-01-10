import React from 'react';
import './App.scss';
import Card from '../card/Card';

interface State {
  cardNumber?: number;
  playPile: number[];
  historyPile: number[];
}

export default class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      playPile: [],
      historyPile: []
    };
  }

  getNewPile() {
    const numOfCards = 54;
    const keys = Array(numOfCards).keys();
    const pile: number[] = [...Array.from(keys)].map(i => i + 1);
    return pile;
  }

  getRandomIndex(pile: number[]) {
    return Math.floor(Math.random() * pile.length);
  }

  pickUpCard() {
    const playPile = this.state.playPile.length ? [...this.state.playPile] : this.getNewPile();
    const randomIndex = this.getRandomIndex(playPile);
    const nextCardNumber = playPile.splice(randomIndex, 1)[0];
    const historyPile = [...this.state.historyPile];
    const actualCardNumber = this.state.cardNumber;
    if (actualCardNumber) {
      historyPile.unshift(actualCardNumber);
    }
    this.setState({
      cardNumber: nextCardNumber,
      historyPile,
      playPile
    });
  }

  render() {
    const cardImage = <Card number={this.state.cardNumber} onClick={() => this.pickUpCard()}/>;
    return cardImage;
  }
}
