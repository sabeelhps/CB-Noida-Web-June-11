process.env.UV_THREADPOOL_SIZE = 20;
const bcrypt = require('bcrypt');
const http = require('http');

// Throughput

// default : 1300 req/sec 
// UV_THREADPOOL_SIZE
// 1 --->  600 req/sec
// 2 --->  900 req/sec
// 3 --->  1100 req/sec
// 4 --->  1200 req/sec
// 10 --->  1300 req/sec

const server = http.createServer((req, res) => {
    bcrypt.hash("Hello World", 2)
        .then((hash) => {
            res.statusCode = 200;
            res.end(hash);
        })
});

server.listen(1234, () => {
    console.log('Server started at port 1234');
})

