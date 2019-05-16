import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
class SnackbarAlert extends React.Component {
  render() {
    if (this.props.isOpen === true) {
      return (
        <div>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            open={this.props.isOpen}
            autoHideDuration={2000}
            onClose={this.handleClose}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            message={<span id="message-id">{this.props.message}</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={this.props.onClose}
              >
                <CloseIcon />
              </IconButton>
            ]}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SnackbarAlert;
