import React, { Component } from 'react';
import '../Game.css';

import Deck from '../models/Deck';
import Hand from '../models/Hand';

class Game extends Component {
  constructor(props) {
    super(props);

    const deck = new Deck();
    const playerHand = new Hand('Player');
    const dealerHand = new Hand('Dealer', true);
    playerHand.addCard(deck.drawCard());
    dealerHand.addCard(deck.drawCard(), true);
    playerHand.addCard(deck.drawCard());
    dealerHand.addCard(deck.drawCard());

    this.state = { deck, dealerHand, playerHand };
  }

  render() {
    return (
      <div className="Game">
        <button onClick={this.getStats}>Get Stats</button>
        <button onClick={this.hit}>Hit</button>
        <button onClick={this.stand}>Stand</button>
      </div>
    );
  }

  getStats = () => {
    const { deck, dealerHand, playerHand } = this.state;
    console.log('deck', deck);
    console.log('dealerHand', dealerHand);
    console.log('playerHand', playerHand);
  };

  hit = () => {
    const { deck, playerHand, dealerHand } = this.state;

    playerHand.addCard(deck.drawCard());

    if (dealerHand.shouldHit()) {
      dealerHand.addCard(deck.drawCard());
    }

    this.setState({ deck, playerHand });
    this.getStats();
  };

  stand = () => {};
}

export default Game;
