import React, { useEffect, useState} from 'react';
import Header from './Header'; 
import ContactList from './ContactList';
import AddContact from './AddContent';
import './App.css';

function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  
  const addContactHandler = (contact) => {
    setContacts([...contacts,{ id:uuid,  ...contact }]);
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log("sdgf" + retriveContacts);
    if (retriveContacts.length > 0) setContacts(retriveContacts);
  }, []);

  useEffect( () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

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
