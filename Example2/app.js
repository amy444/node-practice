/*
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
*/



/*
//calling http library
var http =require('http');
var url= require('url');

//creating sever
var server =http.createServer(function(req, res){

    //setting content header
    res.writeHead(200, ('Content Type', 'text/html'));
    var q= url.parse(req.url, true).query;
    var txt=q.year + " "+ q.month;

    //send string to response
    res.end(txt);

});

//assigning 8092 as server listening port
server.listen(8092);
*/

var express=require('express');
var http=require('http');
var fs=require('fs');

var app=express();
var server=http.createServer(app); //created server using the basic method buthave all the functionalities of express server


app.get('/', function(req, res){
    res.send('Express works');
});

app.get('/tasks', function(req, res){
    fs.readFile('./db.json', function(err, data){
      //  res.send(data.toString());
        var tasks=JSON.parse(data.toString()).tasks;
        res.json(data.toString());
       
    });
    //res.send('<h1>amit  works</h1>'); 
});



server.listen(3000, function(){
    console.log('Server is listening at 3000');
});