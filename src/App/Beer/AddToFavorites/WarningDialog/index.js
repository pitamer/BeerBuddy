import React from "react";
import { observer } from "mobx-react";
import "./index.css";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const SlideTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogTitle = withStyles(() => ({
  root: {
    backgroundImage: "var(--light-background-image)",
  },
}))(MuiDialogTitle);

const DialogContent = withStyles(() => ({
  root: {
    backgroundImage: "var(--light-background-image)",
  },
}))(MuiDialogContent);

const DialogActions = withStyles(() => ({
  root: {
    backgroundImage: "var(--light-background-image)",
  },
}))(MuiDialogActions);

function AlertDialog(props) {
  return (
    <Dialog
      disableBackdropClick={true}
      open={props.dialogOpen}
      TransitionComponent={SlideTransition}
      keepMounted
      onClose={props.handleDialogClose}
      aria-labelledby="Confirm remove from favorites"
      aria-describedby={`Remove ${props.beerName} from favorites?`}
    >
      <DialogTitle id="Confirm remove from favorites">
        Are you sure, buddy?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id={`Remove ${props.beerName} from favorites?`}>
          <div>
            Remove <span className="warning-beer-name">{props.beerName}</span>{" "}
            from favorites?
          </div>
          <div className="warning-small-text">
            <div>
              Click anywhere on the screen to see this beer's information.
            </div>
            {/* <div>You can still add it to favorites again later, of course.</div> */}
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onMouseDown={props.confirm} color="primary">
          Remove
        </Button>
        <Button onMouseDown={props.handleDialogClose} color="primary">
          On a second thought...
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default observer(AlertDialog);
