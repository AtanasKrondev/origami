import React from 'react'
import styles from './styles.module.css'

function Post({ imageUrl, imageAlt, children, author }) {
    return (
        <div className={styles.Post}>
            <img src={imageUrl} alt={imageAlt} />
            <p className={styles.description}>{children}</p>
            <div>
                <span>
                    <small>Author: </small>
                    {author}
                </span>
            </div>
        </div>)
}

export default Post;