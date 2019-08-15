import React from "react";
import "./styles/App.css";
import { Hero } from "./components/Hero";
import { CardList } from "./components/CardList";
import clock from "./images/clock.png";
import computer from "./images/computer.png";
import weigths from "./images/weights.png";

const cards = [
  {
    id: 1,
    image: clock,
    tagLine: "TRAIN AT YOUR OWN TIME",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut."
  },
  {
    id: 2,
    image: computer,
    tagLine: "TRAINING EBOOKS & VIDEOS",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut."
  },
  {
    id: 3,
    image: weigths,
    tagLine: "RESISTANCE TRAINING",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"
  }
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero />
      <CardList cards={cards} />
    </div>
  );
};

export default App;
