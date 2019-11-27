import React from 'react'
import styles from './styles.module.css'
import Link from '../shared/Link'

function Footer({ disclaimer, isLogged }) {
    return <footer className={styles.Footer}>
        <ul>
            <Link to="/">Posts</Link>
            {isLogged && <Link to="/create-posts">New Post</Link>}
            {isLogged && <Link to="/profile">Profile</Link>}
            {!isLogged && <Link to="/register">Register</Link>}
            {!isLogged && <Link to="/login">Login</Link>}
            {isLogged && <Link to="/logout">Logout</Link>}
            <Link to="/">
                <img src="blue-origami-bird-flipped.png" alt="footer-logo" />
            </Link>
        </ul>
        <p>{disclaimer}</p>
    </footer>
}

export default Footer;