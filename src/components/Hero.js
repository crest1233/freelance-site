import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 150px;
  height: 100vh;
  background: #121212;

  .text {
    max-width: 600px;
  }

  h1 {
    font-size: 72px;
    color: white;
    margin-bottom: 10px;
  }

  p {
    font-size: 28px;
    color: #bbb;
    margin-bottom: 20px;
  }

  .cta {
    display: flex;
    gap: 20px;
  }

  button {
    padding: 15px 30px;
    font-size: 22px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 30px;
    transition: background 0.3s ease, color 0.3s ease;
  }

  .hire {
    background: #8a4cff;
    color: white;
  }

  .work {
    background: transparent;
    border: 3px solid #bbb;
    color: #bbb;
  }

  .profile {
    position: relative;
  }

  .circle {
    width: 450px;
    height: 450px;
    background: #8a4cff;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    left: -50px;
    z-index: -1;
  }

  .profile img {
    width: 350px;
    border-radius: 10px;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <div className="text">
        <h1>Hello!<br />I’m <strong>Tanishk Singh</strong></h1>
        <p>Fullstack Web Developer</p>
        <div className="cta">
          <ScrollLink to="contact" smooth={true} duration={800} offset={-70}>
            <button className="hire">Hire Me!</button>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={800} offset={-70}>
            <button className="work">My Work</button>
          </ScrollLink>
        </div>
      </div>
      <div className="profile">
        <div className="circle"></div>
        <img src="/profile.png" alt="Tanishk Singh" />
      </div>
    </HeroSection>
  );
};

export default Hero;
