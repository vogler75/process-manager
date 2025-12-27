// Simple Node.js test server
const http = require('http');

const PORT = process.env.PORT || 3001;

let count = 0;

console.log('Test Node.js Server starting...');

const server = http.createServer((req, res) => {
    count++;
    console.log(`Request ${count}: ${req.method} ${req.url}`);

    if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'ok', requests: count }));
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello from Node.js! Request count: ${count}\n`);
    }
});

server.listen(PORT, () => {
    console.log(`Test Node.js Server running on port ${PORT}`);
});

// Heartbeat
setInterval(() => {
    console.log(`Heartbeat: Server running, ${count} requests served`);
}, 10000);
