import React from 'react'
import styles from './styles.module.css'
import Link from '../shared/Link'
// import links from '../services/link-list-service'


function Navigation({ isLogged }) {
    return <nav className={styles.Navigation}>
        <ul>
            <Link to="/">
                <img className={styles.logo} src="white-origami-bird.png" alt="my-app-logo" />
            </Link>
            <Link to="/">Posts</Link>
            {isLogged && <Link to="/create-posts">New Post</Link>}
            {isLogged && <Link to="/profile">Profile</Link>}
            {!isLogged && <Link to="/register">Register</Link>}
            {!isLogged && <Link to="/login">Login</Link>}
            {isLogged && <Link to="/logout">Logout</Link>}
        </ul>
    </nav>
}

export default Navigation;