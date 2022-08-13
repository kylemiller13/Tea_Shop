import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea } = props;

  return (
    <React.Fragment>
      <h1>Tea Details:</h1>
      <h2>{tea.name}</h2>
      <p>Origin: {tea.origin}</p>
      <p>Type: {tea.type}</p>
      <p>${tea.price} per oz</p>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  ticket: PropTypes.object
};

export default TeaDetail;