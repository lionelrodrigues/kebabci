import React from "react";
import Navbar from "./components/Navigation/Navbar";
import "./components/styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Homepage/Home";
import Menu from "./components/Menu";
import Location from "./components/Location";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/location">
            <Location />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
