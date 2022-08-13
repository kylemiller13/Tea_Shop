import React from "react";
import PropTypes from "prop-types";

function Tea(props){
  return (
    <React.Fragment>
      <div onClick={() => props.whenTeaClicked(props.id)}>
        <h3>Name: {props.name}</h3>
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func
};

export default Tea;