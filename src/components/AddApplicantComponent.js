import React from "react";

export default class AddApplicantComponent extends React.Component {
  state = {
    error: undefined
  };

  handleSubmit = e => {
    e.preventDefault();

    const applicant = e.target.elements.applicant.value.trim();
    const error = this.props.handleAddApplicant(applicant);

    this.setState({
      error
    });

    if (!error) {
      e.target.elements.applicant.value = "";
    }
  };

  render() {
    return (
      <div>
        <form className="add-applicant" onSubmit={this.handleSubmit}>
          <input
            className="add-applicant__input"
            name="applicant"
            autoComplete="off"
          />
          <button className="button" type="submit">
            Add
          </button>
        </form>
        {this.state.error && (
          <p className="add-applicant-error">{this.state.error}</p>
        )}
      </div>
    );
  }
}
