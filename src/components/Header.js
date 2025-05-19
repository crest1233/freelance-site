import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: #121212;
  position: sticky;
  top: 0;
  z-index: 10;

  .nav-links {
    display: flex;
    gap: 30px;
  }

  a {
    font-size: 18px;
    color: #bbb;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #8a4cff;
  }

  .active {
    color: #8a4cff !important;
    font-weight: 600;
  }
`;

const Header = () => {
  return (
    <Navbar>
      {/* Logo / Home Link */}
      <RouterLink to="/" className="active">Home</RouterLink>

      {/* Scroll Links */}
      <div className="nav-links">
        <ScrollLink to="projects" smooth={true} duration={800} spy={true} offset={-70} activeClass="active">Projects</ScrollLink>
        <ScrollLink to="about" smooth={true} duration={800} spy={true} offset={-70} activeClass="active">About</ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={800} spy={true} offset={-70} activeClass="active">Skills</ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={800} spy={true} offset={-70} activeClass="active">Contact</ScrollLink>
      </div>
    </Navbar>
  );
};

export default Header;
