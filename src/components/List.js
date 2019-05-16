import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { Button } from "@material-ui/core";
import FullScreenDialog from "./FullScreenDialog";
import SnackBarAlert from "./SnackBar";

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isOpen: false,
      snackIsOpen: false,
      message: "Landmark Pics Requested successfully"
    };
  }
  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  openFullScreenDialog() {
    this.setState({ isOpen: true });
  }
  landmark() {
    this.setState({ snackIsOpen: true });
  }
  render() {
    return (
      <div>
        <List>
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText
              inset
              primary="Agra - Taj Mahal"
              secondary="Click To View Details"
            />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText inset primary="PickUp Location : Agra" />
              </ListItem>
              <ListItem>
                <ListItemText inset primary="Drop Location : Taj Mahal" />
              </ListItem>
              <ListItem>
                <ListItemText
                  inset
                  primary="Order Placed Time : 3.00pm (1 min ago)"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  inset
                  primary="Customer Contact Number : 123456789"
                />
              </ListItem>
              <ListItem>
                <Button
                  style={{ marginRight: 10 }}
                  variant="contained"
                  color="primary"
                  onClick={this.openFullScreenDialog.bind(this)}
                >
                  Show All Routes
                </Button>
                <Button
                  style={{ marginRight: 10 }}
                  variant="contained"
                  color="secondary"
                  onClick={this.landmark.bind(this)}
                >
                  Request Landmark Pics
                </Button>
                <Button variant="contained" color="primary">
                  Show Route To Reach The Customer
                </Button>
              </ListItem>
            </List>
          </Collapse>
        </List>
        <FullScreenDialog
          isOpen={this.state.isOpen}
          onClose={e => {
            this.setState({ isOpen: false });
          }}
        />
        <SnackBarAlert
          isOpen={this.state.snackIsOpen}
          message={this.state.message}
          onClose={e => {
            this.setState({ snackIsOpen: false });
          }}
        />
      </div>
    );
  }
}
export default ListView;
