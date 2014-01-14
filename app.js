///////////////BASIC SETTING////////////////////////////////////////////////////
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var usuarios = new Array(); //Todos los usuarios conectados del juego
var usuario = new Array(); //Usuario cliente


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}
//////////////////////////////////VARIABLES////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////
app.get('/', routes.index);

//app.get('/users', user.list);


io.sockets.on('connection', function (socket) {
	socket.on('login', function(data,callback){
		callback(true);
		console.log("Logueado "+data);
		var NumAleatorio1 = Math.floor(Math.random()*500+10);
		var NumAleatorio2 = Math.floor(Math.random()*200+10); 
		usuario = {'id':usuarios.length,'nombre':data,'vida':100,'x':NumAleatorio1,'y':NumAleatorio2};
		usuarios.push(usuario);
		socket.usuario = usuario;
		socket.emit('usuarios', usuarios);
		socket.broadcast.emit('nuevoUsuario', usuario);
	});

	socket.on('movimiento', function (data){
		console.log(usuarios.indexOf(socket.usuario));
		if (data.eje == 'x'){
			usuarios[usuarios.indexOf(socket.usuario)].x += data.cantidad;
			socket.usuario.x += data.cantidad;
		};
		io.sockets.emit('movimiento', {'id':socket.usuario.id, 'eje':'x','cantidad':10});
	});

	socket.on('disconnect', function () {
	    if (!socket.usuario) return;
	    if (usuarios.indexOf(socket.usuario) > -1) {
	      usuarios.splice(usuarios.indexOf(socket.usuario), 1);
	    }
	    socket.broadcast.emit('anuncio', {
	      nick: 'system',
	      message: socket.usuario['nombre'] + ' disconnected' 
	    });
	    io.sockets.emit('usuarios', usuarios);
 	});
});

server.listen(app.get('port'), function()
{
	console.log('Express server listening on port ' + app.get('port'));
});
