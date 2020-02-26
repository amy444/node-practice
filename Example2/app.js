var http = require('http');
var events=require('events');

var eventEmitter=new events.EventEmitter();

var server=http.createServer(function(req, res){
    eventEmitter.emit('amit requested'); // event trigger
    res.end("server works");
});

eventEmitter.on('amit requested', function(){
    console.log('request has been done on server')
}); //event listener 

server.listen(3000, 'localhost', function(){
    console.log('Server started at 3000');
});
