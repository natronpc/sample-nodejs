const express = require('express');
const bodyParser = require('body-parser');
const net = require('net');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.post('/server', (req, res) => {
	var sock = new net.Socket();
	f(req.body.username, req.body.password);
	console.log(`${req.body.username}/${req.body.password}`);

	sock.on('data', function (data) {
		res.send('sup nerd');
		console.log('Received: ' + data);
		sock.destroy(); // kill sock after server's response
	});

	sock.on('close', function () {
		console.log('Connection closed');
	});

	function f(username, password) {
		sock.connect(5150, '178.128.3.152', function () {
			console.log('Connected');
			sock.write(`!NEWUSER!::${username}*!/!*${password}`);
		});
	}

});

app.get('/server', (req, res) => {
	res.send('sup nerd')
})


const port = 8080;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
