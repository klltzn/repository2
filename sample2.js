const http = require('http');


const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to mobile legends')
    }
    if(req.url === '/about'){
        res.end()
    }
})

server.listen(8000)