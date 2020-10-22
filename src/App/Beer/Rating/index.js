import React from "react";
import { observer } from "mobx-react";
import "./index.css";

function Rating(props) {
  const displayRating = props.displayRating ? "" : "rating-invisible";

  const handleRateUp = (e) => {
    e.stopPropagation();
    props.rateUp();
  };

  const handleRateDown = (e) => {
    e.stopPropagation();
    props.rateDown();
  };

  return (
    <div className={`Rating ${displayRating}`}>
      <div className="rating-button" onMouseDown={handleRateUp}>
        ▲
      </div>
      <div className="rating-number">{props.score}</div>
      <div className="rating-button" onMouseDown={handleRateDown}>
        ▼
      </div>
    </div>
  );
}

export default observer(Rating);
