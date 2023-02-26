import "./App.css";
import React, { useState } from "react";
import Contacts from "./components/contacts/Contacts";
import MessageBox from "./components/messageBox/MessageBox";
import Auth from "./components/auth/Auth";
// import Search from "./components/Search";

function App() {
  const [selectedContact, setSelectedContact] = useState({});

  const chooseContact = (contact) => {
    setSelectedContact(contact);
  };
  return (
    <div>
      {JSON.parse(localStorage.getItem("user")) !== "7" ? (
        <Auth />
      ) : (
        <div>
          {/* <Search/> */}
          <Contacts chooseContact={chooseContact} />
          <MessageBox selectedContact={selectedContact} />
        </div>
      )}
    </div>
  );
}

export default App;


