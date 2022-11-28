import React, { useState } from "react";

const App=()=>{
  let time= new Date();
  time=time.toLocaleTimeString();
  const [currentTime,setTime]=useState(time);

  const updatetime=()=>{
    let time= new Date();
    time=time.toLocaleTimeString();
    setTime(time);
  }

  setInterval(updatetime,1000);
  return(
<>
  <h1>{currentTime}</h1>

  </>

  );
};

export default App;
