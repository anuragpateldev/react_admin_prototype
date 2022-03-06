import React from 'react';
import './ANavbar.css';
import { Navbar , Container , NavDropdown , Nav} from 'react-bootstrap';

const ANavbar = () =>{
    return (
        <div className='menu__header'>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/admin/login">Admin Prototype</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    )
}

export default ANavbar;