import React from 'react'
import {Row, Panel} from 'react-bootstrap';
import PropTypes from 'prop-types'

const Post = ({title, body}) => (
  <Row>
    <Panel>
      <h1>{title}</h1>
      <p>{body}</p>
    </Panel>
  </Row>
);

Post.Proptypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

export default Post