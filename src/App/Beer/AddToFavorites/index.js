import React from 'react';
import { observer } from "mobx-react";
import './index.css';

function AddToFavorites() {
  return (
    <div className="AddToFavorites">
      ♥
    </div>
  );
}

export default observer(AddToFavorites);
