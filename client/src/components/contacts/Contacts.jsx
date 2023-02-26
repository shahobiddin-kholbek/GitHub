// import data from '../../mockData/contacts.json'
import React, { useState, useEffect } from "react";
import "../../css/main.css";

export default function Contacts({ chooseContact }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/contacts")
      .then((response) => response.json())
      .then((json) => setContacts(json));
  }, []);
 

  return (
    <div className="mainContactsStyles">
      {contacts.map((contact) => {
        return (
          <div
            onClick={() => chooseContact(contact)}
            key={contact.id}
            className="contactsIconName"
          >
            <div className="contactIcon">
              <img src={contact.img} alt="llll" />
            </div>
            <div className="nameLastnameStyles">
              <div>
                {" "}
                <h5>{contact.name}</h5>
              </div>
              <div className="">{contact.lastname}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
