import React from 'react'
import styles from './styles.module.css'
import Post from './Post'
import postService from '../services/post-service'

class Posts extends React.Component {
    state = {
        posts: null
    };

    componentDidMount() {
        postService.load()
            .then(posts => this.setState({ posts }));
    }
    render() {
        const { posts } = this.state;
        return posts ? <div className={styles.Posts} >
            {
                posts.map((post) => <Post key={post._id} imageUrl="blue-origami-bird.png" imageAlt="Origami" author={post.user}>
                    {post.description}
                </Post>
                )
            }
        </div > : <div>Loading...</div>
    }
}

export default Posts;