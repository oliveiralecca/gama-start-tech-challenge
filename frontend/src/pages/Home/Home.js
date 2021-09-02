import React from 'react';
import logo from '../../images/logo.png';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id={styles.landingPage}>
      <div id={styles.container}>
        <header className={styles.animateUp}>
          <img id={styles.logo} src={logo} alt="JobsNET Logo" />  
          <h1>JobsNET</h1>    
        </header>
      
        <main>
          <h1 className={styles.animateUp}>Find your perfect Job</h1>      
          <section className={styles.button}>
            <p className={styles.animateUp}>Fill out the form and wait for an interview.</p>     
            <Link to="/register" className={styles.animateUp}>REGISTER&nbsp;<i className="fas fa-arrow-circle-right"></i></Link>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Home

