import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import AppBarHeader from "./components/AppBar";
import DashBoardBody from "./components/DashBoardBody";
import CustomerDashBoard from "./components/CustomerDashBoard";
import Login from "./components/DriverLogin";
import LoginAppBar from "./components/LoginPageAppBar";
import OrderDashBoard from "./components/OrderDashBoard";
import VoiceAssistant from "./components/VoiceAssistant";
function App() {
  return (
    <Router>
      <Route
        path="/dashboard"
        exact
        component={() => (
          <div>
            <AppBarHeader />
            <DashBoardBody />
          </div>
        )}
      />
      <Route
        path="/userdashboard"
        exact
        component={() => <CustomerDashBoard />}
      />
      <Route
        path="/login"
        exact
        component={() => (
          <div>
            <LoginAppBar />
            <Login />
          </div>
        )}
      />
      <Route
        path="/orderdashboard"
        exact
        component={() => <OrderDashBoard />}
      />
      <Route
        path="/voiceassistant"
        exact
        component={() => <VoiceAssistant />}
      />
    </Router>
  );
}
export default App;
