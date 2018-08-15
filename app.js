const AWS = require('aws-sdk'),
fs = require('fs'),
s3 = new AWS.S3({apiVersion: '2006-03-01'}),
myBucket = 'pritishwebstudio.com',
key = 'index.html';
var params = {
		Bucket: myBucket /* required */,
		Key: key
};

s3.waitFor('objectNotExists',params, (err, data)=> { 
	const stream = fs.createReadStream('./pws/index.html');
	params.Body = stream;
	s3.upload(params, (err, data)=> {
		if (err) console.log(err, err.stack); 
		else     console.log(data);
	});
});


s3.getBucketAccelerateConfiguration({
	Bucket: myBucket}, function(err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else    { 
			console.log(data);
			console.log('success');
			params.Key = 'index.html';  	
			getObject();
		}           // successful response
	});

function getObject(){
	s3.getObject({
		Bucket: myBucket, Key :'index.html'}, function(err, data) {
			if (err) console.log(err); // an error occurred
			else     {
				var data1 = data;
				console.log(data1.Body.toString());
			}          
		});		
}