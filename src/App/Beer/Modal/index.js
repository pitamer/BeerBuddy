import React from "react";
import { observer } from "mobx-react";
import "./index.css";

import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogTitle = withStyles(() => ({
  root: {
    // padding: theme.spacing(2),
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    boxShadow: "0px 0px 1px white inset",
  },
}))(MuiDialogTitle);

function Modal(props) {
  const getFoodRecommendation = (foodArray) => {
    const foodPairing = [...foodArray];
    foodPairing.splice(-1, 0, "or");
    const foodPairingString = foodPairing
      .map((f) => (f === "or" ? "or" : `${f},`))
      .join(" ");
    return `Recommended alongside ${foodPairingString}`.slice(0, -1);
  };
  return (
    <Dialog
      onClose={props.handleModalClose}
      aria-labelledby="customized-dialog-title"
      open={props.modalOpen}
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={props.handleModalClose}
      >
        {props.beer.name}
      </DialogTitle>
      <DialogContent dividers>
        <div className="dialog-content-div">
          <img
            className="dialog-img"
            src={props.beer.image_url}
            alt={`A demo of ${props.beer.name}`}
          />
          <div className="dialog-info">
            <Typography gutterBottom className="dialog-tagline">
              {props.beer.tagline}
            </Typography>
            <Typography gutterBottom className="dialog-description">
              {props.beer.description}
            </Typography>
            <Typography gutterBottom className="dialog-food">
              {getFoodRecommendation(props.beer.food_pairing)}
            </Typography>
            <Typography gutterBottom className="dialog-alcohol">
              {`Alcohol: ${props.beer.abv}%`}
            </Typography>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default observer(Modal);
