import React from 'react'
import './Posts.css'
import Post from './Post/Post'
import postService from '../services/post-service'

class Posts extends React.Component {
    state = {
        posts: null
    };

    componentDidMount() {
        postService.load()
            .then(posts => this.setState({ posts }));
    }

    inputChangeHandler = (e) => {
        console.log(e.target.value)
    }

    render() {
        const { posts } = this.state;
        // console.log(this.textInput.value)
        return <div>
            <input
                type="text"
                onChange={this.inputChangeHandler}
            />
            {posts ? <div className="Posts">
                {posts.map((post) => <Post key={post.id} imageUrl="blue-origami-bird.png" imageAlt="Origami" author={post.userId}>
                    {post.body}
                </Post>
                )}
            </div> : <div>Loading...</div>}
        </div>
    }
}

export default Posts;