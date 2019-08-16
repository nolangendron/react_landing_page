import React from "react";
import "../styles/Hero.css";
import option1 from "../images/option1.png";
import option2 from "../images/option2.png";
import option3 from "../images/option3.png";
import { CtaButton } from "./CtaButton";

type HeroProps = {
  selectedOption: string;
};

export function Hero({ selectedOption }: HeroProps) {
  let getBgImage = (options: string) => {
    switch (options) {
      case "option1":
        return option1;
        break;
      case "option2":
        return option2;
        break;
      case "option3":
        return option3;
        break;
    }
  };
  return (
    <div
      className="Hero-container BackgroundImg"
      style={{ backgroundImage: `url(${getBgImage(selectedOption)})` }}
    >
      <div className="Hero-content-container">
        <h1 className="company-name">24/7 Fitness Centres</h1>
        <h1 className="tag-line">BE FIT. BE STRONG.</h1>
        <p>
          24/7 Fitness Centres gives you all the essential tools you will need
          to get your routine going. Workout on your own or join our
          highly-trained instructors in group fitness classes.
        </p>
        <h3 className="cta">PLANS STARTING AT $39</h3>
        <CtaButton />
      </div>
    </div>
  );
}
