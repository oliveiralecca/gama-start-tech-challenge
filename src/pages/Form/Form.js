import React from 'react';
import logo from '../../images/logo.png';
import styles from './Form.module.css';
import { Link } from 'react-router-dom';

const Form = () => {
  const days = Array.from({length: 31}, (_, i) => i + 1);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const years = Array.from(Array(33).keys()).map(i => 1971 + i);

  return (
    <div id={styles.formPage}>
      <div id={styles.container}>
        <header>
          <img id={styles.logo} src={logo} alt="JobsNET Logo" />  
          <h1>JobsNET</h1>    
        </header>
      
        <main>
          <form>
            <fieldset>
              <legend>Personal Data</legend>
              <div className="row">
                <div className={`${styles.inputBlock} col-md-6`}>
                  <label htmlFor="name">Full Name<small> *</small></label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className={`${styles.inputBlock} col-md-6`}>
                  <label htmlFor="position">Intended Position</label>
                  <input type="text" id="position" name="position" className={styles.inputOptional} />
                </div>   

                <div id={styles.birth} className={`${styles.inputBlock} col-md-6`}>
                  <label>Birth Date<small> *</small></label>
                  <select defaultValue="" required>
                    <option disabled value="">Month</option>
                    {months.map((item, index) =>
                      <option key={item} value={`${index+1}`}>{item}</option>
                    )}
                  </select>
                  <select defaultValue="" required>
                    <option disabled value="">Day</option>
                    {days.map(item =>
                      <option key={item} value={item}>{item}</option>
                    )}                  
                  </select>
                  <select defaultValue="" required>
                    <option disabled value="">Year</option>
                    {years.map(item =>
                      <option key={item} value={item}>{item}</option>
                    )}                 
                  </select>              
                </div> 

                <div className={`${styles.personal} col-md-6`}>
                  <div className={styles.inputBlock}>
                    <label>Marital Status</label>
                    <select defaultValue="">
                      <option disabled value="">Select</option>
                      <option value="1">Single</option>
                      <option value="2">Married</option>
                      <option value="3">Divorced</option>
                      <option value="4">Widower</option>
                    </select>
                  </div>

                  <div className={styles.inputBlock}>
                    <label>Gender</label>
                    <select defaultValue="">
                      <option disabled value="">Select</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Rather not answer</option>
                    </select>
                  </div>
                </div>

                <div className={`${styles.inputBlock} col-md-12`}>
                  <label htmlFor="address">Address<small> *</small></label>
                  <input type="text" id="address" name="address" required />
                </div>

                <div className={`${styles.inputBlock} col-md-6`}>
                  <label htmlFor="neighborhood">Neighborhood<small> *</small></label>
                  <input type="text" id="neighborhood" name="neighborhood" required />
                </div>

                <div className={`${styles.inputBlock} col-md-6`}>
                  <label htmlFor="city">City<small> *</small></label>
                  <input type="text" id="city" name="city" required />
                </div>

                <div className={`${styles.inputBlock} col-md-4`}>
                  <label htmlFor="cep">CEP</label>
                  <input type="text" id="cep" name="cep" className={styles.inputOptional} />
                </div>

                <div className={`${styles.inputBlock} col-md-4`}>
                  <label htmlFor="phone1">Phone 1</label>
                  <input type="text" id="phone1" name="phone1" className={styles.inputOptional} />
                </div>

                <div className={`${styles.inputBlock} col-md-4`}>
                  <label htmlFor="phone2">Phone 2</label>
                  <input type="text" id="phone2" name="phone2" className={styles.inputOptional} />
                </div>

                <div className={`${styles.inputBlock} col-md-6`}>
                  <label htmlFor="cellphone">Cell Phone</label>
                  <input type="text" id="cellphone" name="cellphone" className={styles.inputOptional} />
                </div>

                <div className={`${styles.inputBlock} col-md-6`}>
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" name="email" className={styles.inputOptional} />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Documents</legend>
              <div className="row">
                <div className={`${styles.inputBlock} col-md-6`}>
                  <label htmlFor="identity">ID<small> *</small></label>
                  <input id="identity" name="identity" required />
                </div>

                <div className={`${styles.inputBlock} col-md-6`}>
                  <label htmlFor="cpf">CPF<small> *</small></label>
                  <input id="cpf" name="cpf" required />
                </div>

                <div className={styles.docs}>
                  <div className={styles.inputBlock}>
                    <label>Vehicle</label>
                    <select defaultValue="">
                      <option disabled value="">Select</option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </select>
                  </div>

                  <div className={styles.inputBlock}>
                    <label>Driving License</label>
                    <select defaultValue="">
                      <option disabled value="">Select</option>
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
