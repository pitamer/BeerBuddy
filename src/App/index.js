import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { observer, useLocalObservable } from "mobx-react";
import "./index.css";

import BeersStoreContext, { store } from "../store";

import Browse from "./Browse";
import Favorites from "./Favorites";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Browse} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
