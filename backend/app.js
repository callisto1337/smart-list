const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('../public'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/auth', function (req, res) {
	res.send(`test`);
});

app.listen(8080);
console.log('Server running at http://localhost:8080/');