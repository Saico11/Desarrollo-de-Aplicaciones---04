var http = require('http'),
    fs = require('fs');

// Cargar HTML, CSS e imagen
var html = fs.readFileSync("./index.html");
var css = fs.readFileSync("./styles.css");
var img = fs.readFileSync("./bigcat.gif");

http.createServer(function(req, res) {
    if (req.url === '/styles.css') {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(css);
    } else if(req.url === '/index.html'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);
    } else if(req.url === '/bigcat.gif') {
        res.writeHead(200, {'Content-Type': 'image/gif'});
        res.write(img);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found');
    }
    res.end();
}).listen(3000, function() {
    console.log('Servidor corriendo en el puerto 3000');
});
