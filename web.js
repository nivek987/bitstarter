var express = require ('express'), fs = require('fs');

var index_data = new Buffer(16);

fs.readFile('index.html', function (err, data) {// #This addresses my fs.readFile variable
	  if (err) throw err;
	  index_data = data;
  });

var app = express.createServer(express.logger());

app.get ('/', function(request, response) {
response.send(index_data.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
