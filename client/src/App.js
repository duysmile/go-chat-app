import './App.css';
import { connect, sendMsg } from './api'

function App() {
  connect();

  const send = () => {
    sendMsg('hello');
  };

  return (
    <div className="App">
      <button onClick={send}>Hit</button>
    </div>
  );
}

export default App;
