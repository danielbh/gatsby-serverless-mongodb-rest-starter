import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Grid, Col, Well} from 'react-bootstrap'
import Post from '../../components/Post/index'
import {fetchPosts} from '../../actions'

class PostFeed extends Component {

  state = {
    posts: []
  };

  componentDidMount() {
    fetchPosts().then((posts) => {
      this.setState({posts})
    })
  }

  render() {

    const posts = this.state.posts;
    let output;

    if(posts.length > 0) {
      output = posts.map((post) => (
        <Post key={post._id} title={post.title} body={post.body}/>
      ))
    } else {
      output = <Well bsSize="large">No Posts Submitted</Well>
    }

    return ( <Grid><Col>{output}</Col></Grid> )
  }
}

PostFeed.propTypes = {};
PostFeed.defaultProps = {};

export default PostFeed;
