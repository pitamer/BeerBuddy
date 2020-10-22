import React from "react";
import Card from "@material-ui/core/Card";
import { observer } from "mobx-react";
import "./index.css";

import AddToFavorites from "./AddToFavorites";
import Rating from "./Rating";
import Modal from "./Modal";

function Beer(props) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    // onMouseDown is used here instead of onClick to avoid a strage
    // bug in Material-UI thet prevents dialogs from closing when opened
    // from components with specific behavior.
    <Card className="BeerContainer" onMouseDown={handleModalOpen}>
      <div className="Beer">
        <div className="pic-and-options">
          <Rating
            score={props.beer.score}
            rateUp={() => props.rateUp(props.beer)}
            rateDown={() => props.rateDown(props.beer)}
            displayRating={props.displayedFromFavorites}
          />
          <img
            src={props.beer.image_url}
            alt={`A demo of ${props.beer.name}`}
            className="beer-pic"
          ></img>
          <AddToFavorites
            toggleFavorite={props.toggleFavorite}
            alertBeforeRemoving={props.displayedFromFavorites}
            beer={props.beer}
          />
        </div>
        <div className="beer-name-container">
          <h4 className="beer-name">{props.beer.name}</h4>
        </div>
        <Modal
          beer={props.beer}
          modalOpen={modalOpen}
          handleModalOpen={handleModalOpen}
          handleModalClose={handleModalClose}
          setModalOpen={setModalOpen}
        />
      </div>
    </Card>
  );
}

export default observer(Beer);
