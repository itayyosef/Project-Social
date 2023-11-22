import React from 'react'
import styles from './LoggedOutNav.module.css'

function LoggedInNav() {
  return (
   <nav>
        <img src={Logo} className={styles.nav_image}>
          {/* <a>
              קישור לעמוד ראשי כשיהיה
          </a> */}
        </img>
        <span className={styles.wrapper_link}>
        <a href="/" src="" className=''>
            Fill
            {" "}
        </a>
        <a href="/signup" src="" className="">
            Fill

        </a>
        </span>
   </nav>
  )
}

export default LoggedInNav