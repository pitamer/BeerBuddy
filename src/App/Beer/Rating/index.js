import React from "react";
import { observer } from "mobx-react";
import "./index.css";

function Rating(props) {
  const displayRating = props.rateUp ? '' : 'rating-invisible'
  return (
    <div className={`Rating ${displayRating}`}>
      <div className="rating-button" onClick={() => props.rateUp(props.beer)}>
        ▲
      </div>
      <div className="rating-number">{props.beer.score}</div>
      <div className="rating-button" onClick={() => props.rateDown(props.beer)}>
        ▼
      </div>
    </div>
  );
}

export default observer(Rating);
