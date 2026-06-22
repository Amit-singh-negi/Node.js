const http = require("http");
const userForm = require("./userForm");
const userDataSubmit = require("./userDataSubmit");

http.createServer((req, res) => {

  if (req.url === "/") {
    userForm(req, res);

  } else if (req.url === "/Submit") {
    userDataSubmit(req, res);

  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Page Not Found</h1>");
  }

}).listen(1400)