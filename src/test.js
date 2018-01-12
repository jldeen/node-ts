const http = require('http');
var port = process.env.PORT || 3000;

const handler = (req, res) => {
    console.log('Server received request. 🔥 ');
    res.end('Hello World!');
};

const server = http.createServer(handler);

server.listen(port, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Server listening on port: ${port}`);
    }
});