import React from 'react';
import NewTeaForm from './NewTeaForm';
import TeaList from './TeaList';

class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let addTeaButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm />
    } else {
      currentlyVisibleState = <TeaList />
      addTeaButton = <button onClick={this.handleClick}>Add Tea</button> 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addTeaButton}
      </React.Fragment>
    );
  }

}

export default TeaControl;