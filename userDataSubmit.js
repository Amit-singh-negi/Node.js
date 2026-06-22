const querystring = require("querystring");

function userDataSubmit(req, res) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const data = querystring.parse(body);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>You can get data from user from here</h1>");
    res.write(`<h2>Name: ${data.name}</h2>`);
    res.write(`<h2>Email: ${data.email}</h2>`);
    res.end();
  });
}

module.exports = userDataSubmit;