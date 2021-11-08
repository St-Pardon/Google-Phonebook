import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/style.scss';
import './style/addContact.scss';
import './style/contactdetails.scss';
import './style/header.scss';
import Header from './container/header';
import AddContact from './container/AddContact';
import DisplayContact from './container/DisplayContact';
import ContactDetails from './container/ContactDetails';
import { IconContext } from 'react-icons';
import { AiOutlinePlus } from 'react-icons/ai';

export default function App() {
  const [display, setDisplay] = useState('home');
  const [contact, setContact] = useState('');
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const getContact = async () => {
      const contactFromServer = await fetchContact();
      setContact(contactFromServer);
    };
    getContact();
  }, [contact]);
  const fetchContact = async () => {
    const res = await fetch(
      'https://phonebook-server-app.herokuapp.com/contacts'
    );
    const data = await res.json();
    return data;
  };

  const addContact = async (task) => {
    const res = await fetch(
      'https://phonebook-server-app.herokuapp.com/contacts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      }
    );
    const data = await res.json()
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newContact = { id, ...task };
    setContact([...task, data]);
    // console.log(task);
  };
  const changeView = (val) => {
    setDisplay(val)
  }
  const showDetails = (data) =>{
    setDetail(data);
  }


  return (
    <Router>
      <div className="container">
        <Header switchView={display} changeView={changeView} />
        {display === 'home' && <DisplayContact contact={contact} showDetails={showDetails} changeView={changeView} />}
        <IconContext.Provider
          value={{ style: { fontSize: '25px', style: 'color: white' } }}
        >
          {display === "home" && <button
            id="addBtn"
            className="add-btn"
            onClick={() => {
              changeView("add");
            }}
          >
            <AiOutlinePlus />
          </button>}
        </IconContext.Provider>
        {display === "add" && <AddContact addContact={addContact} changeView={changeView} />}
        {/* <Route path="/" exact/>
        <Route path="/" exact/> */}
        {display === "details" && <ContactDetails contact={detail[0]} thumbnail={detail[1]}/>}
      </div>
    </Router>
  );
}
