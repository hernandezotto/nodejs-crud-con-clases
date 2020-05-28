
' use strict ';
const 
  express = require('express'),
  app = express(),
  path = require('path').join,
  publicDir = path(__dirname + '/public'),
  data = require('body-parser');
  dataModal = require('./Models/dataModels'),
  port = 3000;


class dataControl extends dataModal{

  
  rows ;



  read(res,sour) {
    sour = (error,result)=>{
      if(error){
        throw error;
      }else{
        this.rows = result;
        console.log(`Success query`, this.rows);
        
      }
      
    };

    res = super.dataRead(res,sour);
    
    return this.rows;
  }

  
}
  const control = new dataControl();
  console.log(
    control.responseData()
    
    );


const lectura =  (require, response) => {
  response.render('index',{ newsRows:control.rows});
}






app
  .set('view engine', 'pug')
  .get('/', lectura)
  .use(express.static(publicDir))
  .use(data.urlencoded({extended:false}))
  .use(data.json())
  .listen(port, () => console.log(`Corriendo en el siguiente enlace http://localhost:${+port}`));

