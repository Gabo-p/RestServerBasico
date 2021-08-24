const mysql = require('mysql');

var conexion = mysql.createConnection({
    host         : process.env.HOST,
    database     : process.env.DATABASE,
    user         : process.env.USER,
    password     : process.env.PASS,
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});


// conexion.query('SELECT * FROM empleados', function (error, results, fields) {
//     if (error)
//         throw error;

//     results.forEach(result => {
//         console.log(result);
//     });
// });

// connection.end();

module.exports = conexion;