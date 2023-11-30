import React from 'react'
import { Col,Form,Button,Row} from 'react-bootstrap'
import propTypes from 'prop-types'
import './AddTicketStyle.css'


export const AddTicketForm = ({handleOnchange,frmData,handleOnsubmit,frmDataError}) => {
  return (

    <div>
      
        <div className='mt-3 add-new-ticket bg-light'> 
        <h1 className='text-info text-center'>Add New Ticket</h1>

        <Form  autoComplete="off" onSubmit={handleOnsubmit}>
              <Form.Group as ={Row} >
                <Form.Label column sm={5}>Subject</Form.Label>
                <Form.Control column sm={5}
                 onChange={handleOnchange}
                 // minLength={3}
                  maxLength="100"
                value={frmData.subject} 
                name='subject' type="text" placeholder="Enter Subject" required/>
                <Form.Text className='text-danger'>
                  {frmDataError.subject && "Subject is required"}
                  </Form.Text>

                
              </Form.Group>
              <Form.Group  as ={Row}>
                <Form.Label column sm={5}>Issue Found</Form.Label>
                <Col sm={9}>
                <Form.Control  onChange={handleOnchange} 
                row="5"
                 name='issueDate' 
                value={frmData.issueDate} 
                type="date"
                 placeholder="Select Date" required/>
                </Col>
              </Form.Group>
              
            

              <Form.Group  as ={Row}>
                <Form.Label column sm={7}>Details</Form.Label>
                <Col sm={9}>
                <Form.Control  
                onChange={handleOnchange}
                row='5'
                 name='details' 
                value={frmData.details} 
                type="text"
                 placeholder="Enter Details"/>
                </Col>
              </Form.Group>

              <Button className='m-3' variant="info" block type="submit">
                Login
              </Button>
            </Form>
            </div> 
    </div>
  )
}
AddTicketForm.propTypes={
    handleOnchange:propTypes.func.isRequired,
    frmData:propTypes.object.isRequired,
    handleOnsubmit:propTypes.func.isRequired,
    frmDataError:propTypes.func.isRequired
}
