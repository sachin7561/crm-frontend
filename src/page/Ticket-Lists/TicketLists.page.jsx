import React, { useEffect, useState } from 'react'
import{Container,Row,Col,Button} from 'react-bootstrap'

import { PageBreadcrumb} from '../../components/breadcrumb/Breadcrumb'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import tickets from '../../assests/data/dummy-tickets.json'
import { TicketTable } from '../../components/ticket-table/TicketTable'
import {Link} from 'react-router-dom'


export const TicketLists = () => {
 const [str,setStr]=useState('')
 const[dispTicket,setdispTicket] = useState(tickets)
 useEffect(()=>{ },[str,dispTicket])

  const handleOnchange=e=>{
    const {value} = e.target;

    setStr(value)
  
    searchTicket(value)
  }
  const searchTicket=sttr=>{
    const displayTickets= tickets.filter((row)=>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );
    console.log(displayTickets);
    setdispTicket(displayTickets)
    
  }
  return (
    <div>
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Ticket Lists"/>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>

                <Link to="/add-ticket">
                <Button variant="info"> Add New Ticket</Button>

                </Link>
                </Col>
                <Col className='text-right'>
                <SearchForm handleOnchange={handleOnchange} str={str}/>
                </Col>
            </Row>
            <hr />
            <Row>
              <Col>
              <TicketTable tickets={dispTicket}/>
              </Col>
            </Row>
        </Container>
    </div>
  )
}
