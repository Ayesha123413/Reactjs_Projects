import React  from "react";

const Todolist =(props)=>{
  
   return (
    <>
   <div className="todo_style">
   <i className="fa-regular fa-circle-xmark" 
   onClick={()=> {props.onselect(props.id);}}></i>
   <li>{props.text}</li>
   </div>
   </>
   );
}
export default Todolist;