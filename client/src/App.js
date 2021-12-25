import { connect, sendMsg } from './api';
import { useState } from 'react';

import Header from './components/Header';
import ChatHistory from './components/ChatHistory';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  connect(msg => {
    setChatHistory([...chatHistory, msg]);
  });

  const send = () => {
    sendMsg('hello');
  };

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <button onClick={send}>Hit</button>
    </div>
  );
}

export default App;
