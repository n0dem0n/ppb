var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

var path = require('path');

var cors = require("cors")
var cor = cors();
app.use(cor);
app.use(express.static(path.join(__dirname, "../public")));

var penjual = require('../model/penjual.js');

app.get('/api/penjual', function (req, res) {
    penjual.getPenjual(function (err, result) {
        if (!err) {
            res.send(result);
        }
        else {
            console.log(err);
            res.status(500).send(err);
        }
    });
});

var user = require('../model/user');
app.get('/api/user', urlencodedParser, jsonParser, function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    user.getUsers(email, password, function (err, result) {
        if (!err) {
            res.send(result);
        }
        else {
            console.log(err);
            res.status(500).send(err);
        }
    });
});

var menu = require('../model/menu');
app.get('/api/menu/:id_user', urlencodedParser, jsonParser, function (req, res) {
    var id_user = req.params.id_user;


    menu.getMenu(id_user, function (err, result) {
        if (!err) {
            res.send(result);
        }
        else {
            console.log(err);
            res.status(500).send(err);
        }
    })
})

module.exports = app