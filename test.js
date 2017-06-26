var http = require('http');
var dt = require('./myFirstModule');
var url = require('url');

var server = http.createServer(function(req, res) {
	res.writeHead(200);
	res.write("The current time is "+dt.myDateTime());
	//Note: everything on port 8080 will be mapped to this page. 
	//localhost:8080/summer will be mapped to this page, with different url than /winter
	res.write("\nRequested URL is "+req.url);
	var q = url.parse(req.url, true).query;
	var year = q.year;
	var month = q.month;
	res.write(year + month);
	res.end('\nHi everybody! This is my test application');
});
server.listen(8080);
