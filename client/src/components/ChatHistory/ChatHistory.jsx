import React from 'react';
import Message from '../Message';
import './ChatHistory.scss';

const ChatHistory = (props) => {
    const messages = props.chatHistory.map((msg, idx) => (
        <Message key={idx} message={msg.data}/>
    ));

    return (
        <div className='ChatHistory'>
            <h2>Chat History</h2>
            {messages}
        </div>
    )
};

export default ChatHistory;
