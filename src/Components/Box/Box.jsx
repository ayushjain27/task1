import React from 'react';
import styles from './Box.module.css';

const Box = () => {
  return (
    <>
    <div style={{height: '400px', position: 'relative', top:'60px'}} className="container d-flex flex-column ml-auto mr-auto">
          <img style={{margin: '0px auto'}} src="/images/login-portal.gif" alt="" />
          <img className={`${styles.box} border border-primary p-3`} src="/images/star.gif" alt="" />
          <h3 style={{ position: 'relative', top:'20px', margin: '0px auto', textAlign: 'center'}}>Massmatic Cyber Forensic Courses</h3>
          <div class={styles.line}>
            <div class={styles.circle}></div>
          </div>
    </div>
    </>
  )
}

export default Box
