import React from 'react'
import styles from './styles.module.css'

export default function Register() {
    return (
        <div className={styles["Register"]}>
            <form action="">
                <div className={styles["form-control"]}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />
                </div>
                <div className={styles["form-control"]}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className={styles["form-control"]}>
                    <label htmlFor="repassword">Re-password</label>
                    <input type="password" id="repassword" name="repassword" />
                </div>
                <div className={styles["form-control"]}
                ><button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}