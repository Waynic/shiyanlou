var net = require('net');

var server = net.createServer();
var sockets = [];

server.on('connection', function(socket){
	console.log('Get a new connection');
	
	socket.push(socket);

	socket.on('data', function(data){
		console.log('Got data: ', data);
		socket.forEach(function(otherSocket){
			if(otherSocket !== socket){
				otherSocket.write(data);
			}
		})
	});

	socket.on('close', function(){
		console.log('A client connection closed');
		var index = socket.index0f(socket);
		socket.splice(index, 1);
	})
});

server.on('error', function(err){
		console.log('Server error: ', err.message);
});

server.on('close', function(){
		console.log('server closed');
});

server.listen(8080);