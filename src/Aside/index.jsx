import React from 'react'
import styles from './styles.module.css'
import links from '../services/link-list-service'

function Aside() {
    return <aside className={styles.Aside}>
        <ul>
            {links}
            {/* <Link url="#">Link 1</Link>
            <Link url="#">Link 2</Link>
            <Link url="#">Link 3</Link> */}
        </ul>
    </aside>
}

export default Aside;