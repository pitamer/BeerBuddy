import React, { useContext } from "react";
import { observer } from "mobx-react";
import { Grid } from "@material-ui/core";
import "./index.css";

import BeersStoreContext from "../../store";

import Beer from "../Beer";
import SearchHeader from "./SearchHeader";

function Browse() {
  const store = useContext(BeersStoreContext);
  return (
    <div className="Browse">
      <SearchHeader />
      {store.beersOnDisplay.map((beer) => (
        <Beer beer={beer} toggleFavorite={store.toggleFavorite} />
      ))}
    </div>
  );
}

export default observer(Browse);
