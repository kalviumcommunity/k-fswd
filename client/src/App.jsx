import React, { useState, useEffect } from 'react';
import './App.css'; 


function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessage('');
  };

  return (
    <div className="chat-container">
      <ul className="chat-messages">
        {chat.map((msg, index) => (
          <li key={index} className="message">{msg}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage} className="message-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="message-input"
          placeholder="Type a message..."
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
}

export default App;
