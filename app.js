const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/views/index.html')
})

app.get('/about', (req, res) => {
    res.status(200).sendFile(__dirname + '/views/about.html')
   })

app.get('/tigerente', (req, res) => {
    res.status(200).sendFile(__dirname + '/views/tigerente.html')
   })

app.get('/gallery', (req, res) => {
    res.status(200).sendFile(__dirname + '/views/gallery.html')
   })

app.listen(3000);