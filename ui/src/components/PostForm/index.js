import React from 'react'

import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap'

const PostForm = () => (
  <Grid>
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} >
        <div className='post-form'>
          <Form horizontal>
            <FormGroup controlId='formHorizontalName'
            >
              <Col sm={2}>
                Name
              </Col>
              <Col sm={10}>
                <FormControl
                  type='text'
                  placeholder='Name'
                />
                <FormControl.Feedback />
              </Col>
            </FormGroup>
            <FormGroup controlId='formHorizontalMessage'>
              <Col sm={2}>
                Message
              </Col>
              <Col sm={10}>
                <FormControl
                  componentClass='textarea'
                  placeholder='Your message...'
                />
                <FormControl.Feedback />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button bsStyle='success' type='submit'>
                  Send
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </Col>
    </Row>
  </Grid>
);

export default PostForm
