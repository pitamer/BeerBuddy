import React, { useContext } from "react";
import { observer } from "mobx-react";
import { Grid } from "@material-ui/core";
import "./index.css";

import BeersStoreContext from "../../store";

import Beer from "../Beer";

function Favorites() {
  const store = useContext(BeersStoreContext);
  return (
    <div className="Favorites">
      <Grid container spacing={3} style={{ margin: 0, width: "100%" }}>
        {store.favorites.map((beer) => (
          <Grid item xs={6} sm={3} md={2} key={beer.id}>
            <Beer
              beer={beer}
              toggleFavorite={store.toggleFavorite}
              rateUp={store.rateUp}
              rateDown={store.rateDown}
              displayedFromFavorites={true}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default observer(Favorites);
