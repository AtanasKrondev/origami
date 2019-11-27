import React from 'react'
import styles from './styles.module.css'
import Link from '../shared/Link';

function Aside({ isLogged }) {
    return <aside className={styles.Aside}>
        <ul>
            <Link to="/">Posts</Link>
            {isLogged && <Link to="/create-posts">New Post</Link>}
            {isLogged && <Link to="/profile">Profile</Link>}
            {!isLogged && <Link to="/register">Register</Link>}
            {!isLogged && <Link to="/login">Login</Link>}
            {isLogged && <Link to="/logout">Logout</Link>}
        </ul>
    </aside>
}

export default Aside;