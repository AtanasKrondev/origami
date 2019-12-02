import React, { useRef, useCallback } from 'react';
import styles from './styles.module.css';
import postService from '../../services/post-service';
import Posts from '../Posts';


const CreatePost = ({ history }) => {
    const textareaRef = useRef();
    const createPost = useCallback(() => {
        const description = textareaRef.current.value;
        postService.create({ description })
            .then(() => {
                history.push('/')
            })
    }, [textareaRef, history])
    return (
        <div className={styles.CreatePost}>
            <form>
                <textarea ref={textareaRef}></textarea>
                <button type="button" onClick={createPost}>Create Post</button>
            </form>
            <Posts limit={3} />
        </div>
    )
}

export default CreatePost;