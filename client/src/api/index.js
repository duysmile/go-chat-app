const socket = new WebSocket("ws://localhost:8080/ws");

const connect = (cb) => {
    console.log('Attempting connection...');

    socket.onopen = () => {
        console.log('Socket connected');
    };

    socket.onclose = event => {
        console.log('Socket closed', event);
    };

    socket.onmessage = msg => {
        console.log('Message:', msg);
        cb(msg);
    };

    socket.onerror = err => {
        console.error('Socket error:', err);
    };
};

const sendMsg = msg => {
    console.log('Sending msg:', msg);
    socket.send(msg);
};

export { connect, sendMsg };
