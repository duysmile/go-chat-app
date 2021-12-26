import React from 'react';

import './Message.scss';

const Message = props => {
    const msg = JSON.parse(props.message);
    return (
        <div className="Message">
            {msg.body}
        </div>
    );
};

export default Message;
