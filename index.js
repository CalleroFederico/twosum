//Carga de paquetes.
const express = require('express')
const bodyParser= require('body-parser')
const multer = require('multer');
 
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
 
 
// ROUTES
app.get('/',function(req,res){
  res.sendFile(__dirname + '/front.html');
 
});

//n log(n) 
function findSum (arr, num) {
  var min = 0;
  var max = arr.length;
  if ( (parseInt(arr[max]) * 2) < num) {
    return false;
  } 
  do {
    if (parseInt(arr[min]) + parseInt(arr[max]) == num) {
      return true;
    } else if (parseInt(arr[min]) + parseInt(arr[max]) < num) {
      min++;
    } else {
      max--;
    }
  } while (min < max);
  return false;
};


var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  const del = req.body.delimiter.toString()
  const toFind = parseInt(req.body.toFind.toString());
  if (!file) { //Sin archivo.
    const error = new Error('Porfavor seleccione un archivo')
    error.httpStatusCode = 400
    return next(error)
  } else if (file.size > 500000000) {//Limite de tamaño.
    const error = new Error('Archivo muy grande')
    error.httpStatusCode = 400
    return next(error)
  } else {
    const searchArr = file.buffer.toString().split(del);  
    toReturn = findSum(searchArr, toFind)   
    res.send(toReturn)
  }
  
});
 
const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`TwoSum app escuchando en https://${host}:${port}`);
});
