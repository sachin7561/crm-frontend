import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assests/img/logo.jpg'
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 
import { useHistory } from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap'; 
export const Header = () => {

  const history=useNavigate()

  const logMeOut=()=>{
    history('/')
  }

  return (
    <div>
        
        <Navbar bg="light" data-bs-theme="light" 
        expand="md"
        >
      
          <Navbar.Brand href="#home"><img src={logo} width="50px" alt="" />Home </Navbar.Brand>
           <Navbar.Toggle
           aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav ' className='justify-content-end mx-2' > 
            <Nav className="ml-auto" >

            <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
            </LinkContainer>

            <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
           
          </Nav>
            </Navbar.Collapse>
      
      </Navbar>
    </div>
  )
}
