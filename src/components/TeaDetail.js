import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea, onClickingPurchase } = props;

  return (
    <React.Fragment>
      <h2>Tea Details:</h2>
      <h3>{tea.name}</h3>
      <p>Origin: {tea.origin}</p>
      <p>Type: {tea.type}</p>
      <p>${tea.price}.00 per oz</p>
      <p>Quantity: {tea.quantity} </p>
      <button onClick={() => onClickingPurchase(tea.id)}>Purchase</button>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingPurchase: PropTypes.func
};

export default TeaDetail;