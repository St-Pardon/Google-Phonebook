import React from "react";

const Inputs = ({placeholder, id, value, onChange}) => {
  return (
    <fieldset id={"fieldset"+id}>
      <legend id={id}></legend>
      <input 
        type="text" 
        id={"input-" + id}
        value={value} 
        onChange={onChange}
        placeholder={placeholder} 
        onFocus ={
          ()=>{
            let legendId = document.getElementById(id);
            let fieldSet = document.getElementById("fieldset"+id);
            let inputId = document.getElementById(`input-${id}`);
            legendId.innerText = placeholder
            inputId.placeholder = ""
            legendId.setAttribute("style", "color: blue")
            fieldSet.setAttribute("style", "border-color: blue")
          }
        }
        onBlur ={
          (e)=>{
            let legendId = document.getElementById(id);
            let inputId = document.getElementById(`input-${id}`);
            let fieldSet = document.getElementById("fieldset"+id);
            if (e.target.value === ""){
              legendId.innerText = ""
              inputId.placeholder = placeholder
              inputId.padding = "0"
            }
            legendId.setAttribute("style", "color: unset")
            fieldSet.setAttribute("style", "border-color: unset")
          }
        }
      />
    </fieldset>
  )
}

export default Inputs;