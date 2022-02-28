const express = require('Express');
const app = express();
const path = require('path');
const port = 3000;
const brain = require('brain.js')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

const net = new brain.NeuralNetwork();
console.log(net)






app.listen(port);