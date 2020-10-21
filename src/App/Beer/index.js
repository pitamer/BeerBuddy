import React from "react";
import Card from "@material-ui/core/Card";
import { observer } from "mobx-react";
import "./index.css";

import AddToFavorites from "./AddToFavorites";
import Rating from "./Rating";
import Modal from "./Modal";

function Beer(props) {
  return (
    <Card className="BeerContainer">
      <div className="Beer">
        <div className="pic-and-options">
          <Rating />
          <img
            src={props.beer.image_url}
            alt={`A demo of ${props.beer.name}`}
            className="beer-pic"
          ></img>
          <AddToFavorites
            toggleFavorite={props.toggleFavorite}
            beer={props.beer}
          />
        </div>
        <div className="beer-name-container">
          <h4 className="beer-name">{props.beer.name}</h4>
        </div>
        <Modal />
      </div>
    </Card>
  );
}

export default observer(Beer);
