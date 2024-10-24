var http = require('http');

function mensaje(petic, resp) {
    const fecha = new Date();
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.write('¡Hola! La fecha y hora actuales son: ' + fecha.toString());
    resp.end();
}

var server = http.createServer(mensaje);

server.listen(3000, function() {
    console.log('Servidor en funcionamiento en el puerto 3000');
});
