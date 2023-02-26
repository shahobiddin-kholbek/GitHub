import { useState, useEffect } from "react";

const filterContacts = (searchName, listOfContacts) => {
    if (!searchName) {
        return listOfContacts;
    }
    return listOfContacts.filter(({name})=>
        name.toLowerCase().includes(searchName.toLowerCase())
    )
}

export default function Search() {

  const [contacts, setContacts] = useState([]);
  const [searchContact, setSearchContact] = useState("");

  useEffect(() => {
    const Debounce = setTimeout(()=>{
        const filteredName = filterContacts(searchContact, contacts)
        setContacts(filteredName)
    }, 300)
    return ()=> clearTimeout(Debounce)
  },[searchContact] );

  fetch("http://localhost:3002/contacts")
    .then((response) => response.json())
    .then((json) => setContacts(json));
    // console.log(contats);
  return (
    <div>
      <div>Search</div>
      <div>
        <input type="text" onChange={(e)=>setSearchContact(e.target.value)}/>
        <ul>
            {contacts.map((contact, id)=>{
                return <li key={id}>{contact.name}</li>
            })}
        </ul>
      </div>
    </div>
  );
}
