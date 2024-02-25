var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
    
    fs.stat("demo2.txt",function(err,stats)
    {
        if(err){
            return console.log(err);
        }
        console.log(stats);
        res.write(" Is it simple file: " + stats.isFile());
        res.write(" Is it directory: " + stats.isDirectory());
        res.end();
    });

}).listen(8080);

//Asynchronous 



// //Synchronous
// var data=fs.readFileSync("demo.txt");
// console.log(" Synch data: " + data.toString());
// console.log("Program end");