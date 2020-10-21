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

function Modal(props) {
  return (
    <Dialog
      onClose={props.handleModalClose}
      aria-labelledby="customized-dialog-title"
      open={props.modalOpen}
    >
      <MuiDialogTitle
        id="customized-dialog-title"
        onClose={props.handleModalClose}
      >
        {props.beer.name}
      </MuiDialogTitle>
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
              {props.beer.food_pairing}
            </Typography>
            <Typography
              gutterBottom
              className="dialog-first-brewed"
            >{`First brewed: ${props.beer.first_brewed}`}</Typography>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default observer(Modal);
