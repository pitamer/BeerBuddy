import React from 'react';
import { observer } from "mobx-react";
import './index.css';

function Rating(props) {
  return (
    <div className="Rating">
      <div className="rating-button" onClick={() =>props.rateUp(props.beer)}>▲</div>
      <div className="rating-number">{props.beer.score}</div>
      <div className="rating-button" onClick={() =>props.rateDown(props.beer)}>▼</div>
    </div>
  );
}

export default observer(Rating);
