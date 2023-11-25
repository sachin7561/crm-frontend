import React from 'react'
import { Col, Container, Form, Row ,Button} from 'react-bootstrap'
import PropTypes from 'prop-types';

export const ResetPassword = ({handleOnchange,
  handleOnResetsubmit,formSwitcher,email}) => {
  return (
    <>
    <Container>
        <Row>
            <Col><h1 className='text-center'>Reset Password</h1></Col> <hr />
            <Form  autoComplete="off" onSubmit={handleOnResetsubmit}>
              <Form.Group >
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handleOnchange} value={email} name='email' type="email"  placeholder="Enter email" required/>

                
              </Form.Group>
              
              {/* <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handleOnchange}  name='password' value={pass} type="password" placeholder="Enter Password" required/>
                
              </Form.Group> */}

              <Button   className='m-3' variant="primary" type="submit">
               Reset Password
              </Button>
            </Form><hr />
        </Row>
        <Row>
         <Col>
         <a href="#" onClick={()=>formSwitcher('login')}>Login Now?</a>
         </Col>
        </Row>
    </Container>
    </>
  )
}
ResetPassword.propTypes ={
  handleOnchange:PropTypes.func.isRequired,
  handleOnResetsubmit:PropTypes.func.isRequired,
  formSwitcher:PropTypes.func.isRequired,

  email:PropTypes.string.isRequired,
  
}
