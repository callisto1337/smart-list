const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('../public'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.listen(8000);

console.log('Server running at http://127.0.0.1:8000/');