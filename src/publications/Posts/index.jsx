import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import Post from './Post'
import postService from '../../services/post-service'

const Posts = ({ limit }) => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        postService.load(null, limit)
            .then(posts => setPosts(posts));
    }, [limit])

    return <div>
        {posts ?
            < div className={styles.Posts} >
                {
                    posts.map((post) => <Post key={post._id} imageUrl="blue-origami-bird.png" imageAlt="Origami" author={post.author.username}>
                        {post.description}
                    </Post>
                    )
                }
            </div > : <img src="loading.gif" alt="Loading..." height="150" width="150" />
        }
    </div >
}

// class Posts extends React.Component {
//     state = {
//         posts: null
//     };

//     componentDidMount() {
//         postService.load(null, this.props.limit)
//             .then(posts => this.setState({ posts }));
//     }
//     render() {
//         const { posts } = this.state;
//         return posts ? <div className={styles.Posts} >
//             {
//                 posts.map((post) => <Post key={post._id} imageUrl="blue-origami-bird.png" imageAlt="Origami" author={post.user}>
//                     {post.description}
//                 </Post>
//                 )
//             }
//         </div > : <img src="loading.gif"
//             alt="Loading..." height="150" width="150" />
//     }
// }

Posts.propTypes = {
    limit: PropTypes.number
}

export default Posts;