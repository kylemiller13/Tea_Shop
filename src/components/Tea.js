import React from "react";
import PropTypes from "prop-types";

function Tea(props){
  return (
    <React.Fragment>
        <div onClick={() => props.whenTeaClicked(props.id)}>
          <div className="centerName">
            <h3>Tea Name: {props.name}</h3>
          </div>
        </div>
    </React.Fragment>
  );
}


Tea.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func
};

export default Tea;