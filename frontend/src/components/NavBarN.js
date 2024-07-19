import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBarN.css';  

const NavBarN = () => {
  return (
    <Navbar bg='dark' expand='lg' className='navbar-dark'>
      <Navbar.Brand as={NavLink} to="/" className='brand'>
        Recipe App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='ms-auto'>
          <Nav.Link as={NavLink} to="/ShowRecipes" className='nav-link-custom show-recipes-nav'>
            Recipes
          </Nav.Link>
          <Nav.Link as={NavLink} to="/addrecipe" className='nav-link-custom add-recipe-nav'>
            Add Recipe
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarN;
