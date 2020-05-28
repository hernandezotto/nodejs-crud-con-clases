
' use strict ';

const dbConnection = require('./database/dbConnection');

class dataModal extends dbConnection {
  query = super.connect();
   dataRead( response,source) {
    const q = this.query;
    response = q.query(` SELECT *FROM news `, source );
    return source;
    
}
// create(){}
}
  // const modal = new dataModal();
  // console.log(modal.dataRead());
  
module.exports=dataModal;