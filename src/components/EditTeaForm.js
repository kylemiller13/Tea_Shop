// import React from "react";
// import ReusableForm from "./ReusableForm";
// import PropTypes from "prop-types";

// function EditTeaForm(props) {
//   const { tea } = props;

//   function handledEditTeaFormSubmission(event) {
//     event.preventDefault();
//     props.onEditTea({
//       name: event.target.name.value,
//       origin: "China",
//       price: 130,
//       id: tea.id,
//     });
//   }
//   return (
//     <React.Fragment>
//       <ReusableForm
//         formSubmissionHandler={handledEditTeaFormSubmission}
//         buttonText="Update Tea"
//       />
//     </React.Fragment>
//   );
// }

// EditTeaForm.propTypes = {
//   tea: PropTypes.object,
//   onEditTea: PropTypes.func,
// };

// export default EditTeaForm;