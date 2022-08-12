import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewTeaForm(props){
  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      type: event.target.type.value,
      price: parseInt(event.target.price.value),
      quantity: parseInt(130),
      id: v4()
    });
  }
  
    return (
      <React.Fragment>
        <h3>This is a form.</h3>
      </React.Fragment>
    );
}
NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};

export default NewTicketForm;