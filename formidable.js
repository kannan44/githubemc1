var http=require("http");
var path=require("path");
var fs=require("fs");
var formidable=require("formidable");
http.createServer(function(req,res)
{
    if(req.url == '/')
    {
        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<form action="biodata" method="post" enctype="multipart/form-data">');
        res.write('<h1>Welcome to FORM</h1>');
        res.write('Name <input type="text" name="username"><br>');
        res.write('DOB <input type="date" name="dob"><br>');
        res.write('Mobile Number<input type="text" name="phno"><br>');
        res.write('emailid <input type="email" name="email"><br>');
        res.write('Qualification <input type="text" name="qualification"><br>');
        res.write('Upload your resume <input type="file" name="uploadfile"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        res.end();
    }
    else if(req.url=='/biodata'){
        var form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files)
        {
            res.write('<h1>Name:'+ fields.username +'</h1><br>');
            res.write('<h1>DOB:'+ fields.dob +'</h1><br>');
            res.write('<h1>Mobile Number:'+ fields.phno +'</h1><br>');
            res.write('<h1>email:'+ fields.email +'</h1><br>');
            res.write('<h1>Qualification:'+ fields.qualification +'</h1><br>');
            
            var oldpath=files.uploadfile.path;
            var newpath='F:\node'+files.uploadfile.name 

            fs.rename(oldpath,newpath,function(err)
            {
                if(err) throw err;
                res.write('<h1>Your File Location</h1><br>');
                res.write('<h3>Old path:' + oldpath +'</h3><br>');
                res.write('<h3>New Path:' + newpath +'</h3><br>');
                res.write('<h1>Form Submitted Successfully, Thank You!</h1>');
            });
        });
    }
    else{
        res.end("<h1>404 PAGE NOT FOUND!</h1>");
    }
}).listen(8080);