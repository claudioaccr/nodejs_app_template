var express = require("express");

var app = express();

app.use(express.static('public'));

// Rotas para arquivos estáticos
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));

// Retorna a porta
const PORT = process.env.PORT;

var server = app.listen(PORT, function(){
    var port = server.address().port;
    console.log("Servidor iniciado em http://localhost:%s", port);
});