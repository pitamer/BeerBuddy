import React from "react";
import { observer } from "mobx-react";
import "./index.css";

import WarnongDialog from "./WarningDialog";

function AddToFavorites(props) {
  const userIsInFavorites = props.rateUp ? true : false;
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogOpen = (e) => {
    setDialogOpen(true);
  };

  const handleDialogClose = (e) => {
    e.stopPropagation();
    setDialogOpen(false);
  };
  return (
    <>
      <div
        // onMouseDown is used here instead of onClick to avoid a
        // propagation bug that starts in Beer component and Modal
        onMouseDown={(e) => {
          e.stopPropagation();
          userIsInFavorites
            ? handleDialogOpen()
            : props.toggleFavorite(props.beer);
        }}
        className={`star ${props.beer.inFavorites ? "full" : "empty"}`}
      >
        ★
      </div>
      <WarnongDialog
        dialogOpen={dialogOpen}
        handleDialogClose={handleDialogClose}
        beerName={props.beer.name}
        confirm={() => props.toggleFavorite(props.beer)}
      />
    </>
  );
}

export default observer(AddToFavorites);
