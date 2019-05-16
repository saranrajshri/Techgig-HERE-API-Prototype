import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDilog extends React.Component {
  render() {
    return (
      <Dialog
        fullScreen
        open={this.props.isOpen}
        onClose={this.handleClose}
        TransitionComponent={Transition}
      >
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={this.props.onClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Map
            </Typography>
            <Button
              color="inherit"
              style={{ marginLeft: 100 }}
              onClick={this.handleClose}
            >
              Narrate Instructions
            </Button>
          </Toolbar>
        </AppBar>
        <div>
          <Grid container style={{ marginTop: 60 }}>
            <Grid item ms={12} xs={12}>
              <iframe
                src="http://127.0.0.1:8887/new.html?wp0lat=27.1767&&wp0lon=78.0081&&wp1lat=27.1750&&wp1lon=78.0422"
                style={{ width: "99.9%", height: 550 }}
              />
            </Grid>
          </Grid>
        </div>
      </Dialog>
    );
  }
}
export default FullScreenDilog;
