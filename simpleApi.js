// const http = require("http");
//   const userData=[
//     {
//       name: "amit",
//       age: 24,
//     },
//     {
//       name: "rahul",
//       age: 23,
//     },
//     {
//       name: "saurav",
//       age: 24,
//     }
//   ];

// http.createServer((req, res) => {
//     res.setHeader("Content-Type", "application/json");
// res.write(JSON.stringify(userData))
//   res.end()
// }).listen(7800)



const http= require('http')


http.createServer(async(req,res)=>{
    const response=await fetch("https://dummyjson.com/users")
    const data=await response.json()
    res.write(JSON.stringify(data))
    res.end()
 
    

}).listen(9800)