var nodemailer=require("nodemailer");

var sender=nodemailer.createTransport(
    {
        service:"gmail",
        auth:{
            user:"k46796038@gmail.com",
            pass:"mefytoqzqhxghtex"
        }
    }
);

var composemail={
    from:"k46796038@gmail.com",
    to:"nithishkannan12120@gmail.com",
    subject:"we sent a mail via nodejs",
    text:"hi how are you, if you fine..."
}

sender.sendMail(composemail,function(error,info)
{
    if (error){
        console.log(error);
    }
    else{
        console.log("Email has been sent successfullyyyyyy:"+info.response);
    }
});
