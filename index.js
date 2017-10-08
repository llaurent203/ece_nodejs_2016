// Import a module
var http = require('http')
var server =  require('./server.js')
// Declare an http server
http.createServer(server.logic).listen(8888, '127.0.0.1')