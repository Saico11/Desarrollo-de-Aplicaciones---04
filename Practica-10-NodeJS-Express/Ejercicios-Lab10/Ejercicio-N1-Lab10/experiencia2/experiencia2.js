var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'musicdb',
    port: 3306
});

conexion.connect(function(err) {
    if (err) {
        console.log("Error de conexión: " + err.stack);
        return;
    }
    console.log("Conectado con ID " + conexion.threadId);
});

// Nueva consulta para contar el número de registros en la tabla 'albums'
conexion.query('SELECT COUNT(*) AS total FROM albums', function (error, results) {
    if (error) throw error;
    console.log('Número total de álbumes: ', results[0].total);
});

conexion.end();
