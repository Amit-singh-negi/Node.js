const http = require('http');

http.createServer((req,res)=>{
    res.write(" <h1>hello this is amit negi</h1> ")
    res.end('hello')
}).listen(5800)
