//Creating web server using http module

import http from 'http';
import fs from 'fs';
const server = http.createServer((req, res)=>{
res.writeHead(200, "OK", {'Content-Type': 'text/html'} )

if(req.url == '/'){
    fs.readFile('./public/home.html', (error, data) => {
        if(error) throw error;
        res.end(data);

    })
    // res.end("<h1>HOME PAGE</h1>");


}
else if(req.url == '/about'){
    // res.end("<h1>ABOUT PAGE</h1>");
    fs.readFile('./public/about.html', (error, data) => {
        if(error) throw error;
        res.end(data);

})
}
else{
    res.end("<h1>404 Error Page Not Found</h1>");
}
});

const PORT = process.env.PORT || 2000;
const HOST = 'localhost';

server.listen(PORT, HOST, ()=>{
    console.log("server running at http://localhost:2000");
});