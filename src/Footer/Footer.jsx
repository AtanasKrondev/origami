import React from 'react'
import './Footer.css'
import Link from '../shared/Link/Link'

function Footer({disclaimer}) {
    return <footer className="Footer">
        <ul>
            <Link url="#">Link 2</Link>
            <Link url="#">Link 3</Link>
            <Link url="#">
                <img id="footer-logo" src="blue-origami-bird-flipped.png" alt="footer-logo" />
            </Link>
        </ul>
        <p>{disclaimer}</p>
    </footer>
}

export default Footer;