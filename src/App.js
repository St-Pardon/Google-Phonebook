import React, {useState} from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import "./style/style.scss";
import "./style/form.scss";
import "./style/contactdetails.scss";
import AddContact from "./container/AddContact";
import DisplayContact from "./container/DisplayContact";
import ContactDetails from "./container/ContactDetails";
import {IconContext} from "react-icons"
import { AiOutlinePlus } from "react-icons/ai";

export default function App() {
  const [showAddContact, setShowAddContact] = useState(true)
  const [contact, setontact] = useState(contacts)

  const addContact= (contact)=>{
    console.log(contact)
  }
  
  return (
    <Router>
      <div className="container">
        {!showAddContact && <DisplayContact contact={contact}/>}
        <IconContext.Provider value={{ style: {fontSize: '25px', style: "color: white"}}}>
          <button id="addBtn" className="add-btn" onClick={()=>{setShowAddContact(!showAddContact); console.log("clickedd")}}>
            <AiOutlinePlus />
          </button>
        </IconContext.Provider>
        {showAddContact && <AddContact addContact={addContact} /> }
        {/* <Route path="/" exact/>
        <Route path="/" exact/> */}
        {/* <ContactDetails /> */}
      </div>
    </Router>
  );
}

const contacts = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1542353436-312f0e1f67ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=942&q=80",
    fileAs: "John Akanimoh",
    firstName: "Akanimoh",
    lastName: "John",
    middlename: "",
    namePrefix: "",
    nameSuffix: "",
    phoneticFirstName: "",
    phoneticLastName: "",
    phoneticMiddlename: "",
    phone: {
      phoneNo: "0812 383 7772",
      label: "Mobile"
    },
    email: {
      address: "",
      label: ""
    },
    address: {
      name: "",
      label: ""
    },
    date: {
      title: "",
      label: ""
    },
    relationship: {
      title: "",
      label: ""
    },
    company: {
      companyName: "",
      department: "",
      title: "",
    },
    website: ""
  },
  {
    id: 2,
    img: "",
    fileAs: "Issac Michael",
    firstName: "Michael",
    lastName: "Issac",
    middlename: "",
    namePrefix: "",
    nameSuffix: "",
    phoneticFirstName: "",
    phoneticLastName: "",
    phoneticMiddlename: "",
    phone: {
      phoneNo: "0803 248 8965",
      label: "Mobile"
    },
    email: {
      address: "",
      label: ""
    },
    address: {
      name: "",
      label: ""
    },
    date: {
      title: "05th, May 1995",
      label: "Birthday"
    },
    relationship: {
      title: "",
      label: ""
    },
    company: {
      companyName: "Mixbex Ent.",
      department: "",
      title: "",
    },
    website: ""
  },
]