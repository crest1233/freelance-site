import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.div`
  padding: 80px 50px;
  min-height: 100vh;
  background: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 72px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  line-height: 1.1;
  margin-bottom: 60px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #8a4cff;
    margin: 16px auto 0 auto;
    border-radius: 2px;
  }

  span {
    display: block;
    font-size: 64px;
    font-weight: 600;
    color: #ccc;
  }
`;

const SkillsList = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SkillItem = styled.div`
  border-left: 3px solid #8a4cff;
  padding-left: 20px;

  @media (max-width: 600px) {
    padding-left: 15px;
  }
`;

const Category = styled.h3`
  font-size: 22px;
  color: #b38aff;
  margin-bottom: 8px;
`;

const SkillDetails = styled.p`
  font-size: 18px;
  color: #ccc;
  line-height: 1.6;
`;

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Heading>
        CORE SKILLS <span>& TECHNOLOGIES</span>
      </Heading>
      <SkillsList>
        <SkillItem>
          <Category>Frontend</Category>
          <SkillDetails>
            HTML5, CSS3 (Flexbox, Grid), JavaScript (ES6+), React.js, Tailwind CSS
          </SkillDetails>
        </SkillItem>
        <SkillItem>
          <Category>Backend</Category>
          <SkillDetails>
            Node.js, Express.js, RESTful APIs
          </SkillDetails>
        </SkillItem>
        <SkillItem>
          <Category>Databases</Category>
          <SkillDetails>
            MongoDB, PostgreSQL
          </SkillDetails>
        </SkillItem>
        <SkillItem>
          <Category>Tooling & Workflow</Category>
          <SkillDetails>
            Git & GitHub, Webpack, NPM/Yarn
          </SkillDetails>
        </SkillItem>
        <SkillItem>
          <Category>UX/UI</Category>
          <SkillDetails>
            Responsive/mobile-first design, wireframing (Figma), accessibility best practices
          </SkillDetails>
        </SkillItem>
        <SkillItem>
          <Category>Performance & Optimization</Category>
          <SkillDetails>
            Code splitting, lazy loading, image optimization
          </SkillDetails>
        </SkillItem>
      </SkillsList>
    </SkillsSection>
  );
};

export default Skills;
