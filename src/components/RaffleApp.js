import React from "react";
import RaffleAction from "./RaffleAction";
import Header from "./Header";
import Applicants from "./Applicants";
import Actions from "./Actions";
import AddApplicantComponent from "./AddApplicantComponent";
import "normalize.css/normalize.css";
import "../styles/styles.scss";

export default class RaffleApp extends React.Component {
  state = {
    applicants: []
  };

  handleEmpty = () => {
    return this.state.applicants.length == 0;
  };

  handleCompleted = () => {
    if (this.state.applicants.length != 0)
      return this.rankedApplicants().length === this.state.applicants.length;
  };

  handleAddApplicant = applicantText => {
    const isApplicantExist = this.state.applicants.some(applicant => {
      return applicant["text"] === applicantText;
    });

    if (isApplicantExist) {
      return "This applicant already exist!";
    } else if (!applicantText) {
      return "Applicant text shouldn't be empty!";
    }

    this.setState(prevState => ({
      applicants: [
        ...prevState.applicants,
        { id: prevState.applicants.length + 1, text: applicantText, rank: "" }
      ]
    }));
  };

  handleReset = () => {
    const resetledApplicants = this.state.applicants.map(_ => ({
      id: _.id,
      text: _.text,
      rank: ""
    }));

    this.setState({
      applicants: [...resetledApplicants]
    });
  };

  handleRemoveAll = () => {
    this.setState({
      applicants: []
    });
  };

  handleRemoveApplicant = applicant => {
    const applicants = this.state.applicants.filter(_ => _.text != applicant);

    this.setState({
      applicants
    });
  };

  rankedApplicants = () => {
    return this.state.applicants.filter(_ => _.rank != "");
  };

  setRankedApplicant = index => {
    const rankedApplicants = this.rankedApplicants();
    const rank = ++rankedApplicants.length;
    let newApplicants = this.state.applicants.map((_, i) => {
      if (index == i) {
        return {
          id: _.id,
          text: _.text,
          rank
        };
      } else {
        return {
          id: _.id,
          text: _.text,
          rank: _.rank
        };
      }
    });
    this.setState({
      applicants: [...newApplicants]
    });
  };

  handleRaffle = () => {
    const index = Math.floor(Math.random() * this.state.applicants.length);
    if (this.state.applicants.length != 0) {
      if (this.state.applicants[index].rank != "") {
        return this.handleRaffle();
      } else {
        this.setRankedApplicant(index);
      }
    }
  };

  componentDidMount() {
    try {
      const applicantsJSON = localStorage.getItem("applicants");
      const applicants = JSON.parse(applicantsJSON);

      if (applicants) {
        this.setState({ applicants });
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const applicantsJSON = JSON.stringify(this.state.applicants);
    localStorage.setItem("applicants", applicantsJSON);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="widget">
            <Applicants
              applicants={this.state.applicants}
              handleRemoveAll={this.handleRemoveAll}
              handleRemoveApplicant={this.handleRemoveApplicant}
            />

            <AddApplicantComponent
              handleAddApplicant={this.handleAddApplicant}
            />
          </div>
          <Actions
            handleReset={this.handleReset}
            handleRaffle={this.handleRaffle}
            handleEmpty={this.handleEmpty}
            handleCompleted={this.handleCompleted}
          />
        </div>
      </div>
    );
  }
}
