import React from 'react';

import './ChatInput.scss';

const ChatInput = props => {
    return (
        <div className="ChatInput">
            <input type="text" onKeyDown={props.send} />
        </div>
    );
};

export default ChatInput;
