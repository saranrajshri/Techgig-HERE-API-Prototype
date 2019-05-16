import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class FormDialog extends React.Component {
  redirect() {
    window.location = "/orderdashboard";
  }
  render() {
    if (this.props.isOpen === true) {
      return (
        <div>
          <Dialog
            open={this.props.isOpen}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Confirm Order Details
            </DialogTitle>
            <DialogContent>
              <DialogContentText>From : Agra</DialogContentText>
              <DialogContentText>To : Taj Mahal</DialogContentText>
              <DialogContentText>Driver Name:Saranraj</DialogContentText>
              <DialogContentText>Total Distance : 5.2 Km</DialogContentText>
              <DialogContentText>Fare : 120 Rupees</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.redirect.bind(this)} color="primary">
                Confirm Order
              </Button>
              <Button onClick={this.props.onClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    } else {
      return null;
    }
  }
}
