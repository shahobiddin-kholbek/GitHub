import { useState } from "react";

export default function MessageInput({ selectedContact, addMessage }) {
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage === "") {
      alert("Type message");
    } else {
      const message = {
        id: new Date().toISOString(),
        receiverId: selectedContact.id,
        senderId: 777,
        content: newMessage,
      };

      fetch("http://localhost:3002/input-messages", {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => setNewMessage(json));
      addMessage(message);
      setNewMessage("");
    }
  };
  
  return (
    <div className="messageInputMain">
      <form onSubmit={(e) => sendMessage(e)}>
        <input
          disabled={selectedContact.id ? false : true}
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
          className="inputMessage"
          type="text"
        />
        <input
          type="submit"
          disabled={selectedContact.id ? false : true}
          value="Send"
          className="sendMessage"
        />
      </form>
    </div>
  );
}
