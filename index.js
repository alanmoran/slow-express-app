const express = require('express')
const app = express()

var timeout = require('connect-timeout');

//Set global timeout to 20 minutes
app.use(timeout(20 * 1000 * 60));

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
	ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
	wait_min = process.env.WAIT_MIN || 5;

app.get('/slow', function(req, res) {

	req.setTimeout(0) // no timeout for this route

	var timeout = wait_min * 1000 * 60;
	console.log('Timer is set to %s minutes. Starting....');

	setTimeout(function() {
		res.send('Slow - Hello World')
	}, timeout);;

})

app.get('/', function(req, res) {
	res.send('Hello World');
})


// Port for server to start and listen on
app.listen(port, ip, () => console.log('App started on http://%s:%s', ip, port))