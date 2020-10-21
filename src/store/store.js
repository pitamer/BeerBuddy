import { action, observable } from "mobx";
import { createContext } from "react";

export const BeersStore = () => {
  const store = observable({
    
    // Store items
    beers: [],

    // Store actions
    fetchAll: action(async () => {
      // Get first 80 beers
      const res1 = await fetch(
        `https://api.punkapi.com/v2/beers?page=1&per_page=80`
      );
      const newBeers1 = await res1.json();
      // Get 20 more beers
      const res2 = await fetch(
        `https://api.punkapi.com/v2/beers?page=5&per_page=20`
      );
      const newBeers2 = await res2.json();
      const updateBeers = action(() => {
        store.beers = newBeers1
          .concat(newBeers2)
          .map((b) => ({ ...b, score: 0 }));
      });
      updateBeers();
    }),
  });

  return store;
};

export default createContext();
