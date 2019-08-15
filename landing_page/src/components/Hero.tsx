import React from "react";
import "../styles/Hero.css";
import womenImage from "../images/women_workout.png";
import { CtaButton } from "./CtaButton";

export function Hero() {
  return (
    <div
      className="Hero-container BackgroundImg"
      style={{ backgroundImage: `url(${womenImage})` }}
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
