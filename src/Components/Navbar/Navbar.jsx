import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import TVShows from '../TVShows/TVShows';
import Movies from '../Movies/Movies';
import CartWidget from '../CartWidget/CartWidget';

const Navbarr = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="#home">NiLuCine</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/tvshows">
            TV Shows
          </Nav.Link>
          <Nav.Link as={Link} to="/movies">
            Movies
          </Nav.Link>
          <Nav.Link as={Link} to="/category/keyboard">
            Keyboard
          </Nav.Link>
          <Nav.Link as={Link} to="/category/mouse">
            Mouse
          </Nav.Link>
          <Nav.Link as={Link} to="/item/555">
            Item
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default Navbarr;
