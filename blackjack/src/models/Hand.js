export default class Hand {
  constructor(name, isDealer = false) {
    this.name = name;
    this.publicTotal = 0;
    this.privateTotal = 0;
    this.cards = [];
  }

  addCard(card, isHidden = false) {
    this.cards.push({ isHidden, ...card });
    this.calculateTotal();
  }

  shouldHit() {
    return this.privateTotal < 17;
  }

  calculateTotal() {
    const { privateTotal } = this;
    let newPublicTotal = 0;
    let newPrivateTotal = 0;

    for (let { rank, value, isHidden } of this.cards) {
      if (rank === 'A' && privateTotal < 11) {
        newPrivateTotal += 11;
        newPublicTotal += isHidden ? 0 : 11;
      } else {
        newPrivateTotal += value;
        newPublicTotal += isHidden ? 0 : value;
      }
    }

    this.privateTotal = newPrivateTotal;
    this.publicTotal = newPublicTotal;
  }
}
