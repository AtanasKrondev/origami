import React from 'react'
import Post from '../Posts/Post'
import postService from '../../services/post-service'

export default class Detail extends React.Component {
    state = {
        post: null
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        postService.load(id).then(post => {
            this.setState({ post });
        });
    }

    render() {
        const { post } = this.state;
        return post && <Post description={post.description} author={post.author.username} />
        // return (
        //     <Post key={post._id} imageUrl="blue-origami-bird.png" imageAlt="Origami" author={post.user}>
        //         {post.description}
        //     </Post>
        // )
    }
}
