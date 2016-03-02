var fs = require("fs"),
http = require("http"),
express = require("express"),
mongoose = require("mongoose"),
app = express(),
path = require('path'),
methodOverride = require('method-override'),
logger = require('morgan'),
bodyParser = require('body-parser');
mongoose.Promise = require('bluebird');
db = mongoose.connection;

app.use(logger('dev'));
app.use(methodOverride());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'express');


var validar = function(req, resn, next){
  if(!req.body.usuario) return next(new Error('Preencha o campo e-mail'));
  return next();
};

app.post('/logar', validar, function(req, res){
  var usuario = req.body.nome;
  res.json({ usuario: nome});

});

db.on('error', console.error);
db.once('open', function() {
    console.log('Conexão estabelecida...');
});
mongoose.connect('mongodb://127.0.0.1/express-mongodb-boilerplate');
fs.readdirSync(__dirname + '/schemas/').forEach(function (file) {
	if (~file.indexOf('.js')) require(__dirname + '/schemas/' + file);
});
app.use('/', require('./routes'));
app.use(function(err, req, res, next){
    if (res.headersSent) return next(err);
    res.status(500).json({ message : err.message });
});
app.use(function(req, res, next){
	res.status(404).json({ message: 'Página não encontrada' });
});

http.createServer(app).listen(3040);
console.log("Server starter on :3040");
