import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assests/img/logo.jpg'
import { Container } from 'react-bootstrap';
export const Header = () => {
  return (
    <div>
        
        <Navbar bg="light" data-bs-theme="light" 
        expand="md"
        >
      
          <Navbar.Brand href="#home"><img src={logo} width="50px" alt="" /></Navbar.Brand>
           <Navbar.Toggle
           aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="ml-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#features">Tickets</Nav.Link>
            <Nav.Link href="#pricing">Logout</Nav.Link>
          </Nav>
            </Navbar.Collapse>
      
      </Navbar>
    </div>
  )
}
