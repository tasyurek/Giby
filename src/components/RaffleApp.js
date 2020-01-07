import React from "react";
import RaffleAction from "./RaffleAction";
import Header from "./Header";
import Applicants from "./Applicants";
import Actions from "./Actions";
import AddApplicantComponent from "./AddApplicantComponent";

export default class RaffleApp extends React.Component {
  state = {
    applicants: ["1", "2", "3"]
  };

  addApplicant = applicant => {
    this.setState(prevState => ({
      applicants: [...prevState.applicants, applicant]
    }));
  };

  removeAll = () => {
    this.setState({
      applicants: []
    });
  };

  raffle = () => {
    const randomIndex = Math.floor(
      Math.random() * this.state.applicants.length
    );

    alert(this.state.applicants[randomIndex]);
  };

  render() {
    return (
      <div>
        <Header />
        <RaffleAction raffle={this.raffle} />
        <Applicants
          applicants={this.state.applicants}
          removeAll={this.removeAll}
        />
        <AddApplicantComponent addApplicant={this.addApplicant} />
        <Actions />
      </div>
    );
  }
}
