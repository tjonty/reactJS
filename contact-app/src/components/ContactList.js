import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log('data');
    console.log(props);
    const renderCoList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} />
        )
    })
    
    return (
        <div>{renderCoList}</div>
    );
}

export default ContactList;