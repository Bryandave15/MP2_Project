import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Form, Nav, NavDropdown, Container } from 'react-bootstrap';
import SearchComponent from './searchbar';

const Header = () => {
  const navigate = useNavigate();


  // Function to handle logout
  const logoutUser = () => {
    // Clear the 'loginUser' key from local storage
    localStorage.removeItem('loginUser');
    // Redirect the user to the login page
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-2">
      <Container>
        <Navbar.Brand href="#home">Project Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-around align-items-center">
          <Form inline className="mb-2 mb-lg-0 ">
            <div className="container-fluid">
              <SearchComponent />
            </div>
          </Form>
          <Nav className="ml-2">
            <NavDropdown title="Account" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item> 
                <button onClick={logoutUser} variant="outline-none" className='border-none'>Logout</button>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
};

export default Header;
