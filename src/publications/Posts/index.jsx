import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import Post from './Post'
import postService from '../../services/post-service'

class Posts extends React.Component {
    state = {
        posts: null
    };

    componentDidMount() {
        postService.load(null, this.props.limit)
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
        </div > : <img className={styles.loader} src="loading.gif"
            alt="Loading..." height="300" width="300" />
    }
}

Posts.propTypes = {
    limit: PropTypes.number
}

export default Posts;