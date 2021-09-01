// The user can update the form and figure out auto fill loading bug

import React, { useEffect } from "react";
import { readDeck } from "../utils/api";
import { Link, useHistory, useParams } from "react-router-dom";

function EditDeck({ currentDeck, setCurrentDeck }) {
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    readDeck(params.deckId).then(setCurrentDeck);
  }, []);

  return (
    <div>
      <h2>
        <Link to="/">Home</Link> /{" "}
        <Link to="/decks/:deckId">{currentDeck.name}</Link> / Edit Deck
      </h2>
      <h1>Edit Deck</h1>
      <form>
        <label for="deckName">Name</label>
        <input
          id="deckName"
          name="deckName"
          defaultValue={currentDeck.name}
          type="text"
        ></input>
        <label for="deckDes">Description</label>
        <textarea
          id="deckDes"
          name="deckDes"
          defaultValue={currentDeck.description}
        ></textarea>
        <button onClick={() => history.push("/")}>Cancel</button>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditDeck;
