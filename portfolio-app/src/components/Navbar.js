import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    color: #ddd;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>My Portfolio</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
