const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {

    if (req.url === "/style.css") {
        fs.readFile("html/style.css", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                return res.end("CSS not found");
            }

            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
        });

        return;
    }

    let file = "/home";

    if (req.url !== "/") {
        file = req.url;
    }

    fs.readFile('html/'+file+'.html', "utf-8", (err, data) => {

        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end("<h1>404 - Page Not Found</h1>");
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);

    });

}).listen(1500)