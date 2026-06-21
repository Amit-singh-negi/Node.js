const http = require("http");
const fs = require("fs");

const queryString = require('querystring')



http.createServer((req, res) => {

    fs.readFile("html/form.html", "utf-8", (error, data) => {

        if (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
            return;
        }

        

        if (req.url === "/") {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end()
        } else if (req.url === "/Submit" && req.method==='POST') {
            let dataBody=[];
            req.on('data',(chunk)=>{
                dataBody.push(chunk)
            })
            req.on('end', ()=>{
                let rawData = Buffer.concat(dataBody).toString();
                let readableData= queryString.parse(rawData)
                console.log(readableData);
              
                 res.writeHead(200, { "Content-Type": "text/html" });
           
            res.write("<h1>Data Submitted</h1>");
            res.write(`<h2>Name:${readableData.name}</h2>`);
            res.write(`<h2>Email:${readableData.email}</h2>`);
               
             res.end();
            }) ;
             
        }
     

      
    });

}).listen(1200)

// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'})
//     console.log(req.url);

//    if(req.url=='/'){
//      res.write(
//       `  <form action="/Submit" method='post'>
//         <input type='text' name="name" placeholder='enter name...'/>
//          <input type='text' name="email" placeholder='enter email...'/>
//          <button>Submit</button>

//         </form>`
//     )
//    } else if(req.url=='/Submit'){
//     res.write('<h1> Data Submitted </h1>')
//    }
//    res.end()
// }).listen(1200)
