import React from "react";
import style from "./style.module.css";
import { THUMBNAIL_BASE_URL } from "../../config";

const RecommendationsListItem = ({ show, onSeriesSelected }) => {
  return (
    <div
      className={style.container}
      style={{
        background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${THUMBNAIL_BASE_URL}${show.backdrop_path}) no-repeat center / cover`,
      }}
      onClick={() => onSeriesSelected(show)}
    >
      <p className={style.title}>
        {show.name && show.name.length > 20
          ? show.name.slice(0, 20) + "..."
          : show.name}
      </p>
    </div>
  );
};

export default RecommendationsListItem;
