var http = require('http');
var fs = require('fs');

var html = fs.readFileSync("./index.html");
var css = fs.readFileSync("./styles.css");
var img = fs.readFileSync("./bigcat.gif");

http.createServer(function(req, res) {
    if (req.url === '/styles.css') {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(css);
        return res.end();
    } else if(req.url === '/index.html' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);
        return res.end();
    } else if(req.url === '/bigcat.gif') {
        res.writeHead(200, {'Content-Type': 'image/gif'});
        res.write(img);
        return res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found');
        return res.end();
    }
}).listen(3000, function() {
    console.log('Servidor corriendo en el puerto 3000');
});
