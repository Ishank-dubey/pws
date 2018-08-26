const http = require ('http'),
express = require('express'),
app = express(),
server = http.createServer(app);
app.set('trust proxys', false),
contactUsRouter = express.Router();
try {
	app.use(express.urlencoded({extended:true}));
	app.use(express.json());	
} catch (e) {
	console.log();
}

app.use((request, response, next)=>{
	// response.setHeader is a Nodejs api we are using express's consise notation
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
		console.log(req.body + " "+ 
				req.body.name +" "+
				req.body.country +" "+
				req.body.contact +" "+
				req.body.email +" "+req.body.organization +" "+ req.body.message);
	}
	res.send('OK');
});

contactUsRouter.get('/',function(req,res){
	res.send('GET for PWS');
});


app.use('/contactus',contactUsRouter);


server.listen(process.env.PORT || 8090, () => console.log('Example app listening on !'));