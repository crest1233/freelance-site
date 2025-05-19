import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.div`
  padding: 50px 30px 60px;
  background: #121212;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 60px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  margin-bottom: 50px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: #8a4cff;
    margin: 14px auto 0 auto;
    border-radius: 2px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.a`
  position: relative;
  display: block;
  background: #2a2a2a;
  border-radius: 15px;
  overflow: hidden;
  height: 320px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
  transition: transform 0.25s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: translateY(-6px);
  }

  &:hover .overlay {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(18, 18, 18, 0.75);
    width: 100%;
    height: 100%;
    color: white;
    opacity: 0;
    padding: 20px;
    text-align: center;
    transition: opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .overlay h3 {
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: 700;
    color: #fff;
  }

  .overlay p {
    font-size: 16px;
    color: #ccc;
    line-height: 1.5;
    max-width: 90%;
  }
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Heading>My Projects</Heading>
      <ProjectsGrid>
        <ProjectCard href="https://crest1233.github.io/asthakunj/" target="_blank" rel="noopener noreferrer">
          <img src="/project1.jpeg" alt="Project 1" />
          <div className="overlay">
            <h3>Astha Kunj</h3>
            <p>A grassroots NGO empowering underprivileged communities with education, healthcare, and basic necessities.</p>
          </div>
        </ProjectCard>
        <ProjectCard href="https://crest1233.github.io/Tanishk/" target="_blank" rel="noopener noreferrer">
          <img src="/project2.jpeg" alt="Project 2" />
          <div className="overlay">
            <h3>Student website</h3>
            <p>A CS graduate’s personal site highlighting expertise in programming, data structures, and machine learning.</p>
          </div>
        </ProjectCard>
        <ProjectCard href="https://crest1233.github.io/chaitanya/" target="_blank" rel="noopener noreferrer">
          <img src="/project3.jpeg" alt="Project 3" />
          <div className="overlay">
            <h3>Designer Portfolio </h3>
            <p>A digital designer’s showcase offering bespoke brand identities and creative collateral.</p>
          </div>
        </ProjectCard>
        <ProjectCard href="https://crest1233.github.io/freelance/" target="_blank" rel="noopener noreferrer">
          <img src="/project4.jpeg" alt="Project 4" />
          <div className="overlay">
            <h3>Freelance Landing Page</h3>
            <p>Marketing page design for promoting freelance development services with strong CTA.</p>
          </div>
        </ProjectCard>
        <ProjectCard href="https://btp2-bkek.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src="/project5.jpeg" alt="Project 5" />
          <div className="overlay">
            <h3>Inverso</h3>
            <p>A reverse-bidding procurement platform that brings transparency, competition, and savings to corporate buying.</p>
          </div>
        </ProjectCard>
        <ProjectCard href="https://example.com/project6" target="_blank" rel="noopener noreferrer">
          <img src="/project6.jpeg" alt="Project 6" />
          <div className="overlay">
            <h3>UGC website</h3>
            <p>A marketing strategist’s portfolio showcasing data-driven campaigns, revenue wins, and happy clients.</p>
          </div>
        </ProjectCard>
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
