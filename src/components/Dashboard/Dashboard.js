import React from 'react';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  return( 
    <section className={styles.container} id="dashboard">
      <h1 className={styles.title}>Welcome to Beach Paradise.</h1>
      <p className={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <button className={styles.bookBtn}>Book Now!</button>
    </section>
  );
}
 
export default Dashboard;