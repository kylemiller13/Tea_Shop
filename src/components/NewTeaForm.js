import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewTicketForm(props){
  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
  return (
    <React.Fragment>
      <h3>This is a form.</h3>
    </React.Fragment>
    );
  }
}
NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};

export default NewTicketForm;