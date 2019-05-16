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
import FormDialog from "./Dialog";
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ShowDrivers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogIsOpen: false
    };
  }
  confirmOrder() {
    this.setState({
      dialogIsOpen: true
    });
  }
  render() {
    return (
      <Dialog
        fullScreen
        open={this.props.isOpen}
        onClose={this.handleClose}
        TransitionComponent={Transition}
      >
        <AppBar color="secondary">
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={this.props.onClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Available Drivers
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <Grid container style={{ marginTop: 60, padding: 10 }}>
            <Grid item ms={12} xs={12}>
              <List>
                <Divider />
                <ListItem>
                  <ListItemText primary="Driver Name : Saranraj" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Vechile Number : ABC123" />
                </ListItem>
                <ListItem>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.confirmOrder.bind(this)}
                  >
                    Hire Driver
                  </Button>
                </ListItem>
              </List>
              <Divider />
              <List>
                <Divider />
                <ListItem>
                  <ListItemText primary="Driver Name : Arun" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Vechile Number : XYZ123" />
                </ListItem>
                <ListItem>
                  <Button variant="contained" color="primary">
                    Hire Driver
                  </Button>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <FormDialog
            isOpen={this.state.dialogIsOpen}
            onClose={e => {
              this.setState({ dialogIsOpen: false });
            }}
          />
        </div>
      </Dialog>
    );
  }
}
export default ShowDrivers;
