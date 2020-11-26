export function getCards() {
    return fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
      .then((res) => res.json())
      .catch((error) => console.log("error in fetching"));
  }