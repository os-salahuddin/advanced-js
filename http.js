import * as http from "http";
const server = new http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('hello world');
        res.end();
    }
})

server.listen(3000);
console.log('Listening on port 3000');