const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  name: { type: String, unique: false, required: true },
  position: { type: String, unique: false, required: true },
  birth: { type: String, unique: false, required: true },
  marital: { type: String, unique: false, required: false },
  gender: { type: String, unique: false, required: false },
  address: { type: String, unique: false, required: true },
  number: { type: String, unique: false, required: true },
  neighborhood: { type: String, unique: false, required: true },
  city: { type: String, unique: false, required: true },
  cep: { type: String, unique: false, required: true },
  phone1: { type: String, unique: false, required: false },
  phone2: { type: String, unique: false, required: false },
  cellphone: { type: String, unique: false, required: true },
  email: { type: String, unique: false, required: true },
  identity: { type: String, unique: false, required: false },
  cpf: { type: String, unique: true, required: true },
  vehicle: { type: String, unique: false, required: false },
  license: { type: String, unique: false, required: false }
}, {
  timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);
