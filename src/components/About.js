import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.div`
  padding: 70px 40px;
  text-align: center;
  min-height: 100vh;
  background: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h2`
  font-size: 64px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 22px;
  color: #bbb;
  max-width: 800px;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Heading>About Me</Heading>
      <Paragraph>
        I’m currently pursuing a B.Tech in Computer Science at IIIT Delhi, where I’ve
        focused heavily on website development. To date, I’ve designed and delivered
        multiple client projects, ranging from simple brochure sites to full-featured
        web apps, with consistently positive feedback.
      </Paragraph>
    </AboutSection>
  );
};

export default About;
