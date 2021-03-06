import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DeckForm from "../Forms/DeckForm";
import { readDeck } from "../utils/api";

function EditDeck({ currentDeck, setCurrentDeck }) {
  const params = useParams();

  // UseEffect to set current Deck.
  useEffect(() => {
    readDeck(params.deckId).then(setCurrentDeck);
  }, [params.deckId, setCurrentDeck]);

  return (
    // Render Edit Deck Form.
    <div>
      <h5 className={"bg-light p-2"}>
        <Link to="/">Home</Link>
        {" / "}
        <Link to={`/decks/${currentDeck.id}`}>{currentDeck.name}</Link>
        {" / "}
        <div>Edit Deck</div>
      </h5>
      <h1>Edit Deck</h1>
      <DeckForm setCurrentDeck={setCurrentDeck} currentDeck={currentDeck} />
    </div>
  );
}

export default EditDeck;
