import React, { useState, useEffect } from "react";
import MessageHeader from "./messageHeader/MessageHeader";
import MessageInput from "./messageInput/MessageInput";
import MessageList from "./messageList/MessageList";

export default function MessageBox({ selectedContact }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (selectedContact.id) {
      fetch(`http://localhost:3002/messages/${selectedContact.id}/777`)
        .then((response) => response.json())
        .then((json) => setMessages(json));
    }
  }, [selectedContact]);

  const addMessage = (message) => {
    const newMessages = [...messages, message];
    setMessages(newMessages);
  };

  return (
    <div className="messageBoxMain">
      <MessageHeader selectedContact={selectedContact} />
      <MessageInput
        selectedContact={selectedContact}
        setMessages={setMessages}
        addMessage={addMessage}
      />
      <MessageList
        setMessages={setMessages}
        messages={messages}
        newMessages={messages}
      />
    </div>
  );
}
