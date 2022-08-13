import React from "react";
import PropTypes from "prop-types";



function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Green Tea" />
        <input type="text" name="origin" placeholder="China" />
        <input type="text" name="type" placeholder="Macha" />
        <input type="number" name="price" placeholder="Price" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;