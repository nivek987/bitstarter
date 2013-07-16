var buffer = new Buffer("utf-8")


fs.readFile('/index.html', function (err, data) {// #This addresses my fs.readFile variable
	  if (err) throw err;
	  console.log(fs.readFile + buf.toString);// #And this is for my buffer to splice in the data from this index.html file
  });


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
