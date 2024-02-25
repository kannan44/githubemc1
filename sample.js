var http = require("http");
var fs = require("fs");
var url = require("url");
http.createServer(function(req,res){
      var weblink=url.parse(req.url,true);
      var filepath="."+weblink.pathname
      fs.readFile(filepath,function(err,data){
        if(err){
            res.writeHead(404,{'content-type':'text/html'})
            res.write("404 file not found")
        }
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
      })
}).listen(8080);