var http = require("http");
http.createServer(function(req,res)
{
    res.writeHead(300,{"content-type":"text/plain"})
    res.write("Welcome to VJ")
    res.end("Thank You");
}).listen(8080);
