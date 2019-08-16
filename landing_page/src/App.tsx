import React, { Component } from "react";
import "./styles/App.css";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { CardList } from "./components/CardList";
import { cards } from "./lib/cardData";

interface IState {
  selectedOption: string;
}
class App extends Component<{}, IState> {
  state: IState = {
    selectedOption: ""
  };

  handleOptionChange = (changeEvent: any) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar
          selectedOption={this.state.selectedOption}
          handleOptionChange={this.handleOptionChange}
        />
        <Hero selectedOption={this.state.selectedOption} />
        <CardList cards={cards} />
      </div>
    );
  }
}

export default App;
