import React, { useState } from "react";
import classNames from "../../utils/class-names";

function FlashCard({ handleNext, deck = { cards: [] }, cardId = 0 }) {
  const { cards } = deck;
  const card = cards[cardId] || {};
  const [side, setSide] = useState(true);

  function flipCard() {
    setSide(!side);
  }

  const nextButton = !side ? (
    <button
      className="btn btn-primary btn-next"
      onClick={() => {
        setSide(true);
        handleNext();
      }}
    >
      Next
    </button>
  ) : (
    ""
  );
  //step one when button is pushed side changes from true to false
  console.log("SIDE", side);
  //console.log out button to screen .
  //step two condition renderering of what's being displayed to the page based on the buttons value
//review what alfonso and I did to inspect what is happening in the code line by line trust but verify
  return (
    <div className="card my-1 front">
      <div
      
        className={
          classNames({
          "card-body": true,
          front: side,
          back: !side,
        })}
      >
        <h5 className="card-title">
          Card {cardId + 1} of {cards.length}
        </h5>
        {/* <span>{`SIDE ${side}`}</span> */}
        {side ? (
          <p className="card-text front-text">{card.front}</p>
        ) : (
          <p className="card-text back-text">{card.back}</p>
        )}
        <button className="btn btn-secondary" onClick={flipCard}>
          Flip
        </button>
        {nextButton}
      </div>
    </div>
  );
}

export default FlashCard;
