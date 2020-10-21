import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { observer, useLocalObservable } from "mobx-react";
import "./index.css";

import BeersStoreContext, { BeerStore } from "../store";

import Browse from "./Browse";
import Favorites from "./Favorites";
import Header from "./Header";

function App() {
  const store = useLocalObservable(BeerStore);

  useEffect(() => {
    store.fetchAll();
    // eslint-disable-next-line
  }, []);

  return (
    <BeersStoreContext.Provider value={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Browse} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </div>
      </Router>
    </BeersStoreContext.Provider>
  );
}

export default observer(App);
