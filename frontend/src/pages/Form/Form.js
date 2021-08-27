import React from 'react';
import logo from '../../images/logo.png';
import styles from './Form.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Form = () => {
  const [fields, setFields] = React.useState({
    name: '',
    position: '',
    birth: '',
    marital: '0',
    gender: '0',
    address: '',
    number: '',
    neighborhood: '',
    city: '',
    cep: '',
    phone1: '',
    phone2: '',
    cellphone: '',
    email: '',
    identity: '',
    cpf: '',
    vehicle: '0',
    license: '0'
  });

  function handleInputChange(event){
    fields[event.target.name] = event.target.value;
    setFields(fields);  
  }

  function getCEP(event) {
    axios.get(`http://viacep.com.br/ws/${event.target.value}/json/`).then(response => {
      fields.address = response.data.logradouro;
      fields.neighborhood = response.data.bairro;
      fields.city = response.data.localidade;

      const address = document.querySelector('#address');
      if (fields.address !== undefined) {
        address.value = fields.address;
      } else {
        address.value = ''
      }

      const neighborhood = document.querySelector('#neighborhood');
      if (fields.neighborhood !== undefined) {
        neighborhood.value = fields.neighborhood;
      } else {
        neighborhood.value = ''
      }
          
      const city = document.querySelector('#city');
      if (fields.neighborhood !== undefined) {
        city.value = fields.city;
      } else {
        city.value = ''
      }      
    })
  }

  function handleFormSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:3031/register', fields).then(response => {
      alert(response.data.data.length + ' cadastros!');
    })
  } 

  return (
    <div id={styles.formPage}>
      <div id={styles.container}>
        <header>
          <img id={styles.logo} src={logo} alt="JobsNET Logo" />  
          <h1>JobsNET</h1>    
        </header>
      
        <main>
          <form onSubmit={handleFormSubmit}>
            <fieldset>
              <legend>Personal Data</legend>
              <div className="row">
                <div className={`${styles.inputBlock} col-md-6`}>
                  <label htmlFor="name">Full Name<small> *</small></label>
                  <input type="text" id="name" name="name" onChange={handleInputChange} required />
                </div>

                <div className={`${styles.inputBlock} col-md-6`}>
                  <label htmlFor="position">Intended Position<small> *</small></label>
                  <input type="text" id="position" name="position" onChange={handleInputChange} required />
                </div>   

                <div className={`${styles.inputBlock} col-md-6`}>
                  <label htmlFor="birth">Birth Date<small> *</small></label>
                  <input type="date" id="birth" name="birth" onChange={handleInputChange} required />
                </div> 

                <div className={`${styles.personal} col-md-6`}>
                  <div className={styles.inputBlock}>
                    <label>Marital Status</label>
                    <select id="marital" name="marital" defaultValue="0" onChange={handleInputChange}>
                      <option disabled value="0">Select</option>
                      <option value="1">Single</option>
                      <option value="2">Married</option>
                      <option value="3">Divorced</option>
                      <option value="4">Widower</option>
                    </select>
                  </div>

                  <div className={styles.inputBlock}>
                    <label>Gender</label>
                    <select id="gender" name="gender" defaultValue="0" onChange={handleInputChange}>
                      <option disabled value="0">Select</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Rather not answer</option>
                    </select>
                  </div>
                </div>

                <div className={`${styles.inputBlock} col-md-4`}>
                  <label htmlFor="cep">CEP<small> *</small></label>
                  <input type="text" id="cep" name="cep" onChange={handleInputChange} onBlur={getCEP} required />
                </div>

                <div className={`${styles.inputBlock} col-md-8`}>
                  <label htmlFor="address">Address<small> *</small></label>
                  <input type="text" id="address" name="address" onChange={handleInputChange} required />
                </div>

                <div className={`${styles.inputBlock} col-md-5`}>
                  <label htmlFor="neighborhood">Neighborhood<small> *</small></label>
                  <input type="text" id="neighborhood" name="neighborhood" onChange={handleInputChange} required />
                </div>

                <div className={`${styles.inputBlock} col-md-5`}>
                  <label htmlFor="city">City<small> *</small></label>
                  <input type="text" id="city" name="city" onChange={handleInputChange} required />
                </div>

                <div className={`${styles.inputBlock} col-md-2`}>
                  <label htmlFor="address">Number<small> *</small></label>
                  <input type="text" id="number" name="number" onChange={handleInputChange} required />
                </div>

                <div className={`${styles.inputBlock} col-md-4`}>
                  <label htmlFor="phone1">Phone 1</label>
                  <input type="text" id="phone1" name="phone1" className={styles.inputOptional} onChange={handleInputChange} />
                </div>

                <div className={`${styles.inputBlock} col-md-4`}>
                  <label htmlFor="phone2">Phone 2</label>
                  <input type="text" id="phone2" name="phone2" className={styles.inputOptional} onChange={handleInputChange} />
                </div>

                <div className={`${styles.inputBlock} col-md-4`}>
                  <label htmlFor="cellphone">Cell Phone<small> *</small></label>
                  <input type="text" id="cellphone" name="cellphone" onChange={handleInputChange} required />
                </div>

                <div className={`${styles.inputBlock} col-md-12`}>
                  <label htmlFor="email">E-mail<small> *</small></label>
                  <input type="email" id="email" name="email" onChange={handleInputChange} required />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Documents</legend>
              <div className="row">
                <div className={`${styles.inputBlock} col-md-6`}>
                  <label htmlFor="identity">ID</label>
                  <input type="text" id="identity" name="identity" className={styles.inputOptional} onChange={handleInputChange} />
                </div>

                <div className={`${styles.inputBlock} col-md-6`}>
                  <label htmlFor="cpf">CPF<small> *</small></label>
                  <input type="text" id="cpf" name="cpf" onChange={handleInputChange} required />
                </div>

                <div className={styles.docs}>
                  <div className={styles.inputBlock}>
                    <label>Vehicle</label>
                    <select id="vehicle" name="vehicle" defaultValue="0" onChange={handleInputChange}>
                      <option disabled value="0">Select</option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </select>
                  </div>

                  <div className={styles.inputBlock}>
                    <label>Driving License</label>
                    <select id="license" name="license" defaultValue="0" onChange={handleInputChange}>
                      <option disabled value="0">Select</option>
                      <option value="1">A</option>
                      <option value="2">B</option>
                      <option value="3">C</option>
                      <option value="4">D</option>
                      <option value="5">E</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>

            <button type="submit" className={styles.primaryButton}>
              Send
            </button>
          </form>    

          <section className={styles.button}>     
            <Link to="/"><i className="fas fa-arrow-circle-left"></i>&nbsp;BACK</Link>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Form
