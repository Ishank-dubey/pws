const http = require ('http'),
express = require('express'),
app = express(),
server = http.createServer(app);
app.set('trust proxys', false),
contactUsRouter = express.Router();

//app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use((request, response, next)=>{
	// response.setHeader is a Nodejs api we are using express's consise notation
	response.set({
		  'Access-Control-Allow-Origin': '*',
		  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
		  'Access-Control-Allow-Headers': 'Content-Type'
		});
	next();
});
contactUsRouter.post('/',function(req,res){
	console.log(req.get('Content-Type'));
	
	res.send({'POST for Login':req.body});
});

contactUsRouter.get('/',function(req,res){
	res.send('GET for Loginww');
});


app.use('/contactus',contactUsRouter);


server.listen(process.env.PORT || 8090, () => console.log('Example app listening on !'));