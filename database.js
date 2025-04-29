const database = require('mysql2');

const connection = database.createConnection({
    host : process.env.DB_host,
    user : process.env.DB_user,
    password : process.env.DB_password,
    database : process.env.DB_name
});

connection.connect(err => {
    if(err) throw err;
    console.log('Database connected!');
});

module.exports = connection;