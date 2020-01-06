import React from "react";
import RaffleAction from "./RaffleAction";
import Header from "./Header";
import Competitors from "./Competitors";
import Actions from "./Actions";
import AddItemComponent from "./AddItemComponent";

export default class RaffleApp extends React.Component {
  state = {
    competitors: ["1", "2", "3"]
  };

  render() {
    return (
      <div>
        <Header />
        <RaffleAction />
        <Competitors competitors={this.state.competitors} />
        <AddItemComponent />
        <Actions />
      </div>
    );
  }
}
