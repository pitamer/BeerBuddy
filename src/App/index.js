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
    <div className="App">
      <Header />
      <Browse />
      <Favorites />
    </div>
  );
}

export default App;
