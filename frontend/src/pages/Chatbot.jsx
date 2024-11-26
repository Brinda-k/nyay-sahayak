import React, { useState } from 'react';
import './Chatbot.css'; 

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, user: true }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetch('http://localhost:3001/api/chat', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) throw new Error('Server error'); 

      const data = await response.json();
      const reply = data.reply || 'No response from server.';
      setMessages([...newMessages, { text: reply, user: false }]); 
    } catch (error) {
      console.error('Error fetching from backend:', error);
      setMessages([...newMessages, { text: 'Error fetching response. Please try again.', user: false }]);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user ? 'user' : 'bot'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-input">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Ask me anything..." 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
