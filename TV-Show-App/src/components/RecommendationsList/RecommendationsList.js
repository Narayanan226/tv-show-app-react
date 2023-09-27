import React from "react";
import style from "./style.module.css";
import RecommendationsListItem from "../RecomendationsListItem/RecommendationsListItem";

const RecommendationsList = ({ shows, onSeriesSelected }) => {
  return (
    <div>
      <p>You'll Probably Like :</p>
      <div className={style.container}>
        {shows.map((show) => (
          <span className={style.list} key={show.id}>
            <RecommendationsListItem
              show={show}
              onSeriesSelected={onSeriesSelected}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;
