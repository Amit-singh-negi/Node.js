const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {

    fs.readFile("html/form.html", "utf-8", (error, data) => {

        if (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });

        if (req.url === "/") {
            res.write(data);
        } else if (req.url === "/Submit") {
            res.write("<h1>Data Submitted</h1>");
        }

        res.end();
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
