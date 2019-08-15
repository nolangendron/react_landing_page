import React from "react";
import womenImage from "../images/women_workout.png";
import { CtaButton } from "./CtaButton";

export function Hero() {
  return (
    <div
      className="BackgroundImg"
      style={{ backgroundImage: `url(${womenImage})` }}
    >
      <CtaButton />
    </div>
  );
}
