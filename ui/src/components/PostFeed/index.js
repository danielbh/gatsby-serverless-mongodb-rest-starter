import React from 'react';
import PropTypes from 'prop-types'
import {Panel, Grid, Col, Row} from 'react-bootstrap'
import Post from '../Post'

const PostFeed = (props) => {
  return (
    <div>
      <Grid>
        <Col>
          <Post title="This is the title" body="This is the body"/>
          <Post title="This is the title" body="This is the body"/>
          <Post title="This is the title" body="This is the body"/>
        </Col>
      </Grid>
    </div>
  );
};

PostFeed.propTypes = {};
PostFeed.defaultProps = {};

export default PostFeed;
