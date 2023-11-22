import React from 'react'
import styles from './LoggedOutNav.module.css'
import Logo from '../images/AHI_LOGO.png'

function LoggedOutNav() {
  return (
    <nav>
        <img src={Logo} className={styles.nav_image}>
          {/* <a>
              קישור לעמוד ראשי כשיהיה
          </a> */}
        </img>
        <span className={styles.wrapper_link}>
        <a href="/login" src="" className={styles.login_link}>
            Login
            {" "}
        </a>
        <a href="/signup" src="" className={styles.signup_link}>
            Signup

        </a>
        </span>
    </nav>
  )
}

export default LoggedOutNav