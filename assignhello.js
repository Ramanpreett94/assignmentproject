var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/plain'});
    res.end('hello it is my first assignment');

}).listen(8080);