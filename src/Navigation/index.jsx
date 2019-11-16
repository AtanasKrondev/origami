import React from 'react'
import styles from './styles.module.css'
import Link from '../shared/Link'
import links from '../services/link-list-service'


function Navigation() {
    return <nav className={styles.Navigation}>
        <ul>
            <Link to="/">
                <img className={styles.logo} src="white-origami-bird.png" alt="my-app-logo" />
            </Link>
            {links}
        </ul>
    </nav>
}

export default Navigation;