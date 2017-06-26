var fs = require('fs');
var http = require('http');
var count =0;
http.createServer(function(req, res) {
	count=count+1;
	//June 25th, need to solve sync problem that caused the readFile to be undefined during callback
	fs.readFile('demofile1.html', 'utf8', function(err, data) {
    	res.writeHead(200, {'Content-Type': 'text/html'});
    	res.write(data);
    	res.end();
  });
	fs.appendFile('mynewfile1.txt', 'The '+count+'th '+'Hello content!', function (err) {
  		if (err) throw err;
  		console.log('Saved!');
	});

	fs.open('mynewfile2.txt', 'w', function (err, file) {
  		if (err) throw err;
  		console.log('Saved!');
	});

	var fs = require('fs');

	fs.writeFile('mynewfile3.txt', 'The '+count+'th '+'Hello content!', function (err) {
  		if (err) throw err;
  		console.log('Saved!');
	});

}).listen(8080);