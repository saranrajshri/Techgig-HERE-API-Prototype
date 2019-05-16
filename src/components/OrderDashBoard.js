import React from "react";
import CustomerAppBar from "./CustomerAppBar";
import { Divider, Grid, Typography, Paper, Button } from "@material-ui/core";
class OrderDashBoard extends React.Component {
  render() {
    return (
      <div>
        <CustomerAppBar />
        <div style={{ marginTop: 10 }}>
          <Grid container>
            <Grid item xs={0} md={3} />
            <Grid item xs={12} md={6}>
              <Paper style={{ padding: 10 }}>
                <Typography variant="h6" style={{ fontSize: 18 }}>
                  Your Order Has Been Placed
                </Typography>
                <Typography variant="h6" style={{ fontSize: 12 }}>
                  The Driver will reach you soon
                </Typography>
                <Divider />
                <iframe
                  src="http://127.0.0.1:8887/new1.html?wp0lat=27.1767&&wp0lon=78.0081&&wp1lat=27.1750&&wp1lon=78.0422"
                  style={{ width: "99.9%", height: 300 }}
                />
                <Divider />
                <br />
                <Typography>Driver name: Saranraj</Typography>
                <Typography>Vechile Number: ABC123</Typography>
                <Typography>Total Distance :5.2Km </Typography>
                <Typography>Fare : 120 Rupees</Typography>
                <Typography>Driver Contact Number : 123456789</Typography>
                <br />
                <Button variant="contained" color="secondary">
                  Cancel Order
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={0} md={3} />
          </Grid>
        </div>
      </div>
    );
  }
}
export default OrderDashBoard;
