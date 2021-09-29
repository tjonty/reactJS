import React, { useState} from 'react';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContent';
import './App.css';

function App() {

  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts(...contacts, contact);
    setContacts(contact)
  }
  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
      {/* <ContactCard /> */}
    </div>
    );
}

export default App;
