import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/style.scss';
import './style/form.scss';
import './style/contactdetails.scss';
import AddContact from './container/AddContact';
import DisplayContact from './container/DisplayContact';
import ContactDetails from './container/ContactDetails';
import { IconContext } from 'react-icons';
import { AiOutlinePlus } from 'react-icons/ai';

export default function App() {
  const [showAddContact, setShowAddContact] = useState(false);
  const [contact, setContact] = useState('');

  useEffect(() => {
    const getContact = async () => {
      const contactFromServer = await fetchContact();
      setContact(contactFromServer);
    };
    getContact();
  }, []);
  const fetchContact = async () => {
    const res = await fetch(
      'https://my-json-server.typicode.com/St-Pardon/phonebook-data/contacts'
    );
    const data = await res.json();
    return data;
  };

  const addContact = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newContact = { id, ...task };
    setContact([...contact, newContact]);
    console.log(task);
  };

  return (
    <Router>
      <div className="container">
        {!showAddContact && <DisplayContact contact={contact} />}
        <IconContext.Provider
          value={{ style: { fontSize: '25px', style: 'color: white' } }}
        >
          <button
            id="addBtn"
            className="add-btn"
            onClick={() => {
              setShowAddContact(!showAddContact);
            }}
          >
            <AiOutlinePlus />
          </button>
        </IconContext.Provider>
        {showAddContact && <AddContact addContact={addContact} />}
        {/* <Route path="/" exact/>
        <Route path="/" exact/> */}
        {/* <ContactDetails /> */}
      </div>
    </Router>
  );
}
