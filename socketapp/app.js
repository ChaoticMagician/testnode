let express = require('express');
let app =express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/views'))
// app.get('/haha',function(req,res) {
//   res.send('haha.hello world')
// });

io.on('connection',function(socket) {
  console.log(
    // socket,
    '这是socket'
    );
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});