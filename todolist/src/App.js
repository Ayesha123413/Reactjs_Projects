import React, { useState } from "react";
import Todolist from './Todolist';
const App=()=>{

  const [inputvalue,setinputvalue]=useState("");

  const [items,setitems]=useState([]);

// 1 onchange method of input field to enter value & reflect it to list
  const itemEvents=(event)=>{
    setinputvalue(event.target.value)

  };
// 3 onclick method of button to add item in list
  const additemsbutton=()=>{
    setitems((olditems)=>{
      return [...olditems,inputvalue]
    });
  
// 4 set inputfield to empty rightafter item is added to list
    setinputvalue("");
  };

//delect items through close icon pass as props to todolist
  const deleteitems=(id)=>{
    console.log("deleted");

   setitems((olditems)=>{
    return olditems.filter((arritem,index)=>{
       return index!==id;
    });
   });
};

  return(
<div className="main_div">
  <div className="center_div ">
    <br/>
    <h1>To Do List </h1>
    <br/>
    <input type="text" placeholder="Add Item " value={inputvalue} onChange={itemEvents}/>
    <button onClick={additemsbutton}> + </button>

    <ol>
{/* 2 place items in list one by one from items array */}
      {items.map((itemvalue , index)=>{
     return  <Todolist 
      key={index}
      id={index}
      text={itemvalue}
      onselect={deleteitems} />
      })}
    </ol>


    </div>
</div>
  );
}
export default App;
