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
            this.setState({ post })
        });
    }

    render(){
        const {post} = this.state;
        return <Post description={post.description} author={post.user} />
    }
}
