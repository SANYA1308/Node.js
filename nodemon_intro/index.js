//Creating web server using http module

import http from 'http';

const server = http.createServer((req, res)=>{
res.setHeader("Content-Type", "text/plain");
 res.end("Response from server");
});

const PORT = process.env.PORT || 2000;
const HOST = 'localhost';

server.listen(PORT, HOST, ()=>{
    console.log("server running at http://localhost:2000");
});