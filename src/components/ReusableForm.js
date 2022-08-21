import React from "react";
import PropTypes from "prop-types";
import Select from 'react-select';



const teaNames = [
  { value: "Macha Tea", label: "Macha Tea", },
  { value: "Black Tea", label: "Black Tea" },
  { value: "Oolong Tea", label: "Oolong Tea" },
  { value: "Rosehip Tea", label: "Rosehip Tea" },
  { value: "Chai Tea", label: "Chai Tea" }
];


function ReusableForm(props) {
  
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <Select name="name"
          value={teaNames.value}
          options={teaNames}
        />
        <div className="submitBTN">
        <button type="submit">{props.buttonText}</button>
        </div>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;