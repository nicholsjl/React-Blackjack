export default class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.value = this.getValue();
  }

  getValue() {
    const { rank } = this;

    if (rank === 'A') {
      return 1;
    }

    if (rank === '10' || rank === 'J' || rank === 'Q' || rank === 'K') {
      return 10;
    }

    return parseInt(rank);
  }
}
