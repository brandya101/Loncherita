import React from 'react'
import {Jumbotron,Form, FormGroup,FormControl,Col,InputGroup,Glyphicon, Button, ControlLabel} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Login = () => (
  <Jumbotron>
    <Form horizontal>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <InputGroup>
            <InputGroup.Addon><Glyphicon glyph="user" /></InputGroup.Addon>
            <FormControl type="email" placeholder="Email" />
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={10}>
          <InputGroup>
            <InputGroup.Addon><Glyphicon glyph="lock" /></InputGroup.Addon>
            <FormControl type="password" placeholder="Password" />
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <LinkContainer className="forgot" to="/"><span>Forgot password?</span></LinkContainer>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">
            Sign in
          </Button>
        </Col>
      </FormGroup>
    </Form>
  </Jumbotron>
)
export default Login;