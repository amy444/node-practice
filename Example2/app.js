var http = require('http');

var server=http.createServer(function(req, res){
    res.end("server works");
});

server.listen(3000, 'localhost', function(){
    console.log('Server started at 3000');
});
