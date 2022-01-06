import React from 'react';
import {Navbar, Container, NavbarBrand, Nav} from 'react-bootstrap'


function Stonkbar() {
    return ( 
        <Navbar bg="dark" variant="dark">
            <Container>
            <Nav>
                <Nav.Link href="/Stonks">2022</Nav.Link>
                <Nav.Link href="/Stonks/Fame">Hall of Fame</Nav.Link>
                <Nav.Link href="/Stonks/Shame">Hall of Shame</Nav.Link>
                <Nav.Link href="/Stonks/Info">Info</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
     );
}

export default Stonkbar;