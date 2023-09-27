import React from "react";
import style from "./style.module.css";
import FiveStar from "../fiveStart/FiveStar";

const MovieDetails = ({ show }) => {
  return (
    <div>
      <div className={style.title}>{show.name}</div>
      <div className={style.rating}>
        <FiveStar rating={show.vote_average / 2} />
        <span>
          {show.vote_average / 2}/5 ({show.vote_count})
        </span>
      </div>
      <div className={style.overview}>{show.overview}</div>
    </div>
  );
};

export default MovieDetails;
