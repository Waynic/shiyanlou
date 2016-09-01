process.stdin.resume();

process.on('SIGINT', function(){
	console.log('Got sigint, please press Control-d to exit');
})