import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.div`
  padding: 80px 50px;
  text-align: center;
  min-height: 100vh;
  background: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h2`
  font-size: 80px; /* Increased font size */
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  line-height: 1.1; /* Adjusted line height */
  margin-bottom: 30px;
  
  span {
    display: block; /* Puts "TOGETHER" on a new line */
    color: #8a4cff; /* Purple color */
  }
`;

const Form = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 25px; /* Increased spacing between inputs */
`;

const InputRow = styled.div`
  display: flex;
  gap: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 18px;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  background: #333;
  color: white;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 18px;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  background: #333;
  color: white;
  resize: none;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 18px;
  font-size: 22px;
  font-weight: bold;
  background: #8a4cff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Heading>LET’S WORK <span>TOGETHER</span></Heading>
      <Form>
        <InputRow>
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Email" />
        </InputRow>
        <Textarea placeholder="Message" rows="4"></Textarea>
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </ContactSection>
  );
};

export default Contact;
