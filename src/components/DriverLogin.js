import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
const styles = {
  root: {
    flexGrow: 1,
    margin: 10
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  menuItems: {
    marginRight: 10
  },
  paperRoot: {
    padding: 20,
    marginTop: "5%"
  },
  textInput: {
    width: "100%"
  }
};
class Login extends React.Component {
  loginUser() {
    window.location = "/dashboard";
  }
  render() {
    return (
      <div style={styles.root}>
        <Grid container spacing={10}>
          <Grid item xs={0} md={3} />
          <Grid item xs={12} md={6}>
            <Paper style={styles.paperRoot} elevation={1}>
              <Typography variant="h5" component="h3">
                <center>Login Into Your Account</center>
              </Typography>
              <TextField
                id="outlined-name"
                label="Email Address"
                margin="normal"
                variant="outlined"
                type="email"
                autoComplete="email"
                style={styles.textInput}
                name="email"
              />

              <TextField
                id="outlined-name"
                label="Password"
                autoComplete="current-password"
                type="password"
                margin="normal"
                variant="outlined"
                style={styles.textInput}
                name="password"
              />

              <Button
                variant="contained"
                onClick={this.loginUser.bind(this)}
                color="primary"
                style={{ marginTop: 5 }}
              >
                Login
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={0} md={3} />
        </Grid>
      </div>
    );
  }
}
export default Login;
