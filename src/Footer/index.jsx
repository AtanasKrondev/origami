import React from 'react'
import styles from './styles.module.css'
import Link from '../shared/Link'
import links from '../services/link-list-service'

function Footer({ disclaimer }) {
    return <footer className={styles.Footer}>
        <ul>
            {links}
            <Link url="#">
                <img src="blue-origami-bird-flipped.png" alt="footer-logo" />
            </Link>
        </ul>
        <p>{disclaimer}</p>
    </footer>
}

export default Footer;