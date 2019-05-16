import React from "react";
import CustomerAppBar from "./CustomerAppBar";
import CustomerFooter from "./CustomerFooter";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import Map from "./Map";

class CustomerDashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      mapsIsOpen: false,
      footerIsOpen: false
    };
  }
  updateState(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  searchPlace() {
    this.setState({
      mapsIsOpen: true,
      footerIsOpen: true
    });
  }
  render() {
    return (
      <div>
        <CustomerAppBar />
        <div style={{ margin: 10 }}>
          <Grid container>
            <Grid item md={12} xs={12}>
              <Paper style={{ padding: 10 }}>
                <Grid container>
                  <Grid item xs={5} md={5}>
                    <TextField
                      id="outlined-name"
                      label="From"
                      margin="normal"
                      variant="outlined"
                      type="text"
                      name="from"
                      onChange={this.updateState.bind(this)}
                      style={{ width: "98%", marginRight: 10 }}
                    />
                  </Grid>
                  <Grid item xs={5} md={5}>
                    <TextField
                      id="outlined-name"
                      label="To"
                      margin="normal"
                      variant="outlined"
                      type="text"
                      name="to"
                      onChange={this.updateState.bind(this)}
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={2} md={2} style={{ marginTop: 15 }}>
                    <Button
                      variant="contained"
                      style={{ marginLeft: 10, height: "85%" }}
                      onClick={this.searchPlace.bind(this)}
                      color="secondary"
                    >
                      Search
                    </Button>
                  </Grid>
                  <Grid container>
                    <Grid item md={12} xs={12}>
                      <div id="map">
                        <Map
                          isOpen={this.state.mapsIsOpen}
                          to={this.state.to}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <CustomerFooter isOpen={this.state.footerIsOpen} />
        </div>
      </div>
    );
  }
}
export default CustomerDashBoard;
