import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import ListView from "./List";

const styles = {
  heading: {
    fontSize: 20,
    padding: 10,
    paddingBottom: 10,
    textAlign: "center"
  }
};
class DashBoardBody extends React.Component {
  render() {
    return (
      <div style={{ margin: 20 }}>
        <Grid container>
          <Grid item md={3} xs={0} />
          <Grid item md={6} xs={12}>
            <Paper>
              <Typography variant="h6" style={styles.heading}>
                PickUps To Do
              </Typography>
              <hr />
              <ListView />
            </Paper>
          </Grid>
          <Grid item md={3} xs={0} />
        </Grid>
      </div>
    );
  }
}
export default DashBoardBody;
