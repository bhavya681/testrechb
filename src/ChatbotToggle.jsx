// src/ChatbotToggle.jsx
import React, { useState } from 'react';

const ChatbotToggle = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi, how can I assist you?', sender: 'bot' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChatbot = () => {
    setOpen(!open);
  };

  const handleMessageSend = () => {
    if (newMessage.trim() === '') return;

    const updatedMessages = [
      ...messages,
      { text: newMessage, sender: 'user' },
      { text: "I'm here to help you!", sender: 'bot' }
    ];
    setMessages(updatedMessages);
    setNewMessage('');
  };

  return (
    <div style={styles.wrapper}>
      <button onClick={toggleChatbot} style={styles.chatToggleButton}>
        {open ? 'Close Chat' : 'Open Chat'}
      </button>

      {open && (
        <div style={styles.chatWindow}>
          {/* Chat Header */}
          <div style={styles.chatHeader}>
            <h4 style={styles.headerText}>Support Chat</h4>
            <button style={styles.closeButton} onClick={toggleChatbot}>
              X
            </button>
          </div>

          {/* Chat Body */}
          <div style={styles.chatBody}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={
                  message.sender === 'user' ? styles.userMessage : styles.botMessage
                }
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div style={styles.chatInputContainer}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              style={styles.chatInput}
            />
            <button onClick={handleMessageSend} style={styles.sendButton}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// CSS Styles
const styles = {
  wrapper: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000
  },
  chatToggleButton: {
    padding: '10px 15px',
    borderRadius: '50px',
    backgroundColor: '#6200EA',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px'
  },
  chatWindow: {
    position: 'absolute',
    bottom: '60px',
    right: '0',
    width: '350px',
    height: '450px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    transition: 'width 0.3s, height 0.3s',
  },
  chatHeader: {
    backgroundColor: '#6200EA',
    color: '#fff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px'
  },
  headerText: {
    margin: 0,
    fontSize: '18px'
  },
  closeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer'
  },
  chatBody: {
    flex: 1,
    padding: '10px',
    backgroundColor: '#f9f9f9',
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    scrollbarWidth: 'none' /* Hide scrollbar in Firefox */,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#6200EA',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '15px',
    margin: '5px 0',
    maxWidth: '70%',
    wordWrap: 'break-word'
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f1f1',
    color: '#000',
    padding: '8px 12px',
    borderRadius: '15px',
    margin: '5px 0',
    maxWidth: '70%',
    wordWrap: 'break-word'
  },
  chatInputContainer: {
    padding: '10px',
    display: 'flex',
    borderTop: '1px solid #ccc'
  },
  chatInput: {
    flex: 1,
    padding: '10px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    marginRight: '10px',
    outline: 'none'
  },
  sendButton: {
    backgroundColor: '#6200EA',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer'
  },

  // Media Queries
  '@media screen and (max-width: 600px)': {
    chatWindow: {
      width: '100%',
      height: '80vh',
      bottom: '0',
      right: '0',
      borderRadius: '0',
      transition: 'width 0.3s, height 0.3s',
    },
    chatToggleButton: {
      bottom: '10px',
      right: '10px',
    }
  }
};

export default ChatbotToggle;
