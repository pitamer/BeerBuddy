import React from 'react';
import { observer } from "mobx-react";
import './index.css';

import AddToFavorites from './AddToFavorites'
import Rating from './Rating'
import Modal from './Modal'

function Beer() {
  return (
    <div className="Beer">
      Beer
      <AddToFavorites />
      <Rating />
      <Modal />
    </div>
  );
}

export default observer(Beer);
