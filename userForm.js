function userForm(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(` <form action="/Submit" method="POST">
        <input type="text" name="name" placeholder="enter your name ">
        <input type="text" name="email" placeholder="enter your e mail">
        <button>Submit</button>

    </form>`)
    res.end();


}
module.exports=userForm;