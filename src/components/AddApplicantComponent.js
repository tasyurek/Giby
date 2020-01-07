import React from "react";

export default class AddApplicantComponent extends React.Component {
  handleSubmit = e => {
    e.preventDefault();

    const applicant = e.target.elements.applicant.value.trim();
    this.props.addApplicant(applicant);

    e.target.elements.applicant.value = "";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="applicant" autoComplete="off" />
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}
