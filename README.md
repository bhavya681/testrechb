My React Chatbot
Introduction
This repository provides a React-based chatbot component, ChatbotToggle, which can be easily integrated into both plain HTML projects and React projects. The component is designed to be included via a CDN link and initialized with minimal configuration.

For Plain HTML Projects
To integrate the ChatbotToggle component into a plain HTML project, follow these steps:

1. HTML Setup
Create an HTML file (e.g., index.html):

html

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Plain HTML Project</title>
  </head>
  <body>
    <!-- Container for the chatbot -->
    <div id="chatbot-container"></div>
    <!-- Load React and ReactDOM -->
    <script crossorigin src="https://unpkg.com/react@latest/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@latest/umd/react-dom.development.js"></script>
    <!-- Load your chatbot script -->
    <script crossorigin src="https://bhavya681.github.io/testrechb/chatbot-toggle.umd.js"></script>
    <!-- Initialize the ChatbotToggle component -->
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        if (window.React && window.ReactDOM && window.ChatbotToggle) {
          const chatbotElement = React.createElement(window.ChatbotToggle, {
            botName: "DemoBot",
            welcomeMessage: "Hello! How can I assist you today?",
          });
          ReactDOM.render(
            chatbotElement,
            document.getElementById("chatbot-container")
          );
        } else {
          console.error("React, ReactDOM, or ChatbotToggle is not available.");
        }
      });
    </script>
  </body>
</html>

2. Configuration
Replace https://bhavya681.github.io/testrechb/chatbot-toggle.umd.js with the URL where your ChatbotToggle script is hosted.
Customize botName and welcomeMessage as needed.
For React Projects
To integrate the ChatbotToggle component into a React project, follow these steps:

1. Add the Chatbot Component
Create a new React component (e.g., Chatbot.jsx) in the src/components directory:

jsx

// src/components/Chatbot.jsx

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
const Chatbot = () => {
  useEffect(() => {
    // Mock process object for compatibility
    window.process = {
      env: {
        NODE_ENV: 'production',
      },
    };
    const script = document.createElement('script');
    script.src = 'https://bhavya681.github.io/testrechb/chatbot-toggle.umd.js';
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      if (window.React && window.ReactDOM && window.ChatbotToggle) {
        const chatbotElement = React.createElement(window.ChatbotToggle, {
          botName: "DemoBot",
          welcomeMessage: "Hello! How can I assist you today?",
        });
        ReactDOM.render(
          chatbotElement,
          document.getElementById("chatbot-container")
        );
      }
    };
    return () => {
      document.body.removeChild(script);
      // Clean up mock process object
      delete window.process;
    };
  }, []);
  return <div id="chatbot-container"></div>;
};

export default Chatbot;
2. Integrate the Chatbot Component
Include the Chatbot component in your main App component (e.g., App.jsx):

jsx
Copy code
// src/App.jsx

import React, { useState } from 'react';
import Header from './components/Header';
import StylistForm from './components/StylistForm';
import RecommendationList from './components/RecommendationList';
import { getStyleRecommendations } from './services/StylistService'; // Updated import
import Chatbot from './components/Chatbot'; 
function App() {
  const [recommendations, setRecommendations] = useState([]);
  const handleSubmitForm = async (preferences, weather, occasion) => {
    try {
      const data = await getStyleRecommendations(preferences, weather, occasion); // Updated function call
      setRecommendations(data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };
  return (
    <div className="App">
      <Header />
      <div className="container mx-auto px-4">
        <StylistForm onSubmit={handleSubmitForm} />
        <RecommendationList recommendations={recommendations} />
      </div>
      <Chatbot /> {/* Include the Chatbot component */}
    </div>
  );
}

export default App;
3. Configuration
Update the src attribute of the script tag in Chatbot.jsx to point to your chatbot script.
Customize botName and welcomeMessage in the Chatbot component props.
