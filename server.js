//server.js

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);




//ROUTES for our API
require('./app/api/routes')(app);


/*app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        socket.broadcast.emit('hi');
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});*/

//All other routes
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index-kafka.html'); // load our public/index.html file
});


// set our port
var port = process.env.PORT || 3000;

module.exports = app;


//START THE SERVER
http.listen(port, function(){
    console.log('listening on port ' + port);
});