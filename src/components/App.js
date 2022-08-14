import React from "react";
import Header from "./Header";
import TeaControl from "./TeaControl";
import background from "./../img/tea.jpg";


function App() {
  return (
    <React.Fragment>    
       <div style={{ backgroundImage:`url(${background})`,
                    backgroundPosition: "center",
                    backgroundSize:"cover",
                    backgroundRepeat:"no-repeat", 
                    width: "1000px",
                    height: "1000px"
                   
                     }}>
        
        <Header />
        <TeaControl />
        </div>
      

    </React.Fragment>
  );
}

export default App;
