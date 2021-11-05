import React from "react";

const Inputs = ({prop}) => {
  return (
    <fieldset>
      <legend id={prop.id}></legend>
      <input type="text" id={"input-" + prop.id} placeholder={prop.placeholder} 
        onFocus ={
          ()=>{
            let id = document.getElementById(prop.id);
            let id2 = document.getElementById(`input-${prop.id}`);
            id.innerText = prop.placeholder
            id2.placeholder = ""
            id2.padding = "0 5px"
          }
        }
        onBlur ={
          (e)=>{
            let id = document.getElementById(prop.id);
            let id2 = document.getElementById(`input-${prop.id}`);
            if (e.target.value === ""){
              id.innerText = ""
              id2.placeholder = prop.placeholder
              id2.padding = "0"
            }
          }
        }
      />
    </fieldset>
  )
}

export default Inputs;