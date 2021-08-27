var http = require('http'); 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 
app.use(require("cors")());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
 
app.get('/', (req, res, next) => {
  res.json({data: registers});
})
 
const registers = [];
app.post('/register', (req, res, next) => { 
    console.log("Cadastro recebido!");
    //salva no banco de dados
    registers.push({
      name: req.body.name,
      position: req.body.position,
      birth: req.body.birth,
      marital: req.body.marital,
      gender: req.body.gender,
      address: req.body.address,
      number: req.body.number,
      neighborhood: req.body.neighborhood,
      city: req.body.city,
      cep: req.body.cep,
      phone1: req.body.phone1,
      phone2: req.body.phone2,
      cellphone: req.body.cellphone,
      email: req.body.email,
      identity: req.body.identity,
      cpf: req.body.cpf,
      vehicle: req.body.vehicle,
      license: req.body.license
    });
    res.json({data: registers});
}) 
 
var server = http.createServer(app); 
server.listen(3031);
console.log("Servidor escutando na porta 3031...");
