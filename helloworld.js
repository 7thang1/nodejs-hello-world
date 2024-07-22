var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('day la thinhtt41427');
});
server.listen(8080);
