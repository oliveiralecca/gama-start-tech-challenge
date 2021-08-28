const Candidate = require('../models/Candidate');

module.exports = {
  async register(req, res) {

    const { name, position, birth, marital, gender, address, number, neighborhood, city, cep, phone1, phone2, cellphone, email, identity, cpf, vehicle, license } = req.body;

    const newCandidate = new Candidate();

    newCandidate.name = name;
    newCandidate.position = position;
    newCandidate.birth = birth;
    newCandidate.marital = marital;
    newCandidate.gender = gender;
    newCandidate.address = address;
    newCandidate.number = number;
    newCandidate.neighborhood = neighborhood;
    newCandidate.city = city;
    newCandidate.cep = cep;
    newCandidate.phone1 = phone1;
    newCandidate.phone2 = phone2;
    newCandidate.cellphone = cellphone;
    newCandidate.email = email;
    newCandidate.identity = identity;
    newCandidate.cpf = cpf;
    newCandidate.vehicle = vehicle;
    newCandidate.license = license;

    newCandidate.save((err, savedCandidate) => {
      if (err) {
        console.log(err)
        return res.status(500).send('Report error!');
      }
      return res.status(200).send(savedCandidate);
    });
  },
};
