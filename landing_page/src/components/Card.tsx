import React from "react";
import "../styles/Card.css";

interface Props {
  id: number;
  image: string;
  tagLine: string;
  content: string;
}

export const Card: React.SFC<Props> = props => {
  return (
    <div className="Card">
      <img src={props.image} />
      <h3>{props.tagLine}</h3>
      <p>{props.content}</p>
    </div>
  );
};
