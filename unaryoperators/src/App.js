import React, { useState } from "react";
const App=()=>{

  const [currdata, setdata]=useState(0);

  const incrementNumber=()=>{
   setdata(currdata+1);
  };

  const decrementNumber=()=>{
    if(currdata>0){
    setdata(currdata-1);
                   }
  //not to decrement less than 0
  else{
    alert("Cannot decrement less than Zero, Limit Reached :( ")
    setdata(0);
      }
};


  return (<>
  <div className="main_div">
    <div className="center_div">
      <h1> {currdata} </h1>
      <div className="btn_div">
      <button onClick={incrementNumber} > Increment</button>
      <button onClick={decrementNumber}> Decrement</button>
      </div>

    </div>

  </div>
  </>)
};

export default App;
