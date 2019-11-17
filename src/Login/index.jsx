import React from 'react'
import styles from './styles.module.css'

export default function Login() {
    return (
        <div className={styles["Login"]}>
            <form action="">
                <div className={styles["form-control"]}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />
                </div>
                <div className={styles["form-control"]}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className={styles["form-control"]}
                ><button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}