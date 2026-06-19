const http = require('http');

http.createServer((req,res)=>{
    res.write(" hello this is amit negi ")
    res.end('hello')
}).listen(5800)
