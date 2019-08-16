import React, { ChangeEvent } from "react";
import "../styles/NavBar.css";

type NavProps = {
  selectedOption: string;
  handleOptionChange: (ChangeEvent: any) => any;
};
export const NavBar = ({ selectedOption, handleOptionChange }: NavProps) => {
  return (
    <div>
      <h4>Change Background Image</h4>
      <form>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
              className="form-check-input"
            />
            Option 1
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
              className="form-check-input"
            />
            Option 2
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleOptionChange}
              className="form-check-input"
            />
            Option 3
          </label>
        </div>
      </form>
    </div>
  );
};
