import React from "react";
import "../styles/CardList.css";
import { Card } from "../components/Card";

interface Props {
  cards: { id: number; image: string; tagLine: string; content: string }[];
}

export const CardList: React.SFC<Props> = props => {
  const cardsArray = props.cards.map(card => (
    <Card
      id={card.id}
      image={card.image}
      tagLine={card.tagLine}
      content={card.content}
    />
  ));
  return <div className="CardList-Container">{cardsArray}</div>;
};
