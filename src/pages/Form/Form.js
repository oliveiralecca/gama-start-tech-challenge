import React from 'react';
import logo from '../../images/logo.png';
import styles from './Form.module.css';
import { Link } from 'react-router-dom';

const Form = () => {
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
              <div className={styles.inputBlock}>
                <label htmlFor="name">Full Name<small> *</small></label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className={styles.inputBlock}>
                <label htmlFor="position">Intended Position</label>
                <input type="text" id="position" name="position" className={styles.inputOptional} />
              </div>   

              <div className={styles.inputBlock}>
                <label>Birth Date<small> *</small></label>
                <select required>
                  <option selected disabled value="">Month</option>
                  <option value="1">Jan</option>
                  <option value="2">Feb</option>
                  <option value="3">Mar</option>
                  <option value="4">Apr</option>
                  <option value="5">May</option>
                  <option value="6">Jun</option>
                  <option value="7">Jul</option>
                  <option value="8">Aug</option>
                  <option value="9">Sep</option>
                  <option value="10">Oct</option>
                  <option value="11">Nov</option>
                  <option value="12">Dec</option>
                </select>
                <select required>
                  <option selected disabled value="">Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <select required>
                  <option selected disabled value="">Year</option>
                  <option value="1">1990</option>
                  <option value="2">1991</option>
                  <option value="3">1992</option>
                  <option value="4">1993</option>
                  <option value="5">1994</option>
                  <option value="6">1995</option>
                  <option value="7">1996</option>
                  <option value="8">1997</option>
                  <option value="9">1998</option>
                  <option value="10">1999</option>
                  <option value="11">2000</option>
                  <option value="12">2001</option>
                  <option value="13">2002</option>
                  <option value="14">2003</option>
                </select>              
              </div> 

              <div className={styles.personal}>
                <div className={styles.inputBlock}>
                  <label>Marital Status</label>
                  <select>
                    <option selected disabled value="">Select</option>
                    <option value="1">Single</option>
                    <option value="2">Married</option>
                    <option value="3">Divorced</option>
                    <option value="4">Widower</option>
                  </select>
                </div>

                <div className={styles.inputBlock}>
                  <label>Gender</label>
                  <select>
                    <option selected disabled value="">Select</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Rather not answer</option>
                  </select>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Documents</legend>
              <div className={styles.inputBlock}>
                <label htmlFor="identity">ID<small> *</small></label>
                <input id="identity" name="identity" required />
              </div>

              <div className={styles.inputBlock}>
                <label htmlFor="cpf">CPF<small> *</small></label>
                <input id="cpf" name="cpf" required />
              </div>

              <div className={styles.docs}>
                <div className={styles.inputBlock}>
                  <label>Vehicle</label>
                  <select>
                    <option selected disabled value="">Select</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </select>
                </div>

                <div className={styles.inputBlock}>
                  <label>Driving License</label>
                  <select>
                    <option selected disabled value="">Select</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    <option value="4">D</option>
                    <option value="5">E</option>
                  </select>
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
