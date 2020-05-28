
' use strict ';

const 
  db = require('mysql'),
  conf = require('./configConnection.json');

class dbConnection {
  op = {
   host: conf.mysql.host,
   port: conf.mysql.port,
   user: conf.mysql.user,
   password: conf.mysql.pass,
   database: conf.mysql.db,
 };
 connect(con) {
   let opCon = this.op;
   con = db.createConnection(opCon);
   con.connect((err) => {
     return (err) ? 
      console.error(`Error al Conectarse a MySQL: ${err.stack}`) 
     :
      console.log(`Conexión establecida con MySQL N°: ${con.threadId} `);
    });
    
    return con;
 }

}

// const connect = new dbConnection();
// console.log(connect.connect());

module.exports = dbConnection;
