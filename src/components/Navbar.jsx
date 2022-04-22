import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">pres.dev</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Stonks">Stonks</Nav.Link>
          <Nav.Link href="/Projects">Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
