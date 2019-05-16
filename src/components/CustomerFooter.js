import React from "react";
import { Typography, Divider, Button } from "@material-ui/core";
import ShowDrivers from "./ShowDrivers";
const styles = {
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: "#fff",
    padding: 10
  }
};
class CustomerFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
      showDriversIsOpen: false
    };
  }
  showDrivers() {
    this.setState({
      showDriversIsOpen: true
    });
  }
  render() {
    if (this.props.isOpen === true) {
      return (
        <div style={styles.footer}>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.showDrivers.bind(this)}
          >
            Show Available Drivers
          </Button>
          <ShowDrivers
            isOpen={this.state.showDriversIsOpen}
            onClose={e => {
              this.setState({ showDriversIsOpen: false });
            }}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}
export default CustomerFooter;
