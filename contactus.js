const http = require ('http'),
express = require('express'),
app = express(),
server = http.createServer(app);
app.set('trust proxys', false),
contactUsRouter = express.Router(),
nodemailer = require('nodemailer'),
transporter = nodemailer.createTransport("smtps://XXXXYYYY@gmail.com:"+encodeURIComponent('XXXXXXXXXXX') + "@smtp.gmail.com:465");

app.use(express.urlencoded({extended:true}));
app.use(express.json());	
app.use((request, response, next)=>{
	// response.setHeader is a Nodejs api we are using express's consise
	// notation
	response.set({
		'Access-Control-Allow-Origin': 'http://127.0.0.1:8080',
		'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type'
	});

	next();
});
contactUsRouter.post('/',function(req,res){
	if(req.body && 
			req.body.name && 
			req.body.country && 
			req.body.contact &&
			req.body.email) {
		var text = 'From :' + req.body.name +"\n" + "Emailid" +" :"+req.body.email +"\n" +
		'Contact :'+req.body.country+" "+req.body.contact+ "From :" +req.body.organization + "\n"+
		"Says :" + req.body.message,
		
		mailOptions = {
				  from: 'is@gmail.com',
				  to: 'pa@gmail.com',
				  subject: 'New Contact req for PWS',
				  text: text
				};

				transporter.sendMail(mailOptions, function(error, info){
				  if (error) {
				    console.log(error);
				  } else {
				    console.log('Email sent: ' + info.response);
				  }
				});
	}
	res.send('OK');
});
app.use('/contactus',contactUsRouter);
server.listen(process.env.PORT || 8090, () => console.log('Example app listening on !'));
