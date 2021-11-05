import React from 'react';
import ContactDetails from "./ContactDetails";

const DisplayContact = ({contact})=> {
  return(
    <div className="names-container">
      { contact.length === 0 ? <div className="no-contact">No contacts</div> :
        contact.sort((a, b)=> {
          let nameA = a.fileAs.toUpperCase(); // ignore upper and lowercase
          let nameB = b.fileAs.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        }).map(val=> {
          return(
            <div className="display-name-container">
              <h2 className="thumbnail">{val.fileAs[0]}</h2>
              <h3 className="display-name">{val.fileAs}</h3>
              <ContactDetails 
                contact={val}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default DisplayContact;

// const contactName = [
//   "James Akanimoh",
//   "Isaac Michael", 
//   "Ameh Godwin",
//   "Chikwendu Ifeanyi",
//   "Ruth Odili"
// ]