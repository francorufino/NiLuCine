import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TVShows from '../TVShows/TVShows';
import Movies from '../Movies/Movies';
import CartWidget from '../CartWidget/CartWidget';

const Navbarr = () => {
  return (
    <BrowserRouter>
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
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>

      <div>
        <Routes>
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navbarr;
