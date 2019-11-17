import React from 'react'
import styles from './styles.module.css'
import Posts from '../Posts'


export default function CreatePost() {
    return (
        <div className={styles.CreatePost}>
            <form action="">
                <textarea name="" id=""></textarea>
                <button>Post</button>
            </form>
            <Posts limit={3} />
        </div>
    )
}