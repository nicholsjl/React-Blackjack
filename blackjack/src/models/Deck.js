import { SUITS, RANKS } from '../util/cards';
import Card from './Card';

export default class Deck {
  constructor() {
    this.cards = [];
    this.init();
    this.shuffle();
  }

  init() {
    const cards = [];

    for (let suit of SUITS) {
      for (let rank of RANKS) {
        cards.push(new Card(suit, rank));
      }
    }

    this.cards = [...cards];
  }

  shuffle() {
    const cards = [...this.cards];

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    this.cards = [...cards];
  }

  drawCard() {
    const cards = [...this.cards];

    if (cards.length) {
      const card = cards.pop();
      this.cards = [...cards];
      return card;
    }

    return null;
  }
}
