import React from "react";
import Tea from "./Tea";

const mainTeaList = [
  {
    name:"Green Tea",
    origin:"China",
    type:"Matcha",
    price:10000,
    quantity:"",
    id:"",
    key:""
  },
  {
    name:"Black Tea",
    origin:"China",
    type:"Earl Gray",
    price:1000,
    quantity:"",
    id:"",
    key:""
  },
  {
    name:"Oolong Tea",
    origin:"China",
    type:"Tieguanyin",
    price:1000,
    quantity:"",
    id:"",
    key:""
  }
];



function TeaList(){
  return (
    <React.Fragment>
      <hr/>
        {mainTeaList.map((tea, index) =>
          <Tea name={tea.name}
            origin={tea.origin}
            type={tea.type}
            price={tea.price}
            quantity={tea.quantity}
            id={tea.id}
            key={index}/>
        )}
    </React.Fragment>
  );
}

export default TeaList;