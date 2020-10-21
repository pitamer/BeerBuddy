import React from "react";
import { observer } from "mobx-react";
import "./index.css";

function AddToFavorites(props) {
  return (
    <div
      onClick={() => props.toggleFavorite(props.beer)}
      className={`star ${props.beer.inFavorites ? "full" : "empty"}`}
    >
      ★
    </div>
  );
}

export default observer(AddToFavorites);
