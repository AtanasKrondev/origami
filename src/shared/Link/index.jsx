import React from 'react'
import styles from './styles.module.css'
import { Link as ReactRouterDomLink } from 'react-router-dom'

function Link({ children, to, component }) {
    return <li className={styles.listItem}>
        <ReactRouterDomLink to={to} component={component}>{children}</ReactRouterDomLink>
    </li>
}

export default Link;