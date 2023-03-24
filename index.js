
// Variable encargada de crear el servidor y las rutas a ser usadas
const server = require('./src/app.js');

// Variable encargada de conectar la base de datos con el back
const connection = require('./src/db.js');

connection.sync({ force: false }).then(() => {
    server.listen(8000, () => {
        console.log('%s listening at 8000');
    });
});