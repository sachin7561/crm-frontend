import React from 'react'
import { Col, Container, Form, Row ,Button} from 'react-bootstrap'
import PropTypes from 'prop-types';

export const LoginForm = ({handleOnchange,
  handleOnsubmit,formSwitcher ,email,pass,}) => {
  return (
    <>
    <Container>
        <Row>
            <Col><h1 className='text-center'>Client Login</h1></Col> <hr />
            <Form  autoComplete="off" onSubmit={handleOnsubmit}>
              <Form.Group >
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handleOnchange} value={email} name='email' type="email"  placeholder="Enter email" required/>

                
              </Form.Group>
              
              <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handleOnchange}  name='password' value={pass} type="password" placeholder="Enter Password" required/>
                
              </Form.Group>

              <Button className='m-3' variant="primary" type="submit">
                Login
              </Button>
            </Form><hr />
        </Row>
        <Row>
         <Col>
         <a href="#" onClick={()=>formSwitcher('rest')}>Forget Password?</a>
         </Col>
        </Row>
    </Container>
    </>
  )
}
LoginForm.propTypes ={
  handleOnchange:PropTypes.func.isRequired,
  handleOnsubmit:PropTypes.func.isRequired,
  formSwitcher:PropTypes.func.isRequired,
  email:PropTypes.string.isRequired,
  pass:PropTypes.string.isRequired
}
