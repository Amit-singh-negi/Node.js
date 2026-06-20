
const http =require('http');

http.createServer((req,res)=>{
    console.log(req.method);
    if(req.url=="/"){
          res.setHeader("Content-Type",'text/html')
        res.write("<h1>Home Page</h1>")
    }
    else if(req.url=="/Login"){
          res.setHeader("Content-Type",'text/html')
        res.write("<h1>Login Page</h1>")
    }
    else {
        res.write("Other Page")
    }
    res.end()
    

}).listen(9900)
