import React from 'react'
import styles from './styles.module.css'
import Posts from '../publications/Posts'

export default function Profile() {
    return (
        <div className={styles.Profile}>
            <img src="" alt="profile" />
            <div className={styles['personal-info']}>
                <p><span>Email:</span>your@mail.com</p>
                <p><span>Posts:</span>6969</p>
            </div>
            <Posts limit={3} />
        </div>
    )
}