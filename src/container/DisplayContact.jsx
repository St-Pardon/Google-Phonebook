import React from 'react';


const DisplayContact = ({contact, showDetails, changeView})=> {
  return(
    <div className="names-container">
      { contact.length === 0 ? <div className="no-contact">No contacts</div> :
        contact.sort((a, b)=> {
          let nameA = a.fileAs === "" ? a.lastName :a.fileAs.toUpperCase() ; // ignore upper and lowercase
          let nameB = b.fileAs === "" ? b.lastName :b.fileAs.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        }).map((val, i)=> {
          return(
            <div className="display-name-container" key={i} onClick={()=>{
              showDetails([val, thumbnail[i]]);
              changeView("details")
              }} >
              <h2 className="thumbnail" style={{backgroundColor: thumbnail[i]}}>{val.fileAs === "" ? val.lastName[0]: val.fileAs[0]}</h2>
              <h3 className="display-name">{val.fileAs === "" ? val.lastName +" "+val.firstName : val.fileAs}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default DisplayContact;

const thumbnail = [
  "#B38CB4",
  "#F42C04",
  "#61A0AF",
  "#5941A9",
  "#FF570A",
  "#420039",
  "#12355B",
  "#D72638"
]