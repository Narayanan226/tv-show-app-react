import React from "react";
import style from "./style.module.css";
import { StarFill, StarHalf, Star } from "react-bootstrap-icons";

const FiveStar = ({ rating }) => {
  const starArray = [];
  const fillStars = Math.floor(rating);
  const hasHalfStar = rating - fillStars >= 0.5;
  const emptyStar = 5 - fillStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < fillStars; i++)
    starArray.push(<StarFill key={i + "Filled"} />);
  if (hasHalfStar) starArray.push(<StarHalf />);
  for (let i = 0; i < emptyStar; i++)
    starArray.push(<Star key={i + "Empty"} />);
  return <div>{starArray}</div>;
};

export default FiveStar;
