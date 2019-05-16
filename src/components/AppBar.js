import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    flexGrow: 1,
    background: "#3498db"
  },
  grow: {
    flexGrow: 1
  }
};

class AppBarHeader extends React.Component {
  render() {
    return (
      <AppBar position="static" style={styles.root}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography style={{ marginLeft: 10 }} variant="h6" color="inherit">
            GoCabs
          </Typography>
          <Grid container>
            <Grid item md={9} xs={9} />
            <Grid item md={3} xs={3}>
              <Button color="inherit">Orders</Button>
              <Button
                color="inherit"
                href="/voiceassistant"
                style={{ marginLeft: 20 }}
              >
                Open Voice Assistant
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}
export default AppBarHeader;
