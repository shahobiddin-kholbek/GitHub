import React from "react";
export default function MessageList({
  setMessages,
  messages,
  newMessages
}) {
  const onMsgDeleteClick = (id) => {
    setMessages(
      newMessages.filter((msg) => {
        return msg.id!==id
      }
      )
    );

    fetch(`http://localhost:3002/messages/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="listStyle">
      {messages.map((msg) => {
        return (
          <div className="msgTransform" key={msg.id}>
            <div className="textMsgStyle">
              <div>
                <div>{msg.content}</div>
                <button onClick={() => 
                  onMsgDeleteClick(msg.id)}>X</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
