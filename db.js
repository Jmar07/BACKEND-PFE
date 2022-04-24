const mysql = require('mysql');
const conn = mysql.createConnection({

    host:'127.0.0.1',
    user:'root',
    password:'chouikh123',
    database:'support'

});

conn.connect(err=>{
    if(!err) console.log('connected to the data base');
    else console.log(err);
});

module.exports = conn;