import { connect, sendMsg } from './api';
import { useState } from 'react';

import Header from './components/Header';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  connect(msg => {
    setChatHistory([...chatHistory, msg]);
  });

  const send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = '';
    }
  };

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </div>
  );
}

export default App;
