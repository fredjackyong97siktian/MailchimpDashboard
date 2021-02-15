// !!!!! PLEASE USE GOOGLE DEVELOPER TO SEND EMAIL/ OTHER METHOD AS IT IS MORE SECURE
//https://stackoverflow.com/questions/45653149/receive-mail-with-nodemailer-without-setting-allow-less-secure-apps-to-access
//configuration
import {saltHashPassword} from './../crypto/encryption_method';
var config = require('./../../../config');
var nodemailer = require('nodemailer');
var handlebars = require('handlebars');
var fs = require('fs');


var readHTMLFile = function(path :any, callback : any) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err : any, html :any) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};

/*handlebars.registerHelper("link", function(text : any, url : any) {
    var url = handlebars.escapeExpression(url),
        text = handlebars.escapeExpression(text)

   return new handlebars.SafeString("<a href='" + url + "'  target='_blank' style='font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 2px; border: 1px solid #3b2349; display: inline-block;'>" + text +"</a>");
});*/

//readHTMLFile(__dirname + 'app/public/pages/emailWithPDF.html', function(err, html)
export const emailsender = (receiver: string, receiver_code : string) => {
    readHTMLFile(__dirname + "./../../../../html/emailpage.html", function(err:any, html :any) {
        var template = handlebars.compile(html);

        //hasing
        const receiver_hash = saltHashPassword(receiver);

        //link
        var fullink = config.BACKEND_API + 'email/verify/'+ receiver_hash.salt + '/'+ receiver_hash.hash +'/'+ receiver_code
        handlebars.registerHelper("link", function(text : any, url : any) {
            var url = handlebars.escapeExpression(url),
                text = handlebars.escapeExpression(text)
        
           return new handlebars.SafeString("<a href='" + url + "'  target='_blank' style='font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 2px; border: 1px solid #3b2349; display: inline-block;'>" + text +"</a>");
        });
        var replacements = {
             url: fullink
        };
        var htmlToSend = template(replacements);
    

    var transporter = nodemailer.createTransport({
        host: config.EMAIL_SENDER_HOST,
        port: config.EMAIL_SENDER_PORT,
        secure: true, // use SSL
        auth: {
            user: config.EMAIL_SENDER_AUTH_USER, // service is detected from the username
            pass: config.EMAIL_SENDER_AUTH_PASS}
        });
          
        var mailOptions = {
            from: config.EMAIL_SENDER_AUTH_USER,
            to: receiver,
            subject: 'Welcome to BSUPKIT',
            html: htmlToSend
        };
          
        transporter.sendMail(mailOptions, function(error : any, info : any){
            
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    });
}



