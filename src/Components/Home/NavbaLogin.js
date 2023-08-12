import React from 'react'
import { Button, Form, FormControl, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarLogin = () => {

  return (
    <div>
     <Navbar bg="dark" expand="lg" variant="dark">
  <Navbar.Brand href="#">Clinic App</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      {
        (
          localStorage.getItem("token")==="" ||localStorage.getItem("token")=="" || localStorage.getItem("token")===null?
          <Nav.Link><Link to="login">Login</Link></Nav.Link>:
          <Nav.Link><Link to="Patient">Patient</Link></Nav.Link>
        )
      }
      
      
      <Nav.Link href="#" disabled> walid</Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default NavbarLogin
