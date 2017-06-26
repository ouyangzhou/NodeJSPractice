var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
	// Delete a file
	fs.unlink('mynewfile2.txt', function (err) {
  		if (err) throw err;
  		console.log('File deleted!');
	});

	fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  		if (err) throw err;
  		console.log('File Renamed!');
	});
}).listen(8082);