import React, { useEffect, useState} from 'react'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb'
import { Container ,Row,Col,Button} from 'react-bootstrap'
import tickets from '../../assests/data/dummy-tickets.json'
import { MessageHistory } from '../../components/message-history/MessageHistory'
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket'


export const Ticket = () => {
    const [message,setMessage]=useState('')

    useEffect(()=>{

    },[message])

    const handleOnChange=(e) => {
        setMessage(e.target.value)
    }

    const handleOnSubmit=(e) => {
        alert('form submitted successfully')
    }

    const ticket=tickets[0]
  return (
    <div>
        
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb  page="Ticket"/>
                
                </Col>
            </Row>
            <Row>
                <Col className='text-weight-bolder text-secondary'>
                <div className="subject">Subject:{ticket.subject}</div>
                <div className="date">IssueDate:{ticket.addedAT}</div>
                <div className="status">Status:{ticket.status}</div>
                
                </Col>
                <Col className='text-right'>
              
                    <Button variant="outline-info"> Close Ticket</Button>
                </Col>

            </Row>

            <Row className='mt-4'>
                <Col >
                <MessageHistory msg={ticket.history}/>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col >
                <UpdateTicket msg={message} 
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
