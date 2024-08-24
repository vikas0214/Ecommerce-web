import React, { useState } from 'react'
import "../App.css"
import { Nav,Navbar,Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
function Header() {

  return (
    <div><Navbar bg="dark" data-bs-theme="dark">
    <Container >
      <Navbar.Brand href="">GoGo collections</Navbar.Brand>
      <Nav className="me-auto menu">
        <NavLink className="navItem" to={'/'}>Home</NavLink>
        <NavLink  className="navItem" to={'/about'}>About</NavLink>
        <NavLink className="navItem" to={'/products'}>Products</NavLink>
        <NavLink className="navItem" to={'/login'}>Login</NavLink>
        <NavLink className={"navItem"} to={'/admin'}>Dev</NavLink>
      </Nav>
    </Container>
  </Navbar>
  <br />
  </div>
  )
}

export default Header