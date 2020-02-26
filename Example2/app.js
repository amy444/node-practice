var http = require('http');
var events=require('events');

var eventEmitter=new events.EventEmitter();

var server=http.createServer(function(req, res){
    eventEmitter.emit('someone requested', 'TEST'); // event trigger
    res.end("server works");
});

eventEmitter.on('someone requested', function(data){
    console.log('request has been done on server', data);
}); //event listener 

server.listen(3000, 'localhost', function(){
    console.log('Server started at 3000');
});
