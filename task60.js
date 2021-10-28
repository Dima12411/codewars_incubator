/* Task:
You get any card as an argument. Your task is to return a suit of this card. */

//code:

function defineSuit(card) {
    if (card.match(/♣/g)) {
      return "clubs";
      } else if (card.match(/♠/g)) {
        return "spades";
        } else if (card.match(/♦/g)) {
        return "diamonds";
        } else 
        return "hearts";
  }