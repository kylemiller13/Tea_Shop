import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";


function NewTeaForm(props){
  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value,
      origin: "China",
      price: 1,
      quantity: 130,
      id: v4()
    });
  }
  
    return (
      <React.Fragment>
        <ReusableForm 
          formSubmissionHandler={handleNewTeaFormSubmission}
          buttonText="Submit"
        />
      </React.Fragment>
    );
}
NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;